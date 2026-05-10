"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";




export default function CategorySlider({
  categories = [],
}) {

  if (!categories.length) return null;

  return (

    <section className="relative overflow-hidden bg-white py-8 md:py-10">


      {/* SOFT GLOW */}

      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-7 flex items-end justify-between gap-4"
        >


          <div>

            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

              🍰 Bakery Categories

            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#3D2314] md:text-4xl">

              Sweet Categories

            </h2>

          </div>


          <div className="hidden md:flex rounded-full border border-[#FFE4D0] bg-white px-5 py-3 shadow-sm">

            <p className="text-sm font-medium text-[#8B4513]">

              Freshly Baked Daily

            </p>

          </div>

        </motion.div>


        {/* MOBILE SCROLL + DESKTOP GRID */}

        <div className="scrollbar-hide overflow-x-auto">

          <div className="flex min-w-max gap-4 md:grid md:min-w-0 md:grid-cols-3 lg:grid-cols-6">


            {categories.map((category, index) => (

              <motion.div
                key={category._id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="w-[170px] shrink-0 md:w-auto"
              >


                <Link
                  href={`/category/${category.slug}`}
                  className="group relative block overflow-hidden rounded-[30px] bg-[#fdf6f0] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
                >


                  {/* IMAGE */}

                  <div className="relative aspect-[4/5] overflow-hidden">


                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />


                    {/* CINEMATIC OVERLAY */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>


                    {/* TOP MINI BADGE */}

                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 backdrop-blur-md">

                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#FF8A3D]">

                        Fresh

                      </p>

                    </div>


                    {/* CONTENT */}

                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">


                      <h3 className="text-base font-bold leading-tight drop-shadow-lg md:text-lg">

                        {category.name}

                      </h3>


                      <p className="mt-1 text-xs font-medium text-white/85">

                        {category.productCount || 0} Items

                      </p>

                    </div>

                  </div>


                  {/* HOVER BORDER */}

                  <div className="absolute inset-0 rounded-[30px] border border-transparent transition-all duration-300 group-hover:border-white/30"/>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}