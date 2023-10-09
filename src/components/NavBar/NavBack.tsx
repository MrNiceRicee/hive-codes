"use client";
import { useRouter, usePathname } from "next/navigation";

export function NavBack() {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === "/";
  if (isHome) return null;

  return (
    <button onClick={() => router.back()} className="font-sans font-light">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      back
    </button>
  );
}
