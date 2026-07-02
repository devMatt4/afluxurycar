"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

type VehicleGalleryProps = {
  title: string;
  images: string[];
  categoryLabel: string;
};

export default function VehicleGallery({
  title,
  images,
  categoryLabel,
}: VehicleGalleryProps) {
  const galleryImages = images.length > 0 ? images : ["/placeholder-car.jpg"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = galleryImages[activeIndex];

  function goToPrevious() {
    setActiveIndex((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1
    );
  }

  function goToNext() {
    setActiveIndex((index) =>
      index === galleryImages.length - 1 ? 0 : index + 1
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsLightboxOpen(true)}
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-surface"
      >
        <Image
          src={activeImage}
          alt={title}
          fill
          priority
          unoptimized
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 720px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white">
          {categoryLabel}
        </div>

        <div className="absolute bottom-5 right-5 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
          {activeIndex + 1} / {galleryImages.length}
        </div>
      </button>

      {galleryImages.length > 1 ? (
        <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-5">
          {galleryImages.slice(0, 10).map((image, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={
                  isActive
                    ? "relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-primary bg-surface"
                    : "relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-surface opacity-70 transition hover:opacity-100"
                }
              >
                <Image
                  src={image}
                  alt={`${title} foto ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="160px"
                />
              </button>
            );
          })}
        </div>
      ) : null}

      {isLightboxOpen ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          {galleryImages.length > 1 ? (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronRight size={28} />
              </button>
            </>
          ) : null}

          <div className="relative h-[82vh] w-full max-w-7xl">
            <Image
              src={activeImage}
              alt={title}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur-xl">
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      ) : null}
    </div>
  );
}
