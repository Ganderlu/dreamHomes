"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            DH
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-900">
            DreamHomes
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-200 px-2 py-2 text-zinc-700 shadow-sm hover:bg-zinc-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-zinc-900 transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-zinc-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between rounded-lg px-2 py-2 ${
                    active
                      ? "bg-blue-50 text-blue-700"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
