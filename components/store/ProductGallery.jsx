"use client";

import { useState } from "react";

import Image from "next/image";

export default function ProductGallery({
  images = [],
  name
}) {

  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (

    <div>

      {/* MAIN IMAGE */}

      <div className="relative overflow-hidden rounded-[38px] border border-[#F6DFD0] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)]">

        <div className="relative aspect-[1/1.02] overflow-hidden">

          <Image
            src={activeImage}
            alt={name}
            fill
            priority
            className="object-cover transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"/>

        </div>

      </div>


      {/* THUMBNAILS */}

      {images.length > 1 && (

        <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-1">

          {images.map((img, i) => (

            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`

              relative
              h-[88px]
              w-[88px]
              shrink-0
              overflow-hidden
              rounded-[22px]
              border-2
              transition-all

              ${activeImage === img
                ? "border-[#FF8A3D] scale-[1.02]"
                : "border-[#F6DFD0]"
              }

              `}
            >

              <Image
                src={img}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
              />

            </button>

          ))}

        </div>

      )}

    </div>

  );

}