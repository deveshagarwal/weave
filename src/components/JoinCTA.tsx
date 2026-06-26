"use client";

import Link from "next/link";
import { SignUpButton } from "@clerk/nextjs";

// Landing call to action. Signed out, it opens Clerk sign-up (then onboarding);
// signed in, it links straight to the app.
export default function JoinCTA({
  signedIn,
  href,
  label,
  className,
}: {
  signedIn: boolean;
  href: string;
  label: string;
  className?: string;
}) {
  if (signedIn) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <SignUpButton mode="modal" forceRedirectUrl="/onboard">
      <button className={className}>{label}</button>
    </SignUpButton>
  );
}
