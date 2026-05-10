"use client";

import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/store/cartStore";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Plus,
  Minus,
  Clock3,
  Leaf,
  Egg,
} from "lucide-react";

import { useRef } from "react";

export default function ProductCard({
  product,
}) {

  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCartStore();

  const item = cart.find(
    (i) => i._id === product._id
  );

  const qty = item ? item.qty : 0;

  const imgRef = useRef(null);

  /*
  =====================================
  ADD TO CART
  =====================================
  */

  const handleAdd = () => {

    const img = imgRef.current;

    if (!img) {
      addToCart(product);
      return;
    }

    const rect =
      img.getBoundingClientRect();

    const clone =
      img.cloneNode(true);

    clone.style.position = "fixed";

    clone.style.left =
      rect.left + "px";

    clone.style.top =
      rect.top + "px";

    clone.style.width =
      rect.width + "px";

    clone.style.height =
      rect.height + "px";

    clone.style.zIndex = 9999;

    clone.style.borderRadius =
      "24px";

    clone.style.transition =
      "all .7s cubic-bezier(.65,-0.2,.2,1.2)";

    document.body.appendChild(
      clone
    );

    requestAnimationFrame(() => {

      clone.style.left =
        window.innerWidth - 70 + "px";

      clone.style.top = "20px";

      clone.style.width = "20px";

      clone.style.height = "20px";

      clone.style.opacity = 0.4;

    });

    setTimeout(() => {

      clone.remove();

      addToCart(product);

    }, 700);

  };

  return (

    <div
      className="

      group

      overflow-hidden

      rounded-[30px]

      border border-[#F4E2D7]

      bg-white

      shadow-[0_12px_40px_rgba(0,0,0,0.05)]

      transition-all duration-300

      hover:-translate-y-1

      hover:shadow-[0_18px_55px_rgba(0,0,0,0.08)]

    "
    >

      {/* IMAGE */}

      <Link
        href={`/products/${product.slug}`}
      >

        <div
          ref={imgRef}
          className="relative aspect-[4/4.1] overflow-hidden bg-[#f8f1ea]"
        >

          <Image
            src={
              product.image ||
              "/placeholder.png"
            }
            alt={product.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* TOP BADGES */}

          <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">

            {/* BADGE */}

            {product.badgeText ? (

              <div className="rounded-full bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-md">

                <p className="text-[9px] font-black uppercase tracking-wide text-[#FF8A3D]">

                  {product.badgeText}

                </p>

              </div>

            ) : (

              <div />

            )}

            {/* OFFER */}

            {product.offerText && (

              <div className="rounded-full bg-[#FF8A3D] px-3 py-1.5 shadow-xl">

                <p className="text-[9px] font-black uppercase tracking-wide text-white">

                  {product.offerText}

                </p>

              </div>

            )}

          </div>

        </div>

      </Link>

      {/* CONTENT */}

      <div className="space-y-3 p-4">

        {/* TITLE */}

        <Link
          href={`/products/${product.slug}`}
        >

          <h3 className="line-clamp-1 text-[18px] font-black leading-tight tracking-tight text-[#2B170B]">

            {product.name}

          </h3>

        </Link>

        {/* DESCRIPTION */}

        <p className="line-clamp-2 min-h-[38px] text-[13px] leading-relaxed text-[#8B5E3C]">

          {product.description ||
            "Freshly baked premium dessert crafted with rich flavors and premium ingredients."}

        </p>

        {/* PRICE */}

        <div className="flex items-center gap-2">

          <p className="text-[24px] font-black leading-none tracking-tight text-[#2B170B]">

            ₹{product.sellingPrice}

          </p>

        </div>

        {/* QUICK INFO */}

        <div className="flex flex-wrap gap-2">

          {/* EGG */}

          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF4EC] px-3 py-1.5">

            {product.cakeType ===
            "eggless" ? (

              <Leaf
                size={11}
                className="text-green-600"
              />

            ) : (

              <Egg
                size={11}
                className="text-orange-500"
              />

            )}

            <p className="text-[11px] font-semibold text-[#6B4423]">

              {product.cakeType ===
              "eggless"
                ? "Eggless"
                : "With Egg"}

            </p>

          </div>

          {/* TIME */}

      

          

        </div>

        {/* BUTTON AREA */}

        <div className="pt-1">

          <AnimatePresence mode="wait">

            {qty === 0 ? (

              <motion.button
                key="add-btn"
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={handleAdd}
                className="

                flex h-11 w-full

                items-center justify-center

                rounded-full

                bg-[#FF8A3D]

                text-sm font-black text-white

                shadow-[0_12px_30px_rgba(255,138,61,0.28)]

                transition-all

                hover:bg-[#f57c2e]

              "
              >

                Add To Cart +

              </motion.button>

            ) : (

              <motion.div
                key="qty"
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                }}
                className="

                flex h-11 w-full

                items-center justify-between

                rounded-full

                bg-[#FF8A3D]

                px-3

                text-white

                shadow-[0_12px_30px_rgba(255,138,61,0.30)]

              "
              >

                {/* MINUS */}

                <button
                  onClick={() =>
                    decreaseQty(
                      product._id
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                >

                  <Minus size={15} />

                </button>

                {/* QTY */}

                <span className="text-sm font-black">

                  {qty}

                </span>

                {/* PLUS */}

                <button
                  onClick={() =>
                    increaseQty(
                      product._id
                    )
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                >

                  <Plus size={15} />

                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </div>

  );

}