"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";

import { motion } from "framer-motion";

import {
  Sparkles,
  Gift,
  Phone,
  MapPin,
  User,
  NotebookPen,
  MessageCircleMore,
  ArrowRight,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  CakeSlice,
} from "lucide-react";

export default function CustomOrderPage() {

  const [form, setForm] =
    useState({
      name: "",
      phone: "",
      address: "",
      item: "",
      note: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  /*
  ====================================
  MAIN FUNCTION
  ====================================
  */

  const handleSubmit = async (
    type
  ) => {

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.item
    ) {

      alert(
        "Please fill all required fields"
      );

      return;

    }

    setLoading(true);

    const payload = {

      customerName:
        form.name,

      phone:
        form.phone.replace(
          /^0/,
          ""
        ),

      address:
        form.address,

      note: form.note,

      items: [
        {
          title:
            `Custom: ${form.item}`,

          price: 0,

          qty: 1,
        },
      ],

      totalAmount: 0,

      orderType: type,

    };

    await fetch(
      "/api/orders/create",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          payload
        ),
      }
    );

    setLoading(false);

    /*
    WHATSAPP FLOW
    */

    if (
      type ===
      "custom_whatsapp"
    ) {

      const msg =
`Hi, I want a custom bakery order 🎂

Custom Item:
${form.item}

Name:
${form.name}

Phone:
${form.phone}

Address:
${form.address}

Extra Note:
${form.note || "N/A"}
`;

      window.open(
        `https://wa.me/919459365278?text=${encodeURIComponent(
          msg
        )}`,
        "_blank"
      );

    }

    window.location.href =
      "/order-success?type=custom";

  };

  return (

    <section className="min-h-screen bg-[#FFF8F2] pb-32">

      <Navbar />

      {/* HERO */}

      <div className="relative overflow-hidden border-b border-[#F5DED0] bg-white pt-[88px]">

        {/* GLOW */}

        <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#FFD9BF]/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-8">

          {/* BADGE */}

          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <Sparkles
              size={14}
              className="text-[#FF8A3D]"
            />

            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF8A3D]">

              Personalized Orders

            </p>

          </div>

          {/* TITLE */}

          <h1 className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-tight text-[#2B170B] md:text-5xl">

            Create Your Dream
            Cake & Surprise 🎂

          </h1>

          {/* DESC */}

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#8B5E3C] md:text-base">

            Share your custom cake idea, theme, flavour or celebration plan — our bakery team will personally help create something special for you ✨

          </p>

          {/* FEATURES */}

          <div className="mt-6 flex flex-wrap gap-3">

            <div className="rounded-full bg-white px-4 py-2 shadow-sm">

              <p className="text-xs font-bold text-[#2B170B]">

                🎂 Theme Cakes

              </p>

            </div>

            <div className="rounded-full bg-white px-4 py-2 shadow-sm">

              <p className="text-xs font-bold text-[#2B170B]">

                💝 Birthday Surprises

              </p>

            </div>

            <div className="rounded-full bg-white px-4 py-2 shadow-sm">

              <p className="text-xs font-bold text-[#2B170B]">

                ✨ Customized Desserts

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MAIN */}

      <div className="mx-auto mt-7 grid max-w-6xl gap-6 px-4 lg:grid-cols-[1fr_360px]">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="overflow-hidden rounded-[36px] border border-[#F5DED0] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
        >

          {/* HEADER */}

          <div className="border-b border-[#F5DED0] p-6">

            <h2 className="text-2xl font-black text-[#2B170B]">

              Custom Order Form

            </h2>

            <p className="mt-2 text-sm text-[#8B5E3C]">

              Fill all details properly for faster response

            </p>

          </div>

          {/* FORM */}

          <div className="space-y-5 p-6">

            {/* NAME */}

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#2B170B]">

                <User
                  size={16}
                  className="text-[#FF8A3D]"
                />

                Your Name

              </label>

              <input
                name="name"
                placeholder="Enter your full name"
                className="input-style"
                onChange={
                  handleChange
                }
              />

            </div>

            {/* PHONE */}

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#2B170B]">

                <Phone
                  size={16}
                  className="text-[#FF8A3D]"
                />

                Phone Number

              </label>

              <input
                name="phone"
                placeholder="Enter your phone number"
                className="input-style"
                onChange={
                  handleChange
                }
              />

            </div>

            {/* ADDRESS */}

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#2B170B]">

                <MapPin
                  size={16}
                  className="text-[#FF8A3D]"
                />

                Delivery Address

              </label>

              <textarea
                name="address"
                placeholder="Enter full delivery address"
                className="input-style min-h-[100px]"
                onChange={
                  handleChange
                }
              />

            </div>

            {/* ITEM */}

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#2B170B]">

                <CakeSlice
                  size={16}
                  className="text-[#FF8A3D]"
                />

                What Do You Want?

              </label>

              <textarea
                name="item"
                placeholder="Example: 2KG chocolate truffle birthday cake with golden theme & custom name"
                className="input-style min-h-[140px]"
                onChange={
                  handleChange
                }
              />

            </div>

            {/* NOTE */}

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-bold text-[#2B170B]">

                <NotebookPen
                  size={16}
                  className="text-[#FF8A3D]"
                />

                Extra Note

              </label>

              <textarea
                name="note"
                placeholder="Any extra customization, timing or special instructions"
                className="input-style min-h-[100px]"
                onChange={
                  handleChange
                }
              />

            </div>

            {/* NOTICE */}

            <div className="rounded-[26px] border border-[#FFE4D0] bg-[#FFF8F2] p-5">

              <div className="flex gap-3">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                  <Gift
                    size={20}
                    className="text-[#FF8A3D]"
                  />

                </div>

                <div>

                  <h3 className="text-sm font-black text-[#2B170B]">

                    Custom Pricing

                  </h3>

                  <p className="mt-1 text-xs leading-relaxed text-[#8B5E3C]">

                    Since every custom order is unique, our bakery team will confirm pricing & availability personally after reviewing your request.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="space-y-5">

          {/* TRUST */}

          <div className="sticky top-[95px] space-y-5">

            {/* CARD */}

            <div className="overflow-hidden rounded-[36px] border border-[#F5DED0] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

              {/* TOP */}

              <div className="border-b border-[#F5DED0] p-5">

                <h2 className="text-xl font-black text-[#2B170B]">

                  Why Order With Us?

                </h2>

              </div>

              {/* ITEMS */}

              <div className="space-y-4 p-5">

                <div className="flex gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                    <ShieldCheck
                      size={20}
                      className="text-[#FF8A3D]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-black text-[#2B170B]">

                      Premium Quality

                    </h3>

                    <p className="mt-1 text-xs text-[#8B5E3C]">

                      Fresh ingredients & handcrafted bakery products

                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                    <HeartHandshake
                      size={20}
                      className="text-[#FF8A3D]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-black text-[#2B170B]">

                      Personalized Support

                    </h3>

                    <p className="mt-1 text-xs text-[#8B5E3C]">

                      We personally discuss your custom idea

                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                    <Clock3
                      size={20}
                      className="text-[#FF8A3D]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-black text-[#2B170B]">

                      Quick Response

                    </h3>

                    <p className="mt-1 text-xs text-[#8B5E3C]">

                      Fast WhatsApp communication & order confirmation

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* BUTTONS */}

            <div className="overflow-hidden rounded-[36px] border border-[#F5DED0] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">

              <h3 className="text-lg font-black text-[#2B170B]">

                Submit Request

              </h3>

              <p className="mt-2 text-sm text-[#8B5E3C]">

                Choose your preferred ordering method

              </p>

              <div className="mt-5 flex flex-col gap-3">

                {/* COD */}

                <motion.button
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() =>
                    handleSubmit(
                      "custom_cod"
                    )
                  }
                  disabled={loading}
                  className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#F4F4F5] text-sm font-black text-[#2B170B] transition-all hover:bg-[#EBEBEC]"
                >

                  {loading
                    ? "Processing..."
                    : "Custom COD Request"}

                </motion.button>

                {/* WHATSAPP */}

                <motion.button
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() =>
                    handleSubmit(
                      "custom_whatsapp"
                    )
                  }
                  disabled={loading}
                  className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#FF8A3D] text-sm font-black text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
                >

                  <MessageCircleMore
                    size={18}
                  />

                  WhatsApp Request

                  <ArrowRight
                    size={17}
                  />

                </motion.button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}