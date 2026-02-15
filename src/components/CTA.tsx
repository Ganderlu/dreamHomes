import Image from "next/image";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  button?: { label: string; href: string };
};

export default function CTA({ image, title, subtitle, button }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-lg">
      <Image
        src={image}
        alt=""
        width={1600}
        height={600}
        className="h-64 w-full object-cover opacity-80"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
        <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 max-w-xl text-sm font-medium text-zinc-100">
          {subtitle}
        </p>
        {button ? (
          <a
            href={button.href}
            className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            {button.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
