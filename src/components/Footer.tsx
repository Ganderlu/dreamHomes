"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-zinc-900">DreamHomes</p>
          <p className="mt-3 max-w-xs text-sm text-zinc-600">
            Discover and buy exceptional homes with guidance from trusted local
            experts.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-900">Company</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Press</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-900">Explore</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <Link href="#">Buy</Link>
            </li>
            <li>
              <Link href="#">Rent</Link>
            </li>
            <li>
              <Link href="#">Sell</Link>
            </li>
            <li>
              <Link href="#">Mortgage</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-900">Newsletter</p>
          <p className="mb-3 text-sm text-zinc-600">
            Market insights and home tours in your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed");
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-zinc-600 sm:flex-row">
          <p>© {new Date().getFullYear()} DreamHomes. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" className="hover:text-zinc-900">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2-.7.4-1.6.8-2.5 1C18 4.5 17 4 16 4c-2 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8C8.1 8.4 5 6.8 3 4.3c-.4.6-.6 1.3-.6 2.1 0 1.3.6 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.3 3 3.7-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.6 2.1 2.7 3.9 2.7-1.5 1.2-3.4 1.9-5.4 1.9H2c2 1.2 4.4 2 6.9 2 8.3 0 12.9-6.9 12.9-12.9v-.6c.8-.5 1.4-1.2 1.9-2z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-zinc-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zm6-2.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z" />
              </svg>
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-zinc-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.1C15.7 1 14.8 1 13.7 1 11.4 1 10 2.2 10 4.9V7H7v3h3v10h3V10z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
