import Image from "next/image";

type Props = {
  image: string;
  price: string;
  title: string;
  beds: number;
  baths: number;
  area: string;
  likes?: number;
  rating?: number;
};

const Icon = {
  Bed: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M3 10V7a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3h4a2 2 0 0 1 2 2v6h-2v-3H5v3H3v-8a2 2 0 0 1 2-2h12V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3z"
      />
    </svg>
  ),
  Bath: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M7 3a3 3 0 0 1 5.917-.75L11 3.5 9.5 5 7 3zm13 9v3a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-1h2v1a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3h2z"
      />
    </svg>
  ),
  Area: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M3 5h18v14H3V5zm2 2v10h14V7H5z"
      />
    </svg>
  ),
  Heart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 21s-7-4.35-9.5-7.35C.5 11.32 2.14 7 6 7c2.22 0 3.54 1.52 4 2.07C10.46 8.52 11.78 7 14 7c3.86 0 5.5 4.32 3.5 6.65C19 16.65 12 21 12 21z"
      />
    </svg>
  ),
  Star: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  ),
};

export default function PropertyCard({
  image,
  price,
  title,
  beds,
  baths,
  area,
  likes = 0,
  rating = 0,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-900">{price}</p>
          <div className="flex items-center gap-2 text-zinc-500">
            <Icon.Star className="h-4 w-4" />
            <span className="text-xs">{rating.toFixed(1)}</span>
            <Icon.Heart className="h-4 w-4" />
            <span className="text-xs">{likes}</span>
          </div>
        </div>
        <p className="text-sm text-zinc-600">{title}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1">
            <Icon.Bed className="h-4 w-4" /> {beds} Bed
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon.Bath className="h-4 w-4" /> {baths} Bath
          </span>
          <span className="inline-flex items-center gap-1">
            <Icon.Area className="h-4 w-4" /> {area}
          </span>
        </div>
      </div>
    </div>
  );
}
