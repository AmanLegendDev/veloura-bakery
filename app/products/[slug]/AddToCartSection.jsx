"use client";

import { useCartStore } from "@/store/cartStore";

import { motion } from "framer-motion";

import {
Minus,
Plus,
ShoppingBag,
MessageCircleMore
} from "lucide-react";

export default function AddToCartSection({
  product
}) {

  const {
    addToCart,
    decreaseQty,
    cart
  } = useCartStore();

  const item = cart.find(
    (i) => i._id === product._id
  );

  const qty = item ? item.qty : 0;


  /*
  =====================================
  ADD
  =====================================
  */

  const handleAdd = () => {

    const circle =
      document.createElement("div");

    circle.style.position = "fixed";

    circle.style.width = "18px";

    circle.style.height = "18px";

    circle.style.borderRadius = "999px";

    circle.style.background =
      "#FF8A3D";

    circle.style.zIndex = "9999";

    circle.style.left = "50%";

    circle.style.top = "70%";

    circle.style.pointerEvents =
      "none";

    document.body.appendChild(
      circle
    );

    circle.animate(
      [
        {
          transform:
            "translate(0,0) scale(1)",
          opacity: 1,
        },
        {
          transform:
            "translate(140px,-320px) scale(0.2)",
          opacity: 0,
        },
      ],
      {
        duration: 700,
        easing: "ease-in-out",
      }
    );

    setTimeout(() => {
      circle.remove();
    }, 700);

    addToCart(product);

  };


  return (

    <div className="mt-7 rounded-[30px] border border-[#F7E4D8] bg-[#FFF8F2] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">


      {/* TOP */}

      <div className="flex items-start justify-between gap-4">


        <div>

          <h3 className="text-lg font-black text-[#3D2314]">

            Add To Cart

          </h3>

          <p className="mt-1 text-sm text-[#6B4423]">

            Freshly baked & prepared on order ✨

          </p>

        </div>


        <div className="rounded-full bg-[#FFF1E7] px-4 py-2">

          <p className="text-xs font-semibold text-[#FF8A3D]">

            Same Day Delivery

          </p>

        </div>

      </div>


      {/* ACTIONS */}

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">


        {/* QUANTITY */}

        <div className="flex h-14 items-center justify-between rounded-full border border-[#F6DFD0] bg-white px-2 shadow-sm md:w-[170px]">


          <button
            disabled={qty === 0}
            onClick={() =>
              decreaseQty(product._id)
            }
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              qty === 0
                ? "bg-[#F5F5F5] text-gray-300"
                : "bg-[#FFF1E7] text-[#FF8A3D] hover:scale-105"
            }`}
          >

            <Minus size={16}/>

          </button>


          <span className="text-sm font-black text-[#3D2314]">

            {qty}

          </span>


          <motion.button
            whileTap={{
              scale: 0.92,
            }}
            onClick={handleAdd}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8A3D] text-white shadow-lg"
          >

            <Plus size={16}/>

          </motion.button>

        </div>


        {/* BUTTONS */}

        <div className="flex flex-1 gap-3">


          <motion.button
            whileTap={{
              scale: 0.98,
            }}
            onClick={handleAdd}
            className="flex h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-5 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(255,138,61,0.25)] transition-all duration-300 hover:scale-[1.01]"
          >

            <ShoppingBag size={18}/>

            Add To Cart

          </motion.button>


     

        </div>

      </div>

    </div>

  );

}