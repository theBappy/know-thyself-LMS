"use client";

import { useState, useTransition, Suspense } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

export default function VerifyRequestRoute(){
  return (
    <Suspense>
        <VerifyRequest />
    </Suspense>
  )
}

function VerifyRequest() {
  const [otp, setOtp] = useState("");
  const [emailPending, startTransition] = useTransition();
  const params = useSearchParams();
  const email = params.get("email") as string;
  const router = useRouter();
  const isOtpCompleted = otp.length === 6;

  function verifyOtp() {
    startTransition(async () => {
      await authClient.signIn.emailOtp({
        email: email,
        otp: otp,
        fetchOptions: {
          onSuccess: () => {
            toast.success("Email verified successfully");
            router.push("/");
          },
          onError: () => {
            toast.error("Error verifying email");
          },
        },
      });
    });
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent a verification email code to you email address. Please
          open the email and pasted the code below.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={6}
            className="gap-2"
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6 digit code sent to your email
          </p>
        </div>
        <Button
          onClick={verifyOtp || !isOtpCompleted}
          disabled={emailPending}
          className="w-full"
        >
          {emailPending ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
            </>
          ) : (
            "Verify Account"
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
