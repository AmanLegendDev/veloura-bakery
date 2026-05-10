"use client";

import { motion } from "framer-motion";

import {
Cake,
Clock3,
Leaf,
Sparkles
} from "lucide-react";

export default function TrustSection() {

  const data = [

    {
      icon: Cake,
      title: "Freshly Baked Daily",
      desc: "Prepared every morning with premium ingredients and handcrafted perfection.",
      glow: "from-[#FFEDD9] to-[#FFF7F1]",
    },

    {
      icon: Clock3,
      title: "Same Day Delivery",
      desc: "Fast and reliable cake delivery across Shimla for every celebration.",
      glow: "from-[#FFF0E4] to-[#FFF8F3]",
    },

    {
      icon: Leaf,
      title: "Eggless Available",
      desc: "Custom eggless cake options made fresh for birthdays and special moments.",
      glow: "from-[#EDFDF2] to-[#F7FFF9]",
    },

    {
      icon: Sparkles,
      title: "Custom Cake Studio",
      desc: "Theme cakes and personalized creations crafted specially for your events.",
      glow: "from-[#FFF1E7] to-[#FFF9F5]",
    },

  ];

  return (

    <section className="relative overflow-hidden py-10 md:py-14">


      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fffaf7] to-transparent"/>

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>


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
          className="mb-10 text-center"
        >


          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <div className="h-2 w-2 rounded-full bg-[#FF8A3D]"/>

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FF8A3D]">

              Why Veloura Bakery

            </p>

          </div>


          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#3D2314] md:text-5xl">

            Fresh Ingredients & Premium Quality ✨

          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#6B4423] md:text-[15px]">

            Fresh cream cakes, handcrafted pastries and delicious desserts baked daily for your sweetest celebrations.

          </p>

        </motion.div>


        {/* GRID */}

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">


          {data.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-[#F7E2D6] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-6"
              >


                {/* GLOW */}

                <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} opacity-70`}/>


                {/* CONTENT */}

                <div className="relative z-10">


                  {/* ICON */}

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">

                    <Icon
                      size={26}
                      className="text-[#FF8A3D]"
                    />

                  </div>


                  {/* TITLE */}

                  <h3 className="mt-5 text-[15px] font-black leading-snug text-[#3D2314] md:text-[17px]">

                    {item.title}

                  </h3>


                  {/* TEXT */}

                  <p className="mt-3 text-[12px] leading-relaxed text-[#6B4423] md:text-[13px]">

                    {item.desc}

                  </p>


                  {/* MINI LINE */}

                  <div className="mt-5 h-[3px] w-12 rounded-full bg-[#FF8A3D]"/>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );

}