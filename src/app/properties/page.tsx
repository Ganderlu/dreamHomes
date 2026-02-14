import PageHeader from "@/components/PageHeader";
import PropertyCard from "@/components/PropertyCard";
import SearchBar from "@/components/SearchBar";

const img1 =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&auto=format&fit=crop&q=80";
const img2 =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop&q=80";
const img3 =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80";

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <PageHeader
        title="Browse Properties"
        subtitle="Filter and discover homes that match your lifestyle."
        image="https://images.unsplash.com/photo-1560185127-6ed189bf02cb?w=1600&auto=format&fit=crop&q=80"
      />
      <SearchBar />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <PropertyCard
          image={img1}
          price="$2,450,000"
          title="Contemporary Villa"
          beds={5}
          baths={4}
          area="4,500 ft²"
          likes={21}
          rating={4.7}
        />
        <PropertyCard
          image={img2}
          price="$1,150,000"
          title="Modern Apartment"
          beds={3}
          baths={2}
          area="1,800 ft²"
          likes={12}
          rating={4.5}
        />
        <PropertyCard
          image={img3}
          price="$850,000"
          title="Family House"
          beds={4}
          baths={3}
          area="2,400 ft²"
          likes={43}
          rating={4.4}
        />
      </div>
    </div>
  );
}
