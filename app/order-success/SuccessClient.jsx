"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
  Gift,
  HeartHandshake,
} from "lucide-react";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {

  const [order, setOrder] =
    useState(null);

  const params =
    useSearchParams();

  const type =
    params.get("type");

  /*
  ====================================
  LOAD ORDER
  ====================================
  */

  useEffect(() => {

    if (type === "custom")
      return;

    const stored =
      localStorage.getItem(
        "lastOrder"
      );

    if (stored) {

      setOrder(
        JSON.parse(stored)
      );

    }

  }, [type]);

  /*
  ====================================
  CUSTOM ORDER SUCCESS
  ====================================
  */

  if (type === "custom") {

    return (

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF8F2] px-5 py-12">

        {/* GLOW */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFD9BF]/40 blur-3xl" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative w-full max-w-lg overflow-hidden rounded-[40px] border border-[#F5DED0] bg-white p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
        >

          {/* ICON */}

          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100"
          >

            <CheckCircle2
              size={50}
              className="text-green-600"
            />

          </motion.div>

          {/* BADGE */}

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <Sparkles
              size={14}
              className="text-[#FF8A3D]"
            />

            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF8A3D]">

              Request Submitted

            </p>

          </div>

          {/* TITLE */}

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#2B170B]">

            Custom Order
            Received 🎂

          </h1>

          {/* DESC */}

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#8B5E3C]">

            Your custom bakery request has been submitted successfully. Our team will personally contact you shortly for confirmation, pricing & availability ✨

          </p>

          {/* RESPONSE */}

          <div className="mt-6 rounded-[28px] border border-[#FFE4D0] bg-[#FFF8F2] p-5">

            <div className="flex items-center gap-3 text-left">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                <Clock3
                  size={22}
                  className="text-[#FF8A3D]"
                />

              </div>

              <div>

                <h3 className="text-sm font-black text-[#2B170B]">

                  Expected Response Time

                </h3>

                <p className="mt-1 text-xs text-[#8B5E3C]">

                  Usually within 5–15 minutes ⚡

                </p>

              </div>

            </div>

          </div>

          {/* TRUST */}

          <div className="mt-5 flex flex-wrap justify-center gap-3">

            <div className="rounded-full bg-[#FFF1E7] px-4 py-2">

              <p className="text-xs font-bold text-[#FF8A3D]">

                🎂 Personalized Cakes

              </p>

            </div>

            <div className="rounded-full bg-[#FFF1E7] px-4 py-2">

              <p className="text-xs font-bold text-[#FF8A3D]">

                ✨ Theme Orders

              </p>

            </div>

          </div>

          {/* BUTTON */}

          <Link
            href="/"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-8 text-sm font-black text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
          >

            Continue Shopping

            <ArrowRight
              size={18}
            />

          </Link>

        </motion.div>

      </section>

    );

  }

  /*
  ====================================
  LOADING
  ====================================
  */

  if (!order) {

    return (

      <section className="flex min-h-screen items-center justify-center bg-[#FFF8F2]">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#FFE4D0] border-t-[#FF8A3D]" />

          <p className="mt-4 text-sm font-medium text-[#8B5E3C]">

            Loading your order...

          </p>

        </div>

      </section>

    );

  }

  /*
  ====================================
  NORMAL ORDER SUCCESS
  ====================================
  */

  return (

    <section className="relative overflow-hidden bg-[#FFF8F2] px-5 py-12">

      {/* GLOW */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFD9BF]/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="overflow-hidden rounded-[40px] border border-[#F5DED0] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
        >

          {/* TOP */}

          <div className="relative overflow-hidden border-b border-[#F5DED0] bg-gradient-to-br from-[#FFF8F2] to-white px-6 py-10 text-center">

            {/* ICON */}

            <motion.div
              initial={{
                scale: 0.6,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100"
            >

              <CheckCircle2
                size={54}
                className="text-green-600"
              />

            </motion.div>

            {/* BADGE */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

              <Sparkles
                size={14}
                className="text-[#FF8A3D]"
              />

              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FF8A3D]">

                Order Confirmed

              </p>

            </div>

            {/* TITLE */}

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#2B170B]">

              Order Placed
              Successfully 🎉

            </h1>

            {/* DESC */}

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#8B5E3C]">

              Your sweet order has been received successfully. Our bakery team will contact you shortly for confirmation & delivery updates ✨

            </p>

            {/* PAYMENT */}

            <div className="mx-auto mt-6 max-w-md rounded-[28px] border border-green-200 bg-green-50 p-4">

              <div className="flex items-center gap-3 text-left">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">

                  <Gift
                    size={22}
                    className="text-green-600"
                  />

                </div>

                <div>

                  <h3 className="text-sm font-black text-green-700">

                    Cash On Delivery

                  </h3>

                  <p className="mt-1 text-xs text-green-600">

                    Pay when your order arrives 💵

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div className="grid gap-6 p-6 lg:grid-cols-[1fr_380px]">

            {/* LEFT */}

            <div className="space-y-5">

              {/* CUSTOMER */}

              <div className="rounded-[30px] border border-[#F5DED0] bg-[#FFF8F2] p-5">

                <h2 className="text-lg font-black text-[#2B170B]">

                  Customer Details

                </h2>

                <div className="mt-5 space-y-4">

                  <div className="flex items-start gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">

                      <HeartHandshake
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="text-xs text-[#8B5E3C]">

                        Customer Name

                      </p>

                      <h3 className="mt-1 text-sm font-black text-[#2B170B]">

                        {order.customerName}

                      </h3>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">

                      <Phone
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="text-xs text-[#8B5E3C]">

                        Phone Number

                      </p>

                      <h3 className="mt-1 text-sm font-black text-[#2B170B]">

                        {order.phone}

                      </h3>

                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">

                      <MapPin
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="text-xs text-[#8B5E3C]">

                        Delivery Address

                      </p>

                      <h3 className="mt-1 text-sm leading-relaxed text-[#2B170B]">

                        {order.address}

                      </h3>

                    </div>

                  </div>

                </div>

              </div>

              {/* ORDER ITEMS */}

              <div className="rounded-[30px] border border-[#F5DED0] bg-white p-5">

                <h2 className="text-lg font-black text-[#2B170B]">

                  Ordered Items

                </h2>

                <div className="mt-5 space-y-3">

                  {order.items?.map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={index}
                        className="flex items-center justify-between rounded-[24px] border border-[#F5DED0] bg-[#FFF8F2] px-4 py-4"
                      >

                        <div className="min-w-0">

                          <h3 className="line-clamp-1 text-sm font-black text-[#2B170B]">

                            {item.title}

                          </h3>

                          <p className="mt-1 text-xs text-[#8B5E3C]">

                            Qty: {item.qty}

                          </p>

                        </div>

                        <p className="text-sm font-black text-[#FF8A3D]">

                          ₹
                          {item.price *
                            item.qty}

                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-5">

              {/* SUMMARY */}

              <div className="rounded-[30px] border border-[#F5DED0] bg-[#FFF8F2] p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">

                    <ShoppingBag
                      size={26}
                      className="text-[#FF8A3D]"
                    />

                  </div>

                  <div>

                    <p className="text-xs text-[#8B5E3C]">

                      Total Amount

                    </p>

                    <h2 className="mt-1 text-4xl font-black tracking-tight text-[#2B170B]">

                      ₹
                      {order.totalAmount}

                    </h2>

                  </div>

                </div>

              </div>

              {/* NOTE */}

              <div className="rounded-[30px] border border-[#FFE4D0] bg-[#FFF8F2] p-5">

                <div className="flex gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">

                    <Clock3
                      size={22}
                      className="text-[#FF8A3D]"
                    />

                  </div>

                  <div>

                    <h3 className="text-sm font-black text-[#2B170B]">

                      Delivery Confirmation

                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-[#8B5E3C]">

                      Our bakery team will contact you shortly regarding delivery timing & order confirmation.

                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <Link
                href="/"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#FF8A3D] text-sm font-black text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
              >

                Continue Shopping

                <ArrowRight
                  size={18}
                />

              </Link>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}