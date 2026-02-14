import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHeader({ title, subtitle, image }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
      {image ? (
        <Image
          src={image}
          alt=""
          width={1600}
          height={500}
          className="h-56 w-full object-cover opacity-90"
          priority
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="relative p-8 text-white">
        <h1 className="text-3xl font-semibold">{title}</h1>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-zinc-200">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
