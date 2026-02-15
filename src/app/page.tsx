import CTA from "@/components/CTA";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import PropertyCard from "@/components/PropertyCard";
import HeroSlider from "@/components/HeroSlider";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

const heroImages = ["/house1.jpg", "/house2.jpg", "/house3.jpg"];
const heroImage = heroImages[0];
const interiorImage = "/adam.jpeg";
const browserImage = "/vi.jpg";
const property1 =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&auto=format&fit=crop&q=80";
const property2 =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop&q=80";
const property3 =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSlider images={heroImages} />

      <main className="mx-auto max-w-6xl space-y-16 px-4 pb-20">
        <section>
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Why Clients Trust DreamHomes
            </h2>
            <p className="mt-3 text-sm font-medium text-zinc-700 sm:text-base">
              A modern real estate experience built on expertise, transparency and
              results.
            </p>
          </div>
          <WhyUs />
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
              About the CEO
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Leadership You Can Rely On
            </h2>
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="mt-2 text-sm font-medium text-zinc-700 sm:text-base">
                We help people secure homes they love with data-driven insights and
                experienced local agents. From the first viewing to the final
                signature, every detail is managed with care.
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-zinc-800">
                <li>• Expert advice from top-rated agents</li>
                <li>• Curated listings with verified details</li>
                <li>• Seamless process for buyers and sellers</li>
              </ul>
              <a
                href="/about"
                className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={interiorImage}
                alt=""
                width={1200}
                height={800}
                className="h-80 w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* <section>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Featured Properties
            </h2>
            <p className="mt-2 text-sm text-zinc-600 sm:text-base">
              Explore the best properties in your area.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PropertyCard
              image={property1}
              price="$2,500,000"
              title="Luxury in Beverly Hills."
              beds={6}
              baths={3}
              area="4,980 ft²"
              likes={12}
              rating={4.8}
            />
            <PropertyCard
              image={property2}
              price="$1,200,000"
              title="Modern Apartment"
              beds={2}
              baths={2}
              area="1,990 ft²"
              likes={33}
              rating={4.6}
            />
            <PropertyCard
              image={property3}
              price="$850,000"
              title="Suburban House"
              beds={3}
              baths={2}
              area="1,420 ft²"
              likes={120}
              rating={4.3}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              View All Properties
            </a>
          </div>
        </section> */}

        <section className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Browse Properties By Type
            </h3>
            <p className="mt-3 text-sm font-medium text-zinc-700 sm:text-base">
              Start the search you control with a trusted finish.
            </p>
            <div className="mt-6 grid gap-4">
              <FeatureCard
                title="Wide Range of Properties"
                description="From investment properties, condos and estates."
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 11h18v10H3V11zm2 2v6h14v-6H5zM3 3h8v6H3V3zm10 0h8v6h-8V3z" />
                  </svg>
                }
              />
              <FeatureCard
                title="Experienced Agents"
                description="Our partners excel at client success."
                icon={
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm-7 9a7 7 0 0 1 14 0H5z" />
                  </svg>
                }
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={browserImage}
              alt=""
              width={1200}
              height={800}
              className="h-80 w-full object-cover"
            />
          </div>
        </section>

        <section>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Recent Properties for Sale
            </h2>
            <p className="mt-2 text-sm font-medium text-zinc-700 sm:text-base">
              Find fresh properties in our selection for you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PropertyCard
              image={property1}
              price="$2,600,000"
              title="Luxury in Seattle, New Monk."
              beds={6}
              baths={3}
              area="3,800 ft²"
              likes={12}
              rating={4.7}
            />
            <PropertyCard
              image={property2}
              price="$1,200,000"
              title="Modern Apartment"
              beds={2}
              baths={2}
              area="1,990 ft²"
              likes={33}
              rating={4.5}
            />
            <PropertyCard
              image={property3}
              price="$850,000"
              title="Suburban House"
              beds={3}
              baths={2}
              area="1,420 ft²"
              likes={120}
              rating={4.4}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              View All Properties
            </a>
          </div>
        </section>

        <section>
          <CTA
            image={heroImage}
            title="Find Your Dream Home"
            subtitle="Sign up today and start exploring the best properties in your area."
            button={{ label: "Get Started", href: "#" }}
          />
        </section>
      </main>
    </div>
  );
}
