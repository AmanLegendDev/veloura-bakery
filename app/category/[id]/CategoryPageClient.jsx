"use client";

import {
useEffect,
useState
} from "react";

import {
useParams,
useSearchParams
} from "next/navigation";

import Navbar from "@/components/layout/Navbar";

import CategoryPills from "@/components/store/CategoryPills";

import ProductSection from "@/components/store/ProductSection";

import Footer from "@/components/layout/Footer";

export default function CategoryPage() {

  const paramsData = useParams();

  const initialCategory =
    paramsData?.id || "all";

  const params = useSearchParams();

  const productId =
    params.get("product");

  const [
    activeCategory,
    setActiveCategory,
  ] = useState(initialCategory);


  /*
  =====================================
  SEARCH SCROLL
  =====================================
  */

  useEffect(() => {

    const searchData =
      sessionStorage.getItem(
        "searchProduct"
      );

    if (!searchData) return;

    const {
      categoryId,
      productId,
    } = JSON.parse(searchData);

    setActiveCategory(
      categoryId
    );

    const timer = setTimeout(() => {

      window.dispatchEvent(
        new CustomEvent(
          "scrollToProduct",
          {
            detail: productId,
          }
        )
      );

      sessionStorage.removeItem(
        "searchProduct"
      );

    }, 350);

    return () =>
      clearTimeout(timer);

  }, []);


  return (

    <section className="min-h-screen overflow-x-hidden bg-[#FFF8F2] pt-[74px]">


      {/* NAVBAR */}

      <Navbar />


      {/* HERO BANNER */}

      <section className="relative overflow-hidden">


        {/* BACKGROUND IMAGE */}

        <div className="absolute inset-0">


          <img
            src="/category/banner.jpg"
            alt="Veloura Bakery"
            className="h-full w-full object-cover"
          />

        </div>


        {/* OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25"/>


        {/* GLOW */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/20 blur-3xl"/>


        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[280px] max-w-7xl items-end px-5 py-10 md:min-h-[340px] md:px-8 md:py-14">


          <div className="max-w-2xl">


            {/* TOP BADGE */}

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">

              <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">

                Premium Bakery Collection

              </p>

            </div>


            {/* TITLE */}

            <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">

              Fresh Cakes & Sweet Delights 🎂

            </h1>


            {/* TEXT */}

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-[15px]">

              Explore handcrafted cakes, pastries, brownies and desserts baked fresh daily for birthdays and celebrations.

            </p>


            {/* SMALL CHIPS */}

            <div className="mt-6 flex flex-wrap gap-3">


              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">

                <p className="text-xs font-medium text-white">

                  🚚 Same Day Delivery

                </p>

              </div>


              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">

                <p className="text-xs font-medium text-white">

                  ✨ Freshly Baked

                </p>

              </div>


              <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md">

                <p className="text-xs font-medium text-white">

                  🌿 Eggless Available

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CATEGORY PILLS */}

      <CategoryPills
        active={activeCategory}
        onChange={setActiveCategory}
      />


      {/* PRODUCTS */}

      <ProductSection
        categoryId={activeCategory}
      />


      {/* FOOTER */}

      <Footer />

    </section>

  );

}