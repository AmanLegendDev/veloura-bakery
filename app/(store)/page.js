import Hero from "@/components/store/Hero";
import CategorySlider from "@/components/store/CategorySlider";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FeaturedProducts from "@/components/store/FeaturedProducts";
import CustomOrderSection from "@/components/store/CustomOrderSection";
import TrustSection from "@/components/store/TrustSection";
import FloatingCart from "@/components/store/FloatingCart";
import BakeryShowcase from "@/components/store/BakeryShowcase";

import { getCategories } from "@/actions/categoryActions";
import { connectDB } from "@/lib/db";

import Product from "@/models/Product";

export default async function HomePage() {

  await connectDB();

  const rawCategories =
    await getCategories();

  /*
  ========================================
  REAL PRODUCT COUNTS
  ========================================
  */

  const categoriesData =
    await Promise.all(

      rawCategories.map(
        async (category) => {

          const count =
            await Product.countDocuments({
              category: category._id,
              isVisible: true,
            });

          return {
            _id:
              category._id.toString(),

            name:
              category.name,

            slug:
              category.slug,

            image:
              category.image,

            productCount:
              count,
          };

        }
      )

    );

  const categories =
    JSON.parse(
      JSON.stringify(categoriesData)
    );

  return (

    <div className="min-h-screen overflow-x-hidden bg-[#FFF8F2]">

      {/* NAVBAR */}
      <Navbar />

      {/* 🔥 MAIN CONTENT WRAPPER */}
      <main className="pt-[74px]">

        {/* HERO */}
        <Hero />

        {/* CATEGORIES */}
        <section className="relative z-20 -mt-8 md:-mt-12">

          <div className="max-w-7xl mx-auto px-4">

            <div className="overflow-hidden rounded-[38px] border border-[#FFE4D0] bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">

              <CategorySlider
                categories={categories}
              />

            </div>

          </div>

        </section>

        {/* BAKERY SHOWCASE */}
        <BakeryShowcase />

        {/* FEATURED PRODUCTS */}
        <section className="pt-10 md:pt-14">

          <FeaturedProducts />

        </section>

        {/* CUSTOM CAKE SECTION */}
        <section className="py-10 md:py-14">

          <div className="max-w-7xl mx-auto px-4">

            <div className="overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FF8A3D] via-[#ff944d] to-[#ff7b22] shadow-[0_25px_70px_rgba(255,138,61,0.25)]">

              <CustomOrderSection />

            </div>

          </div>

        </section>

        {/* TRUST SECTION */}
        <section className="pb-14">

          <div className="max-w-7xl mx-auto px-4">

            <TrustSection />

          </div>

        </section>

        {/* FOOTER */}
        <Footer />

      </main>

      {/* FLOATING CART */}
      <FloatingCart />

    </div>

  );

}