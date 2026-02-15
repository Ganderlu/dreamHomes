 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <header className="w-screen bg-black pb-10 pt-6">
      <div className="relative h-[460px] w-screen overflow-hidden">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl px-4 text-center text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Premium Real Estate
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Find Your Dream Home
            </h1>
            <p className="mt-4 text-sm font-medium text-zinc-200 sm:text-base">
              Discover handpicked properties in prime locations, guided by trusted
              local experts.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
