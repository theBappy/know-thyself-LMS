"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out successfully");
        },
      },
    });
  }
  return (
    <>
      <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <Badge>The Future lies knowing yourself first then learn</Badge>
        </div>
      </section>
    </>
  );
}



    // <div className="p-24">
    //   <h1 className="text-2xl font-bold text-rose-500">Hello World</h1>
    //   <ThemeToggle />
    //   {session ? (
    //     <div>
    //       <p>{session.user.name}</p>
    //       <Button onClick={signOut}>Logout</Button>
    //     </div>
    //   ) : (
    //     <Button>Login</Button>
    //   )}
    // </div>
