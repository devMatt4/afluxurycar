"use client";

import Image from "next/image";
import imageCompression from "browser-image-compression";
import { ImagePlus, Loader2, Trash2 } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { supabase } from "lib/supabase";
import type { VehicleFormValues } from "schemas/vehicle.schema";

const BUCKET_NAME = "vehicle-images";
const MAX_IMAGES = 10;

export default function ImageUploader() {
  const form = useFormContext<VehicleFormValues>();
  const images = form.watch("images") ?? [];
  const [isUploading, setIsUploading] = useState(false);

  async function handleFiles(files: FileList | null) {
    if (!files || isUploading) return;

    const selectedFiles = Array.from(files);
    const remainingSlots = MAX_IMAGES - images.length;
    const filesToUpload = selectedFiles.slice(0, remainingSlots);

    if (filesToUpload.length === 0) return;

    setIsUploading(true);

    try {
      const uploadedUrls = await Promise.all(
        filesToUpload.map(async (file) => {
          const compressedFile = await imageCompression(file, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            fileType: "image/webp",
          });

          const fileName = `${crypto.randomUUID()}.webp`;
          const filePath = `vehicles/${fileName}`;

          const { error } = await supabase.storage
            .from(BUCKET_NAME)
            .upload(filePath, compressedFile, {
              contentType: "image/webp",
              upsert: false,
            });

          if (error) {
            console.error("Upload error:", error);
            return null;
          }

          const { data } = supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(filePath);

          return data.publicUrl;
        })
      );

      const validUrls = uploadedUrls.filter((url): url is string =>
        Boolean(url)
      );

      form.setValue("images", [...images, ...validUrls], {
        shouldDirty: true,
        shouldValidate: true,
      });
    } finally {
      setIsUploading(false);
    }
  }

  function removeImage(url: string) {
    form.setValue(
      "images",
      images.filter((image) => image !== url),
      {
        shouldDirty: true,
        shouldValidate: true,
      }
    );
  }

  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-black">Foto</h2>
        <p className="text-sm text-zinc-500">
          Carica fino a {MAX_IMAGES} immagini. La prima sarà usata come immagine
          principale.
        </p>
      </div>

      <label className="mt-6 flex h-56 cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-50 transition hover:border-primary hover:bg-blue-50">
        {isUploading ? (
          <Loader2 className="animate-spin text-primary" size={36} />
        ) : (
          <ImagePlus className="text-primary" size={36} />
        )}

        <span className="mt-4 text-center text-sm font-semibold text-zinc-600">
          {isUploading
            ? "Compressione e caricamento immagini..."
            : "Clicca per caricare immagini"}
          <br />
          massimo 10 fotografie
        </span>

        <input
          type="file"
          accept="image/*"
          multiple
          disabled={isUploading}
          className="hidden"
          onChange={(event) => {
            handleFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </label>

      {images.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image}
                  alt={`Foto veicolo ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 260px"
                />
              </div>

              {index === 0 ? (
                <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  Principale
                </span>
              ) : null}

              <button
                type="button"
                onClick={() => removeImage(image)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm transition hover:bg-red-50 hover:text-red-600"
                aria-label="Rimuovi immagine"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
/*imageUploadere*/
