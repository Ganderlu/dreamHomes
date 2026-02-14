'use client';

export default function ContactForm() {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thanks, we will reach out shortly.');
  };
  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          placeholder="First name"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        />
        <input
          required
          placeholder="Last name"
          className="rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email address"
        className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
      <textarea
        required
        placeholder="Tell us how we can help"
        rows={4}
        className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Send message
      </button>
    </form>
  );
}
