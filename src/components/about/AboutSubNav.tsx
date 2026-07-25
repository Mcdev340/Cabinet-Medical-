"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { aboutSubLinks } from "@/data/about";

export default function AboutSubNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation À propos"
      className="flex gap-1 overflow-x-auto border-b border-line pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {aboutSubLinks.map((link) => {
        const isActive =
          link.href === "/a-propos"
            ? pathname === "/a-propos"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              isActive
                ? "border-accent text-accent-dark"
                : "border-transparent text-ink-soft hover:border-line hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
