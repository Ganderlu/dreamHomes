import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <PageHeader
        title="Contact Us"
        subtitle="Questions about buying or selling? Our team is here to help."
        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&auto=format&fit=crop&q=80"
      />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
          <p className="mb-4 text-lg font-semibold text-zinc-900">
            Send a message
          </p>
          <ContactForm />
        </div>
        <div className="space-y-3">
          <p className="text-zinc-700">
            Prefer email? Reach us at hello@dreamhomes.example
          </p>
          <p className="text-zinc-700">
            We typically respond within one business day.
          </p>
        </div>
      </div>
    </div>
  );
}
