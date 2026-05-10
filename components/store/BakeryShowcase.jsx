"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export default function BakeryShowcase() {

  return (

    <section className="relative overflow-hidden py-10 md:py-14">


      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fffaf6] to-transparent"/>

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>


      <div className="relative mx-auto max-w-7xl px-4">


        {/* HEADER */}

        <motion.div
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
          className="mb-8 text-center"
        >


          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

              Freshly Crafted Daily

            </p>

          </div>


          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#3D2314] md:text-5xl">

            Sweet Moments Made Beautiful ✨

          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B4423] md:text-[15px]">

            Handcrafted cakes, dreamy desserts and premium bakery creations made fresh daily for birthdays and celebrations.

          </p>

        </motion.div>


        {/* GRID */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">


          {/* BIG IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[34px] md:col-span-2"
          >


            <div className="relative h-[320px] md:h-full min-h-[420px] overflow-hidden">


              <Image
                src="/showcase/showcase-1.jpg"
                alt="Premium Cakes"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />


              {/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5"/>

              {/* CONTENT */}

              <div className="absolute bottom-0 left-0 p-6 md:p-8">


                <div className="inline-flex rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">

                    Signature Collection

                  </p>

                </div>


                <h3 className="mt-4 max-w-md text-3xl font-black leading-tight text-white md:text-5xl">

                  Cakes Crafted For Every Celebration 🎂

                </h3>


                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">

                  Premium bakery creations designed with fresh ingredients, handcrafted perfection and unforgettable taste.

                </p>

              </div>

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <div className="grid gap-4">


            {/* CARD 1 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-[30px]"
            >

              <div className="relative h-[210px] overflow-hidden">


                <Image
                  src="/showcase/showcase-2.jpg"
                  alt="Fresh Pastries"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"/>


                <div className="absolute bottom-0 left-0 p-5">

                  <h3 className="text-2xl font-black text-white">

                    Fresh Pastries

                  </h3>

                  <p className="mt-2 text-sm text-white/85">

                    Baked fresh every morning

                  </p>

                </div>

              </div>

            </motion.div>


            {/* CARD 2 */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="relative overflow-hidden rounded-[30px]"
            >

              <div className="relative h-[210px] overflow-hidden">


                <Image
                  src="/showcase/showcase-3.jpg"
                  alt="Custom Cakes"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />


                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5"/>


                <div className="absolute bottom-0 left-0 p-5">

                  <h3 className="text-2xl font-black text-white">

                    Custom Cakes

                  </h3>

                  <p className="mt-2 text-sm text-white/85">

                    Designed for special moments

                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>


        {/* CHIPS */}

        <div className="mt-6 flex flex-wrap justify-center gap-3">


          <div className="rounded-full border border-[#FFE4D0] bg-white px-5 py-3 shadow-sm">

            <p className="text-sm font-medium text-[#6B4423]">

              🎂 1000+ Happy Orders

            </p>

          </div>


          <div className="rounded-full border border-[#FFE4D0] bg-white px-5 py-3 shadow-sm">

            <p className="text-sm font-medium text-[#6B4423]">

              🚚 Same Day Delivery

            </p>

          </div>


          <div className="rounded-full border border-[#FFE4D0] bg-white px-5 py-3 shadow-sm">

            <p className="text-sm font-medium text-[#6B4423]">

              ✨ Fresh Cream Cakes

            </p>

          </div>

        </div>

      </div>

    </section>

  );

}