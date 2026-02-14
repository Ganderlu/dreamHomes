import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const agents = [
  {
    name: "Alex Johnson",
    title: "Senior Agent",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Taylor Lee",
    title: "Buyer Specialist",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "Jordan Smith",
    title: "Listing Expert",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=80",
  },
];

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <PageHeader
        title="Meet Our Agents"
        subtitle="Experienced professionals dedicated to your success."
        image="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&auto=format&fit=crop&q=80"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => (
          <div
            key={a.name}
            className="overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm"
          >
            <div className="relative h-56 w-full">
              <Image src={a.img} alt={a.name} fill className="object-cover" />
            </div>
            <div className="space-y-1 p-4">
              <p className="text-lg font-semibold text-zinc-900">{a.name}</p>
              <p className="text-sm text-zinc-600">{a.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
