"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CredBadge from "@/components/CredBadge";
import Logo from "@/components/Logo";

// The landing hero is full-bleed, so the nav is hidden there. Every other page
// gets the solid top bar.
export default function NavBar({ me }: { me: { name: string; karma: number } | null }) {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-20">
      <nav className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Logo size={20} className="text-[var(--accent)]" /> Ambit
        </Link>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/ask" className="hidden sm:block px-3 py-1.5 rounded-lg hover:bg-[var(--accent-soft)]">
            Ask
          </Link>
          <Link href="/community" className="hidden sm:block px-3 py-1.5 rounded-lg hover:bg-[var(--accent-soft)]">
            Community
          </Link>
          {me ? (
            <Link
              href="/home"
              className="ml-1 flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[var(--accent-soft)]"
            >
              <CredBadge karma={me.karma} size="sm" />
              <span className="font-medium hidden sm:inline">{me.name.split(" ")[0]}</span>
            </Link>
          ) : (
            <Link href="/onboard" className="btn btn-primary ml-1 !py-1.5 !px-3 text-sm whitespace-nowrap">
              Join the network
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
