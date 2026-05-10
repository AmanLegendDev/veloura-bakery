"use client";

import { useCartStore } from "@/store/cartStore";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ShoppingBag,
  MapPin,
  Phone,
  User,
  NotebookPen,
  ShieldCheck,
  Clock3,
  ArrowRight,
  MessageCircleMore,
  Wallet,
} from "lucide-react";

const DELIVERY_FEE = 30;

export default function CheckoutPage() {

  const cart = useCartStore(
    (state) => state.cart
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      item.sellingPrice * item.qty,
    0
  );

  const totalAmount =
    subtotal + DELIVERY_FEE;

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState({
      customerName: "",
      phone: "",
      address: "",
      note: "",
    });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  /*
  ====================================
  PLACE ORDER
  ====================================
  */

  const placeOrder = async (
    type
  ) => {

    if (
      !form.customerName ||
      !form.phone ||
      !form.address
    ) {

      alert(
        "Please fill all required fields"
      );

      return;

    }

    setLoading(true);

    const orderPayload = {

      customerName:
        form.customerName,

      phone:
        form.phone.replace(
          /^0/,
          ""
        ),

      address: form.address,

      note: form.note,

      items: cart.map((item) => ({
        title: item.name,
        price:
          item.sellingPrice,
        qty: item.qty,
      })),

      totalAmount,

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
          orderPayload
        ),
      }
    );

    /*
    SUCCESS STORAGE
    */

    localStorage.setItem(
      "lastOrder",

      JSON.stringify({
        ...orderPayload,

        paymentMethod:
          type.includes(
            "whatsapp"
          )
            ? "WhatsApp Order"
            : "Cash on Delivery",
      })
    );

    clearCart();

    /*
    WHATSAPP FLOW
    */

    if (type === "whatsapp") {

      let msg =
        `Hi, I want to order:\n\n`;

      cart.forEach((i) => {

        msg +=
          `- ${i.name} x${i.qty}\n`;

      });

      msg +=
        `\nTotal: ₹${totalAmount}`;

      msg +=
        `\nName: ${form.customerName}`;

      msg +=
        `\nAddress: ${form.address}`;

      const url =
        `https://wa.me/919459365278?text=${encodeURIComponent(
          msg
        )}`;

      window.open(
        url,
        "_blank"
      );

    }

    window.location.href =
      `/order-success?type=${type}`;

  };

  return (

    <section className="min-h-screen bg-[#FFF8F2] pb-32">

      <Navbar />

      {/* HEADER */}

      <div className="relative overflow-hidden border-b border-[#F6DFD0] bg-white pt-[88px]">

        {/* GLOW */}

        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#FF8A3D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-7">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <ShoppingBag
              size={14}
              className="text-[#FF8A3D]"
            />

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF8A3D]">

              Secure Checkout

            </p>

          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#2B170B]">

            Complete Your Order 🎂

          </h1>

          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#8B5E3C]">

            Fresh cakes & desserts prepared with love and delivered quickly to your doorstep.

          </p>

        </div>

      </div>

      {/* MAIN */}

      <div className="mx-auto mt-6 grid max-w-6xl gap-6 px-4 lg:grid-cols-[1fr_380px]">

        {/* LEFT */}

        <div className="space-y-5">

          {/* FORM CARD */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="overflow-hidden rounded-[34px] border border-[#F6DFD0] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
          >

            {/* TOP */}

            <div className="border-b border-[#F6DFD0] p-5">

              <h2 className="text-xl font-black text-[#2B170B]">

                Delivery Details

              </h2>

              <p className="mt-1 text-sm text-[#8B5E3C]">

                Fill your information carefully

              </p>

            </div>

            {/* FORM */}

            <div className="space-y-4 p-5">

              {/* NAME */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#2B170B]">

                  <User
                    size={16}
                    className="text-[#FF8A3D]"
                  />

                  Full Name

                </label>

                <input
                  name="customerName"
                  placeholder="Enter your full name"
                  className="input-style"
                  onChange={
                    handleChange
                  }
                />

              </div>

              {/* PHONE */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#2B170B]">

                  <Phone
                    size={16}
                    className="text-[#FF8A3D]"
                  />

                  Phone Number

                </label>

                <input
                  name="phone"
                  placeholder="Enter phone number"
                  className="input-style"
                  onChange={
                    handleChange
                  }
                />

              </div>

              {/* ADDRESS */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#2B170B]">

                  <MapPin
                    size={16}
                    className="text-[#FF8A3D]"
                  />

                  Delivery Address

                </label>

                <textarea
                  name="address"
                  placeholder="Enter complete delivery address"
                  className="input-style min-h-[110px]"
                  onChange={
                    handleChange
                  }
                />

              </div>

              {/* NOTE */}

              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#2B170B]">

                  <NotebookPen
                    size={16}
                    className="text-[#FF8A3D]"
                  />

                  Extra Note

                </label>

                <textarea
                  name="note"
                  placeholder="Message on cake, delivery note, landmark etc."
                  className="input-style min-h-[90px]"
                  onChange={
                    handleChange
                  }
                />

              </div>

            </div>

          </motion.div>

          {/* TRUST */}

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-[28px] border border-[#F6DFD0] bg-white p-4 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                <ShieldCheck
                  size={20}
                  className="text-[#FF8A3D]"
                />

              </div>

              <h3 className="mt-3 text-sm font-black text-[#2B170B]">

                Safe Ordering

              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#8B5E3C]">

                Fresh bakery products handled carefully

              </p>

            </div>

            <div className="rounded-[28px] border border-[#F6DFD0] bg-white p-4 shadow-sm">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                <Clock3
                  size={20}
                  className="text-[#FF8A3D]"
                />

              </div>

              <h3 className="mt-3 text-sm font-black text-[#2B170B]">

                Fast Delivery

              </h3>

              <p className="mt-1 text-xs leading-relaxed text-[#8B5E3C]">

                Quick preparation & timely delivery

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-5">

          {/* ORDER SUMMARY */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="sticky top-[90px] overflow-hidden rounded-[34px] border border-[#F6DFD0] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
          >

            {/* TOP */}

            <div className="border-b border-[#F6DFD0] p-5">

              <h2 className="text-xl font-black text-[#2B170B]">

                Order Summary

              </h2>

              <p className="mt-1 text-sm text-[#8B5E3C]">

                {cart.length} products added

              </p>

            </div>

            {/* ITEMS */}

            <div className="max-h-[320px] space-y-4 overflow-y-auto p-5">

              {cart.map((item) => (

                <div
                  key={item._id}
                  className="flex items-center gap-3"
                >

                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-2xl object-cover"
                  />

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <h3 className="line-clamp-1 text-sm font-black text-[#2B170B]">

                      {item.name}

                    </h3>

                    <p className="mt-1 text-xs text-[#8B5E3C]">

                      Qty: {item.qty}

                    </p>

                  </div>

                  {/* PRICE */}

                  <p className="text-sm font-black text-[#FF8A3D]">

                    ₹
                    {item.qty *
                      item.sellingPrice}

                  </p>

                </div>

              ))}

            </div>

            {/* TOTAL */}

            <div className="border-t border-[#F6DFD0] bg-[#FFF8F2] p-5">

              <div className="space-y-3">

                <div className="flex items-center justify-between text-sm text-[#8B5E3C]">

                  <span>
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal}
                  </span>

                </div>

                <div className="flex items-center justify-between text-sm text-[#8B5E3C]">

                  <span>
                    Delivery Fee
                  </span>

                  <span>
                    ₹{DELIVERY_FEE}
                  </span>

                </div>

                <div className="h-px bg-[#F6DFD0]" />

                <div className="flex items-center justify-between">

                  <span className="text-base font-black text-[#2B170B]">

                    Total

                  </span>

                  <span className="text-2xl font-black tracking-tight text-[#FF8A3D]">

                    ₹{totalAmount}

                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* FIXED BOTTOM BAR */}

      <AnimatePresence>

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#F6DFD0] bg-white/95 backdrop-blur-2xl"
        >

          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row">

            {/* TOTAL */}

            <div className="flex flex-1 items-center justify-between rounded-2xl bg-[#FFF8F2] px-5 py-4">

              <div>

                <p className="text-xs text-[#8B5E3C]">

                  Total Payable

                </p>

                <h2 className="mt-1 text-3xl font-black tracking-tight text-[#2B170B]">

                  ₹{totalAmount}

                </h2>

              </div>

              <Wallet
                size={28}
                className="text-[#FF8A3D]"
              />

            </div>

            {/* BUTTONS */}

            <div className="flex gap-3">

              {/* COD */}

              <motion.button
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  placeOrder("cod")
                }
                disabled={loading}
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#F4F4F5] px-5 text-sm font-black text-[#2B170B] transition-all hover:bg-[#EAEAEA]"
              >

                <Wallet size={17} />

                {loading
                  ? "Processing..."
                  : "Cash On Delivery"}

              </motion.button>

              {/* WHATSAPP */}

              <motion.button
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() =>
                  placeOrder(
                    "whatsapp"
                  )
                }
                disabled={loading}
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-7 text-sm font-black text-white shadow-[0_15px_35px_rgba(255,138,61,0.30)] transition-all hover:scale-[1.02]"
              >

                <MessageCircleMore
                  size={18}
                />

                WhatsApp Order

                <ArrowRight
                  size={17}
                />

              </motion.button>

            </div>

          </div>

        </motion.div>

      </AnimatePresence>

    </section>

  );

}