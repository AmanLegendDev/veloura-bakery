export const dynamic = "force-dynamic";

import Link from "next/link";

import ProductCard from "./ProductCard";

import { getFeaturedProducts } from "@/actions/productActions";

export default async function FeaturedProducts() {

  const products = await getFeaturedProducts();

  if (!products.length) return null;

  return (

    <section className="relative overflow-hidden py-10 md:py-14">


      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fffaf6] to-transparent"/>

      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#FFD9BF]/40 blur-3xl"/>


      <div className="relative mx-auto max-w-7xl px-4">


        {/* HEADER */}

        <div className="mb-8 flex items-end justify-between gap-4">


          <div className="max-w-2xl">


            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

              <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

                Best Seller Collection

              </p>

            </div>


            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#3D2314] md:text-5xl">

              Fresh Cakes & Desserts 🎂

            </h2>


            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B4423] md:text-[15px]">

              Handcrafted cakes, brownies, pastries and desserts baked fresh daily for birthdays and celebrations.

            </p>

          </div>


          {/* DESKTOP BADGE */}

          <div className="hidden md:flex items-center gap-3 rounded-full border border-[#FFE4D0] bg-white px-5 py-3 shadow-sm">

            <div className="h-2 w-2 rounded-full bg-[#22c55e]"/>

            <p className="text-sm font-medium text-[#6B4423]">

              Freshly Baked Daily

            </p>

          </div>

        </div>


        {/* PRODUCTS GRID */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">

          {products.map((product) => (

            <ProductCard
              key={product._id}
              product={product}
            />

          ))}

        </div>


        {/* CTA */}

        <div className="mt-12 flex justify-center">

          <Link
            href="/category/all"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(255,138,61,0.30)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f57c2e]"
          >

            Explore Full Menu ✨

          </Link>

        </div>

      </div>

    </section>

  );

}