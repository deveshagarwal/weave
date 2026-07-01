"use client";

import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

// Landing call to action. Signed out, it opens Clerk sign-up (then onboarding);
// signed in, it links straight to the app.
export default function JoinCTA({
  signedIn,
  href,
  label,
  className,
  size,
}: {
  signedIn: boolean;
  href: string;
  label: string;
  className?: string;
  size?: ComponentProps<typeof Button>["size"];
}) {
  if (signedIn) {
    return (
      <Button render={<Link href={href} />} size={size} className={className}>
        {label}
      </Button>
    );
  }
  return (
    <SignUpButton mode="modal" forceRedirectUrl="/onboard">
      <Button size={size} className={className}>
        {label}
      </Button>
    </SignUpButton>
  );
}
