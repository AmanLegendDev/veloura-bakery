"use client";

import { useEffect, useState } from "react";

import {
motion,
AnimatePresence
} from "framer-motion";

import { useCartStore } from "@/store/cartStore";

import Link from "next/link";

import ProductCard from "@/components/store/ProductCard";

const productCache = {};

export default function ProductSection({
  categoryId
}) {

  const [products, setProducts] = useState(null);

  const [loading, setLoading] = useState(true);

  const { cart } = useCartStore();


  /*
  =====================================
  SCROLL TO PRODUCT
  =====================================
  */

  useEffect(() => {

    const listener = (e) => {

      const tryScroll = () => {

        const el = document.getElementById(
          `product-${e.detail}`
        );

        if (!el) {

          requestAnimationFrame(
            tryScroll
          );

          return;

        }

        const navbarOffset = 140;

        const top =
          el.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });

      };

      tryScroll();

    };

    window.addEventListener(
      "scrollToProduct",
      listener
    );

    return () =>
      window.removeEventListener(
        "scrollToProduct",
        listener
      );

  }, []);


  /*
  =====================================
  FETCH PRODUCTS
  =====================================
  */

  useEffect(() => {

    const category =
      categoryId || "all";

    let active = true;

    setLoading(true);


    /*
    CACHE
    */

    if (productCache[category]) {

      setProducts(
        productCache[category]
      );

      setLoading(false);

      return;

    }


    fetch(
      `/api/products/list?category=${category}`,
      {
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .then((data) => {

        if (!active) return;

        productCache[category] = data;

        setProducts(data);

        setLoading(false);

      })
      .catch(() => {

        if (!active) return;

        setLoading(false);

      });

    return () => {
      active = false;
    };

  }, [categoryId]);


  /*
  =====================================
  CART
  =====================================
  */

  const totalItems = cart.reduce(
    (a, i) => a + i.qty,
    0
  );

  const totalPrice = cart.reduce(
    (a, i) =>
      a + i.sellingPrice * i.qty,
    0
  );


  /*
  =====================================
  LOADING
  =====================================
  */

  if (loading) {

    return (

      <section className="bg-[#FFF8F2] px-4 py-8">


        <div className="mb-6 flex items-center justify-between">


          <div>

            <div className="h-3 w-28 animate-pulse rounded-full bg-[#FFE7D5]"/>

            <div className="mt-3 h-8 w-48 animate-pulse rounded-full bg-[#F4E1D4]"/>

          </div>


          <div className="h-10 w-24 animate-pulse rounded-full bg-[#FFE7D5]"/>

        </div>


        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

          {[...Array(8)].map((_, i) => (

            <div
              key={i}
              className="overflow-hidden rounded-[30px] border border-[#F7E4D8] bg-white"
            >

              <div className="aspect-[4/4.4] animate-pulse bg-[#F7E9DE]"/>

              <div className="space-y-3 p-4">

                <div className="h-5 animate-pulse rounded-full bg-[#F4E1D4]"/>

                <div className="h-3 w-2/3 animate-pulse rounded-full bg-[#F7E9DE]"/>

                <div className="flex gap-2">

                  <div className="h-6 w-20 animate-pulse rounded-full bg-[#FFF1E7]"/>

                  <div className="h-6 w-16 animate-pulse rounded-full bg-[#FFF1E7]"/>

                </div>

                <div className="mt-4 flex items-center justify-between">

                  <div className="h-6 w-20 animate-pulse rounded-full bg-[#F4E1D4]"/>

                  <div className="h-10 w-20 animate-pulse rounded-full bg-[#FFE1CC]"/>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    );

  }


  /*
  =====================================
  EMPTY STATE
  =====================================
  */

  if (
  !loading &&
  Array.isArray(products) &&
  products.length === 0
) {

    return (

      <section className="px-4 py-20 text-center">


        <div className="mx-auto max-w-md rounded-[34px] border border-[#F7E4D8] bg-white p-8 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">


          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF1E7] text-4xl">

            🎂

          </div>


          <h2 className="mt-6 text-2xl font-black text-[#3D2314]">

            Products Coming Soon

          </h2>


          <p className="mt-3 text-sm leading-relaxed text-[#6B4423]">

            Fresh bakery creations are being prepared for this category ✨

          </p>

        </div>

      </section>

    );

  }


  return (

    <section
      id="products"
      className="relative overflow-hidden bg-[#FFF8F2] px-4 py-7 md:py-10"
    >


      {/* SOFT GLOW */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>


      <div className="relative mx-auto max-w-7xl">


        {/* HEADER */}

        <div className="mb-7 flex items-end justify-between gap-4">


          <div>


            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

              <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

                Fresh Collection

              </p>

            </div>


            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3D2314] md:text-5xl">

              Fresh Cakes & Desserts 🎂

            </h2>


            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#6B4423] md:text-[15px]">

              Explore handcrafted cakes, pastries and desserts baked fresh daily for your celebrations.

            </p>

          </div>


          {/* PRODUCT COUNT */}

          <div className="hidden rounded-full border border-[#F7E4D8] bg-white px-5 py-3 shadow-sm md:flex">

            <p className="text-sm font-semibold text-[#6B4423]">

              {products.length} Products

            </p>

          </div>

        </div>


        {/* GRID */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">


         {products?.map((product) => (

            <motion.div
              key={product._id}
              id={`product-${product._id}`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              <ProductCard
                product={product}
              />

            </motion.div>

          ))}

        </div>

      </div>


      {/* FLOATING CART */}

      <AnimatePresence>

        {totalItems > 0 && (

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
            className="fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-md -translate-x-1/2 items-center justify-between rounded-[24px] bg-[#3D2314] px-5 py-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >


            <div>

              <p className="text-sm font-bold">

                {totalItems} item
                {totalItems > 1 && "s"}

              </p>

              <p className="mt-1 text-xs text-white/70">

                ₹{totalPrice}

              </p>

            </div>


            <Link
              href="/cart"
              className="rounded-full bg-[#FF8A3D] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >

              View Cart →

            </Link>

          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );

}