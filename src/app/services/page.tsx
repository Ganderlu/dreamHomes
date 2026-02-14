import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <PageHeader
        title="Our Services"
        subtitle="End-to-end support for buyers, sellers and investors."
        image="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600&auto=format&fit=crop&q=80"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Home Buying"
          description="Personalized search, tours and negotiations."
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l9 7-1.5 1.3L18 9.1V20h-5v-6H11v6H6V9.1L4.5 11.3 3 10l9-7z" />
            </svg>
          }
        />
        <FeatureCard
          title="Home Selling"
          description="Staging, marketing and top-dollar offers."
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h18v8H3zM3 3h8v6H3zM13 3h8v6h-8z" />
            </svg>
          }
        />
        <FeatureCard
          title="Mortgage Guidance"
          description="Get pre-approved and compare rates."
          icon={
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5zm0 7a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
