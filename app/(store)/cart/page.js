"use client";

import { useCartStore } from "@/store/cartStore";

import Link from "next/link";

import Navbar from "@/components/layout/Navbar";

import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Clock3,
  CakeSlice,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function CartPage() {

  const {
    cart,
    addToCart,
    removeItem,
    decreaseQty,
  } = useCartStore();

  const totalItems = cart.reduce(
    (a, i) => a + i.qty,
    0
  );

  const subtotal = cart.reduce(
    (a, i) =>
      a + i.sellingPrice * i.qty,
    0
  );

  /*
  ====================================
  EMPTY STATE
  ====================================
  */

  if (cart.length === 0) {

    return (

      <section className="min-h-screen bg-[#FFF8F2]">

        <Navbar />

        <div className="mx-auto flex min-h-[80vh] max-w-md flex-col items-center justify-center px-6 text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF1E7]">

            <ShoppingBag
              size={42}
              className="text-[#FF8A3D]"
            />

          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#2B170B]">

            Your Cart Is Empty

          </h2>

          <p className="mt-3 text-sm leading-relaxed text-[#8B5E3C]">

            Add delicious cakes & desserts to start your sweet order 🎂

          </p>

          <Link
            href="/category/all"
            className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#FF8A3D] px-7 text-sm font-bold text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
          >

            Explore Menu

          </Link>

        </div>

      </section>

    );

  }

  /*
  ====================================
  MAIN
  ====================================
  */

  return (

    <section className="min-h-screen bg-[#FFF8F2] pb-40">

      <Navbar />

      {/* HEADER */}

      <div className="relative overflow-hidden border-b border-[#F5DED0] bg-white pt-[90px]">

        {/* GLOW */}

        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-7">

          <div className="flex items-center justify-between gap-4">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

                <CakeSlice
                  size={14}
                  className="text-[#FF8A3D]"
                />

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF8A3D]">

                  Sweet Cart

                </p>

              </div>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-[#2B170B]">

                Your Order 🛒

              </h1>

              <p className="mt-2 text-sm text-[#8B5E3C]">

                {totalItems} item
                {totalItems > 1 && "s"} added in cart

              </p>

            </div>

            {/* PRICE */}

            <div className="rounded-[28px] border border-[#F5DED0] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,0,0,0.05)]">

              <p className="text-xs font-medium text-[#8B5E3C]">

                Total

              </p>

              <h2 className="mt-1 text-2xl font-black text-[#FF8A3D]">

                ₹{subtotal}

              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* TRUST STRIP */}

      <div className="mx-auto mt-5 flex max-w-7xl flex-wrap gap-3 px-4">

        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">

          <Clock3
            size={14}
            className="text-[#16A34A]"
          />

          <p className="text-xs font-semibold text-[#2B170B]">

            Fast Delivery

          </p>

        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">

          <ShieldCheck
            size={14}
            className="text-[#16A34A]"
          />

          <p className="text-xs font-semibold text-[#2B170B]">

            Freshly Baked

          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="mx-auto mt-6 max-w-4xl space-y-4 px-4">

        {cart.map((item) => (

          <motion.div
            key={item._id}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="overflow-hidden rounded-[34px] border border-[#F5DED0] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
          >

            <div className="flex gap-4 p-4">

              {/* IMAGE */}

              <Link
                href={`/products/${item.slug}`}
                className="shrink-0"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-[26px] object-cover"
                />

              </Link>

              {/* CONTENT */}

              <div className="flex min-w-0 flex-1 flex-col">

                {/* TOP */}

                <div className="flex items-start justify-between gap-3">

                  <div className="min-w-0">

                    <h3 className="line-clamp-2 text-[18px] font-black leading-tight text-[#2B170B]">

                      {item.name}

                    </h3>

                    <p className="mt-2 text-sm text-[#8B5E3C]">

                      Premium bakery dessert 🎂

                    </p>

                  </div>

                  {/* DELETE */}

                  <button
                    onClick={() =>
                      removeItem(item._id)
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF1E7] text-[#FF4D4D] transition-all hover:scale-105"
                  >

                    <Trash2 size={17} />

                  </button>

                </div>

                {/* PRICE */}

                <div className="mt-4 flex items-center justify-between gap-3">

                  <div>

                    <p className="text-xs text-[#8B5E3C]">

                      Price

                    </p>

                    <h3 className="mt-1 text-2xl font-black tracking-tight text-[#FF8A3D]">

                      ₹{item.sellingPrice}

                    </h3>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-[#8B5E3C]">

                      Total

                    </p>

                    <h3 className="mt-1 text-xl font-black tracking-tight text-[#2B170B]">

                      ₹
                      {item.qty *
                        item.sellingPrice}

                    </h3>

                  </div>

                </div>

                {/* CONTROLS */}

                <div className="mt-5 flex items-center justify-between gap-3">

                  {/* QTY */}

                  <div className="flex h-11 items-center gap-3 rounded-full bg-[#FF8A3D] px-3 text-white shadow-[0_10px_30px_rgba(255,138,61,0.28)]">

                    {/* MINUS */}

                    <button
                      onClick={() =>
                        decreaseQty(
                          item._id
                        )
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                    >

                      <Minus size={15} />

                    </button>

                    {/* QTY */}

                    <span className="min-w-[20px] text-center text-sm font-black">

                      {item.qty}

                    </span>

                    {/* PLUS */}

                    <button
                      onClick={() =>
                        addToCart(item)
                      }
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20"
                    >

                      <Plus size={15} />

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM BAR */}

      <AnimatePresence>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#F5DED0] bg-white/95 backdrop-blur-2xl"
        >

          <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-4">

            {/* LEFT */}

            <div className="flex-1">

              <p className="text-xs text-[#8B5E3C]">

                Grand Total

              </p>

              <h2 className="mt-1 text-3xl font-black tracking-tight text-[#2B170B]">

                ₹{subtotal}

              </h2>

            </div>

            {/* BUTTON */}

            <Link
              href="/checkout"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-7 text-sm font-black text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
            >

              Continue

              <ArrowRight size={18} />

            </Link>

          </div>

        </motion.div>

      </AnimatePresence>

    </section>

  );

}