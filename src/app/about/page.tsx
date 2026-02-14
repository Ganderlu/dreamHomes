import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <PageHeader
        title="About DreamHomes"
        subtitle="We connect buyers and sellers through trusted agents and transparent data."
        image="https://images.unsplash.com/photo-1505692794403-34cb4be2c9a6?w=1600&auto=format&fit=crop&q=80"
      />
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-zinc-700">
            Our mission is to make real estate simple, transparent and human.
            From discovery to closing, we provide tools and expertise that help
            you make confident decisions.
          </p>
          <p className="text-zinc-700">
            We partner with experienced agents and leverage market insights so
            you can find the right home at the right time.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl shadow">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&auto=format&fit=crop&q=80"
            alt=""
            width={1200}
            height={800}
            className="h-72 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
