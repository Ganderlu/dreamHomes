import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 shadow-sm ring-1 ring-black/5 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold text-zinc-900">
          DreamHomes
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
          <Link href="/" className="hover:text-zinc-900">
            Home
          </Link>
          <Link href="/properties" className="hover:text-zinc-900">
            Properties
          </Link>
          <Link href="/services" className="hover:text-zinc-900">
            Services
          </Link>
          <Link href="/about" className="hover:text-zinc-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-900">
            Contact
          </Link>
        </nav>
        <button
          className="inline-flex items-center rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 md:hidden"
          aria-label="Menu"
        >
          Menu
        </button>
      </div>
    </div>
  );
}
