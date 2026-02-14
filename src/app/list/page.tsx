'use client';

export default function ListPropertyPage() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Listing submitted');
  };
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
      <div className="rounded-2xl bg-zinc-900 p-8 text-white">
        <h1 className="text-3xl font-semibold">List Your Property</h1>
        <p className="mt-2 text-zinc-200">
          Share details and we will connect you with qualified buyers.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            required
            placeholder="Property title"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
          <select
            required
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          >
            <option value="">Property type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
          <input
            required
            type="number"
            placeholder="Price"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
          <input
            required
            placeholder="Location"
            className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          required
          rows={5}
          placeholder="Description"
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Submit listing
        </button>
      </form>
    </div>
  );
}
