export const runtime = "nodejs";

export const revalidate = 0;

import { connectDB } from "@/lib/db";

import Product from "@/models/Product";

import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

import Image from "next/image";
import ProductGallery from "@/components/store/ProductGallery";

import Link from "next/link";

import AddToCartSection from "./AddToCartSection";

import {
Clock3,
Leaf,
CakeSlice,
Truck
} from "lucide-react";

export async function generateMetadata({
  params
}) {

  await connectDB();

  const slug = String(
    (await params)?.slug || ""
  );

  const product = await Product.findOne({
    slug,
    isVisible: true
  })
    .populate("category")
    .lean();

  if (!product) {

    return {
      title: "Product Not Found",
    };

  }

  return {

    title:
`${product.name} | Veloura Bakery`,

    description:
      product.description ||

      "Premium cakes and desserts freshly baked daily.",

  };

}

export default async function ProductPage({
  params
}) {

  await connectDB();

  const slug = String(
    (await params)?.slug || ""
  );

  const productRaw =
    await Product.findOne({
      slug,
      isVisible: true
    })
      .populate("category")
      .lean();

  if (!productRaw) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-[#FFF8F2]">

        Product not found

      </div>

    );

  }


  /*
  =====================================
  SERIALIZE
  =====================================
  */

  const product = {

    _id:
      productRaw._id.toString(),

    name:
      productRaw.name || "",

    slug:
      productRaw.slug || "",

    description:
      productRaw.description || "",

    sellingPrice:
      productRaw.sellingPrice || 0,

    image:
      productRaw.image ||
      "/placeholder.png",

    gallery:
      productRaw.gallery || [],

    badgeText:
      productRaw.badgeText || "",

    offerText:
      productRaw.offerText || "",

    deliveryInfo:
      productRaw.deliveryInfo || "",

    stockStatus:
      productRaw.stockStatus || "",

    shortHighlights:
      productRaw.shortHighlights || [],

    sizes:
      productRaw.sizes || [],

    weights:
      productRaw.weights || [],

    cakeType:
      productRaw.cakeType || "eggless",

    preparationTime:
      productRaw.preparationTime || "",

    cakeMessage:
      productRaw.cakeMessage || false,

    category: productRaw.category
  ? {
      _id:
        productRaw.category._id?.toString(),

      name:
        productRaw.category.name || "",

      slug:
        productRaw.category.slug || "",
    }
  : null,
  };


  /*
  =====================================
  RELATED
  =====================================
  */

  const relatedRaw =
    await Product.find({

      category:
        productRaw.category,

      _id: {
        $ne: productRaw._id
      },

      isVisible: true

    })
      .limit(4)
      .lean();

  const related =
    relatedRaw.map((item) => ({

      _id:
        item._id.toString(),

      name:
        item.name || "",

      slug:
        item.slug || "",

      image:
        item.image ||
        "/placeholder.png",

      sellingPrice:
        item.sellingPrice || 0,

      badgeText:
        item.badgeText || ""

    }));


  return (

    <section className="min-h-screen overflow-x-hidden bg-[#FFF8F2] pb-16">


      {/* NAVBAR */}

      <Navbar />


      <div className="mx-auto max-w-7xl px-4 py-5 md:py-8">


        {/* BACK */}

        <Link
          href="/category/all"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#6B4423] shadow-sm transition hover:text-[#FF8A3D]"
        >

          ← Back To Menu

        </Link>


        {/* MAIN SECTION */}

<div className="mt-6 grid gap-6 lg:grid-cols-2">


  {/* IMAGE SECTION */}

  <div className="space-y-4">

    <div className="relative overflow-hidden rounded-[38px] border border-[#F6DFD0] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

      {/* BADGES */}

      <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">

        {product.badgeText && (

          <div className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">

            <p className="text-[11px] font-bold uppercase tracking-wide text-[#FF8A3D]">

              {product.badgeText}

            </p>

          </div>

        )}

        {product.offerText && (

          <div className="rounded-full bg-[#FF8A3D] px-4 py-2 shadow-xl">

            <p className="text-[11px] font-bold uppercase tracking-wide text-white">

              {product.offerText}

            </p>

          </div>

        )}

      </div>


      {/* LOGO */}

      <div className="absolute bottom-4 right-4 z-20 overflow-hidden rounded-full border border-white bg-white shadow-xl">

        <Image
          src="/logo.jpg"
          alt="Veloura Bakery"
          width={42}
          height={42}
          className="rounded-full object-cover"
        />

      </div>


      {/* GALLERY */}

      <ProductGallery
        name={product.name}
        images={[
          product.image,
          ...(product.gallery || [])
        ]}
      />

    </div>

  </div>


  {/* DETAILS */}

  <div className="rounded-[38px] border border-[#F6DFD0] bg-white p-5 shadow-[0_15px_50px_rgba(0,0,0,0.05)] md:p-8">


    {/* CATEGORY */}

    <div className="inline-flex rounded-full bg-[#FFF1E7] px-4 py-2">

      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

        {product.category?.name || "Bakery"}

      </p>

    </div>


    {/* TITLE */}

    <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#3D2314] md:text-5xl">

      {product.name}

    </h1>


    {/* PRICE */}

    <div className="mt-5 flex items-end gap-3">

      <p className="text-4xl font-black text-[#FF8A3D]">

        ₹{product.sellingPrice}

      </p>

      {product.offerText && (

        <p className="pb-1 text-lg text-[#A1887F] line-through">

          ₹{product.sellingPrice + 250}

        </p>

      )}

    </div>


    {/* DESCRIPTION */}

    <p className="mt-5 text-sm leading-relaxed text-[#6B4423] md:text-[15px]">

      {product.description}

    </p>


    {/* INFO BOXES */}

    <div className="mt-6 grid grid-cols-2 gap-3">

      <div className="rounded-[24px] border border-[#F6DFD0] bg-[#FFF8F2] p-4">

        <div className="flex items-center gap-2">

          <Truck
            size={18}
            className="text-[#FF8A3D]"
          />

          <p className="text-xs font-bold uppercase tracking-wide text-[#FF8A3D]">

            Delivery

          </p>

        </div>

        <p className="mt-3 text-sm font-semibold text-[#3D2314]">

          {product.deliveryInfo || "2 Hour Delivery"}

        </p>

      </div>


      <div className="rounded-[24px] border border-[#F6DFD0] bg-[#FFF8F2] p-4">

        <div className="flex items-center gap-2">

          <Clock3
            size={18}
            className="text-[#FF8A3D]"
          />

          <p className="text-xs font-bold uppercase tracking-wide text-[#FF8A3D]">

            Preparation

          </p>

        </div>

        <p className="mt-3 text-sm font-semibold text-[#3D2314]">

          {product.preparationTime || "Freshly Prepared"}

        </p>

      </div>

    </div>


    {/* HIGHLIGHTS */}

    {product.shortHighlights?.length > 0 && (

      <div className="mt-7 flex flex-wrap gap-3">

        {product.shortHighlights.map((item, i) => (

          <div
            key={i}
            className="rounded-full border border-[#F6DFD0] bg-white px-4 py-2 shadow-sm"
          >

            <p className="text-xs font-medium text-[#6B4423]">

              ✨ {item}

            </p>

          </div>

        ))}

      </div>

    )}


    {/* OPTIONS */}

    <div className="mt-8 space-y-6">


      {/* CAKE TYPE */}

      <div>

        <p className="mb-3 text-sm font-black text-[#3D2314]">

          Cake Type

        </p>

        <div className="inline-flex items-center gap-2 rounded-full bg-[#EDFDF2] px-5 py-3">

          <Leaf
            size={16}
            className="text-[#22c55e]"
          />

          <p className="text-sm font-semibold text-[#15803d]">

            {product.cakeType === "eggless"
              ? "Eggless Cake"
              : "With Egg"}

          </p>

        </div>

      </div>


      {/* SIZES */}

      {product.sizes?.length > 0 && (

        <div>

          <p className="mb-3 text-sm font-black text-[#3D2314]">

            Cake Sizes

          </p>

          <div className="flex flex-wrap gap-3">

            {product.sizes.map((size, i) => (

              <div
                key={i}
                className="rounded-full border border-[#F6DFD0] bg-[#FFF8F2] px-5 py-3"
              >

                <p className="text-sm font-medium text-[#6B4423]">

                  {size}

                </p>

              </div>

            ))}

          </div>

        </div>

      )}


      {/* WEIGHTS */}

      {product.weights?.length > 0 && (

        <div>

          <p className="mb-3 text-sm font-black text-[#3D2314]">

            Available Weights

          </p>

          <div className="flex flex-wrap gap-3">

            {product.weights.map((weight, i) => (

              <div
                key={i}
                className="rounded-full border border-[#F6DFD0] bg-[#FFF8F2] px-5 py-3"
              >

                <p className="text-sm font-medium text-[#6B4423]">

                  {weight}

                </p>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>


    {/* CAKE MESSAGE */}

    {product.cakeMessage && (

      <div className="mt-7 rounded-[24px] border border-[#F6DFD0] bg-[#FFF8F2] p-5">

        <div className="flex items-center gap-3">

          <CakeSlice
            size={22}
            className="text-[#FF8A3D]"
          />

          <div>

            <p className="text-sm font-black text-[#3D2314]">

              Custom Cake Message

            </p>

            <p className="mt-1 text-xs text-[#6B4423]">

              Add your personalized text on the cake 🎂

            </p>

          </div>

        </div>

      </div>

    )}


    {/* ADD TO CART */}

    <AddToCartSection
      product={product}
    />

  </div>

</div>


        {/* RELATED */}

        {related.length > 0 && (

          <section className="mt-14">


            <div className="mb-7 flex items-end justify-between">


              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

                  <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

                    You May Also Like

                  </p>

                </div>


                <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3D2314]">

                  Related Cakes 🎂

                </h2>

              </div>


              <Link
                href="/category/all"
                className="hidden rounded-full border border-[#F6DFD0] bg-white px-5 py-3 text-sm font-semibold text-[#6B4423] shadow-sm transition hover:text-[#FF8A3D] md:flex"
              >

                Explore More

              </Link>

            </div>


            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">


              {related.map((item) => (

                <Link
                  key={item._id}
                  href={`/products/${item.slug}`}
                  className="group overflow-hidden rounded-[30px] border border-[#F6DFD0] bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                >


                  {/* IMAGE */}

                  <div className="relative aspect-[4/4.3] overflow-hidden">


                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />


                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"/>


                    {item.badgeText && (

                      <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 shadow-lg">

                        <p className="text-[10px] font-bold uppercase tracking-wide text-[#FF8A3D]">

                          {item.badgeText}

                        </p>

                      </div>

                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="p-4">


                    <h3 className="line-clamp-2 text-sm font-black leading-snug text-[#3D2314] md:text-[15px]">

                      {item.name}

                    </h3>


                    <div className="mt-4 flex items-center justify-between">


                      <p className="text-lg font-black text-[#FF8A3D]">

                        ₹{item.sellingPrice}

                      </p>


                      <div className="rounded-full bg-[#FFF1E7] px-3 py-1.5">

                        <p className="text-[10px] font-bold uppercase tracking-wide text-[#FF8A3D]">

                          Fresh

                        </p>

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </section>

        )}

      </div>


      {/* FOOTER */}

      <Footer />

    </section>

  );

}