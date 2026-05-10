"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
Sparkles,
Cake,
Clock3,
BadgeCheck,
MessageCircleMore,
ArrowRight
} from "lucide-react";

export default function CustomOrderSection() {

  return (

    <section className="relative overflow-hidden bg-[#FFF8F2] py-10 md:py-14">


      {/* BACKGROUND GLOW */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/10 blur-3xl"/>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFD9BF]/30 blur-3xl"/>


      <div className="relative mx-auto max-w-7xl px-4">


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
          className="overflow-hidden rounded-[38px] bg-gradient-to-br from-[#6B3E26] via-[#5a301a] to-[#3D2314] shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
        >


          <div className="grid items-center gap-10 p-6 md:grid-cols-2 md:p-10 lg:p-14">


            {/* LEFT CONTENT */}

            <div className="relative z-10">


              {/* TOP BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">

                <Sparkles
                  size={14}
                  className="text-[#FFB067]"
                />

                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFD7B8]">

                  Custom Cake Studio

                </p>

              </div>


              {/* TITLE */}

              <h2 className="mt-6 text-4xl font-black leading-[1] tracking-tight text-white md:text-5xl">

                Made Just For Your Celebration 🎂

              </h2>


              {/* TEXT */}

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#F7D9C5] md:text-[15px]">

                From dreamy birthday cakes to elegant wedding creations,
                our bakery crafts personalized cakes designed specially
                for your unforgettable moments.

              </p>


              {/* FEATURES */}

              <div className="mt-7 grid grid-cols-2 gap-3">


                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">

                  <Cake
                    size={16}
                    className="text-[#FFB067]"
                  />

                  <p className="text-xs font-medium text-white">

                    Theme Cakes

                  </p>

                </div>


                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">

                  <Clock3
                    size={16}
                    className="text-[#FFB067]"
                  />

                  <p className="text-xs font-medium text-white">

                    Same Day Prep

                  </p>

                </div>


                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">

                  <BadgeCheck
                    size={16}
                    className="text-[#FFB067]"
                  />

                  <p className="text-xs font-medium text-white">

                    Eggless Available

                  </p>

                </div>


                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">

                  <Sparkles
                    size={16}
                    className="text-[#FFB067]"
                  />

                  <p className="text-xs font-medium text-white">

                    Premium Finish

                  </p>

                </div>

              </div>


              {/* BUTTONS */}

              <div className="mt-8 flex flex-wrap gap-3">


                <Link
                  href="/custom-order"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF8A3D] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(255,138,61,0.30)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f57c2e]"
                >

                  Customize Cake

                  <ArrowRight size={16}/>

                </Link>


                <Link
                  href="https://wa.me/919999999999"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >

                  <MessageCircleMore size={16}/>

                  WhatsApp Order

                </Link>

              </div>


              {/* TRUST */}

              <p className="mt-6 text-xs text-[#EAC5AE]">

                Trusted by cake lovers across Shimla ✨

              </p>

            </div>


            {/* RIGHT IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="relative"
            >


              <div className="relative overflow-hidden rounded-[34px]">


                <div className="relative h-[420px] w-full overflow-hidden rounded-[34px]">


                  <Image
                    src="/custom/custom-cake.jpg"
                    alt="Custom Cake"
                    fill
                    className="object-cover"
                  />


                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"/>


                  {/* FLOATING PRICE */}

                  <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">

                    <p className="text-[10px] font-semibold uppercase tracking-wide text-[#FF8A3D]">

                      Starting From

                    </p>

                    <h3 className="mt-1 text-xl font-black text-[#3D2314]">

                      ₹999

                    </h3>

                  </div>


                  {/* FLOATING LABEL */}

                  <div className="absolute bottom-4 left-4 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">

                    <p className="text-sm font-semibold text-white">

                      Personalized Cakes ✨

                    </p>

                    <p className="mt-1 text-xs text-white/80">

                      Crafted specially for you

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}