import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe webhook signature verification failed.", err);
    return new Response("Webhook error", { status: 400 });
  }

  // Only handle successful checkout sessions
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const courseId = session.metadata?.courseId;
    const customerId = session.customer as string;

    if (!courseId) {
      console.error("Course id not found in metadata");
      return new Response("Course id missing", { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { stripeCustomerId: customerId },
    });

    if (!user) {
      console.error("User not found for stripe customer:", customerId);
      return new Response("User not found", { status: 400 });
    }

    const enrollmentId = session.metadata?.enrollmentId;

    if (enrollmentId) {
      // Update existing enrollment
      await prisma.enrollment.update({
        where: { id: enrollmentId },
        data: {
          userId: user.id,
          courseId: courseId,
          amount: session.amount_total as number,
          status: "Active",
        },
      });
    } else {
      // Create a new enrollment
      await prisma.enrollment.create({
        data: {
          userId: user.id,
          courseId: courseId,
          amount: session.amount_total as number,
          status: "Active",
        },
      });
    }

    console.log(
      `Enrollment updated/created for user ${user.id} for course ${courseId}`
    );
  }

  return new Response(null, { status: 200 });
}
