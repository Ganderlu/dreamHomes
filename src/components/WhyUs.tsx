type Item = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const items: Item[] = [
  {
    title: "Trusted Listings",
    description: "Verified properties with accurate photos and details.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2 3 7v6a9 9 0 0 0 9 9 9 9 0 0 0 9-9V7l-9-5zm-1 13 6-6-1.41-1.41L11 12.17 8.41 9.59 7 11l4 4z" />
      </svg>
    ),
  },
  {
    title: "Expert Agents",
    description: "Work with top-rated local professionals.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 9a7 7 0 0 1 14 0H5z" />
      </svg>
    ),
  },
  {
    title: "Seamless Search",
    description: "Filters, maps and alerts that keep you in control.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 16 14.5l4 4-1.5 1.5-4-4zM10 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
      </svg>
    ),
  },
  {
    title: "Secure Transactions",
    description: "Modern safeguards from search to closing.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1 3 5v6c0 5 3.8 9.7 9 11 5.2-1.3 9-6 9-11V5l-9-4zm1 14h-2v-4h2v4zm0-6h-2V7h2v2z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-zinc-900">Why Choose Us</h2>
        <p className="mt-2 text-zinc-600">
          Value you can trust from the first search to the final signature.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex h-full flex-col gap-3 rounded-xl border border-zinc-100 bg-white p-5 text-left shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              {it.icon}
            </div>
            <p className="font-medium text-zinc-900">{it.title}</p>
            <p className="text-sm text-zinc-600">{it.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
