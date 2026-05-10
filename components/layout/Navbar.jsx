"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Menu,
  X,
  ShoppingCart,
  ClipboardList,
  Search,
  Gift,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import SearchOverlay from "@/components/store/SearchOverlay";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useCartStore } from "@/store/cartStore";

export default function Navbar() {

  const pathname = usePathname();

  const showSearch =
    pathname === "/" ||
    pathname.startsWith("/category") ||
    pathname.startsWith("/products");

  const [open, setOpen] = useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const cart = useCartStore(
    (state) => state.cart
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  /*
  =======================================
  SCROLL EFFECT
  =======================================
  */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /*
  =======================================
  BODY LOCK
  =======================================
  */

  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };

  }, [open]);

  return (

    <>

      {/* NAVBAR */}

      <nav
        className={`

        fixed top-0 left-0 right-0 z-[100]

        transition-all duration-300

        ${
          scrolled
            ? `
              border-b border-[#F6DFD0]
              bg-[#FFF8F2]/78
              backdrop-blur-2xl
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            `
            : `
              bg-[#FFF8F2]/92
            `
        }

      `}
      >

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex h-[74px] items-center justify-between gap-3">

            {/* LEFT */}

            <div className="flex min-w-0 items-center gap-3">

              <Link
                href="/"
                className="flex min-w-0 items-center gap-3"
              >

                {/* LOGO */}

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[18px] border border-[#F6DFD0] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
                >

                  <Image
                    src="/logo.jpg"
                    width={100}
                    height={100}
                    alt="Veloura Bakery"
                    className="h-full w-full object-contain p-1.5"
                  />

                </motion.div>

                {/* BRAND */}

                <div className="hidden min-w-0 xs:block">

                  <h2 className="truncate text-sm font-black tracking-wide text-[#2B170B]">

                    VELOURA BAKERY

                  </h2>

                  <p className="truncate text-[11px] text-[#8B5E3C]">

                    Freshly Baked Happiness 🎂

                  </p>

                </div>

              </Link>

            </div>

            {/* DESKTOP NAV */}

            <div className="hidden items-center gap-2 lg:flex">

              <Link
                href="/category/all"
                className="flex h-11 items-center gap-2 rounded-2xl px-5 text-sm font-semibold text-[#5B3722] transition-all hover:bg-[#FFF1E7]"
              >

                <ClipboardList size={17} />

                Our Menu

              </Link>

              <Link
                href="/custom-order"
                className="flex h-11 items-center gap-2 rounded-2xl px-5 text-sm font-semibold text-[#5B3722] transition-all hover:bg-[#FFF1E7]"
              >

                <Gift size={17} />

                Custom Cakes

              </Link>

            </div>

            {/* RIGHT */}

            <div className="flex shrink-0 items-center gap-2">

              {/* SEARCH */}

              {showSearch && (

                <motion.button
                  whileTap={{ scale: 0.94 }}
                  onClick={() =>
                    setSearchOpen(true)
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F6DFD0] bg-white text-[#5B3722] shadow-sm transition-all hover:bg-[#FFF1E7]"
                >

                  <Search size={19} />

                </motion.button>

              )}

              {/* CART */}

              <Link
                href="/cart"
                className="relative"
              >

                <motion.div
                  whileTap={{ scale: 0.94 }}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F6DFD0] bg-white text-[#5B3722] shadow-sm transition-all hover:bg-[#FFF1E7]"
                >

                  <ShoppingCart size={19} />

                </motion.div>

                {totalItems > 0 && (

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#FF8A3D] px-1.5 text-[10px] font-bold text-white shadow-lg"
                  >

                    {totalItems}

                  </motion.div>

                )}

              </Link>

              {/* MENU */}

              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() =>
                  setOpen(!open)
                }
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF8A3D] text-white shadow-[0_10px_30px_rgba(255,138,61,0.35)] transition-all hover:scale-[1.02]"
              >

                {open
                  ? <X size={21} />
                  : <Menu size={21} />
                }

              </motion.button>

            </div>

          </div>

        </div>

        {/* THIN GLOW */}

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#FFD6BA] to-transparent" />

      </nav>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <>

            {/* OVERLAY */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[110] bg-black/35 backdrop-blur-sm"
              onClick={() =>
                setOpen(false)
              }
            />

            {/* SIDEBAR */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 260,
              }}
              className="fixed right-0 top-0 z-[120] flex h-screen w-[86%] max-w-sm flex-col overflow-hidden border-l border-[#F6DFD0] bg-[#FFF8F2] shadow-[0_0_50px_rgba(0,0,0,0.12)]"
            >

              {/* TOP */}

              <div className="border-b border-[#F6DFD0] bg-[#FFF8F2] p-5">

                <div className="flex items-start justify-between gap-4">

                  <div className="flex min-w-0 items-center gap-3">

                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-[#F6DFD0] bg-white shadow-sm">

                      <Image
                        src="/logo.jpg"
                        width={100}
                        height={100}
                        alt="Veloura Bakery"
                        className="h-full w-full object-contain p-1.5"
                      />

                    </div>

                    <div className="min-w-0">

                      <h2 className="truncate text-lg font-black text-[#2B170B]">

                        VELOURA BAKERY

                      </h2>

                      <p className="text-xs text-[#8B5E3C]">

                        Premium bakery & cake studio

                      </p>

                    </div>

                  </div>

                  <button
                    onClick={() =>
                      setOpen(false)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#F6DFD0] bg-white text-[#5B3722]"
                  >

                    <X size={20} />

                  </button>

                </div>

              </div>

              {/* LINKS */}

              <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">

                {/* MENU */}

                <Link
                  href="/category/all"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center justify-between rounded-3xl border border-[#F6DFD0] bg-[#FFF1E7] px-4 py-4 transition-all"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F6DFD0] bg-white shadow-sm">

                      <ClipboardList
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="font-semibold text-[#2B170B]">

                        Explore Menu

                      </p>

                      <p className="text-xs text-[#8B5E3C]">

                        Fresh cakes & desserts

                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={18}
                    className="text-[#8B5E3C]"
                  />

                </Link>

                {/* CART */}

                <Link
                  href="/cart"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center justify-between rounded-3xl border border-[#F6DFD0] bg-white px-4 py-4"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F6DFD0] bg-[#FFF1E7]">

                      <ShoppingCart
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="font-semibold text-[#2B170B]">

                        Your Cart

                      </p>

                      <p className="text-xs text-[#8B5E3C]">

                        {totalItems} items added

                      </p>

                    </div>

                  </div>

                  <div className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-[#FF8A3D] px-2 text-xs font-bold text-white">

                    {totalItems}

                  </div>

                </Link>

                {/* CUSTOM */}

                <Link
                  href="/custom-order"
                  onClick={() =>
                    setOpen(false)
                  }
                  className="flex items-center justify-between rounded-3xl border border-[#F6DFD0] bg-white px-4 py-4"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F6DFD0] bg-[#FFF1E7]">

                      <Gift
                        size={20}
                        className="text-[#FF8A3D]"
                      />

                    </div>

                    <div>

                      <p className="font-semibold text-[#2B170B]">

                        Custom Cakes

                      </p>

                      <p className="text-xs text-[#8B5E3C]">

                        Birthday & celebration cakes

                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={18}
                    className="text-[#8B5E3C]"
                  />

                </Link>

              </div>

              {/* BOTTOM */}

              <div className="mt-auto border-t border-[#F6DFD0] bg-[#FFF8F2] p-5">

                <div className="rounded-[30px] bg-[#FF8A3D] p-5 text-white shadow-[0_20px_50px_rgba(255,138,61,0.35)]">

                  <div className="mb-2 flex items-center gap-2">

                    <Sparkles size={18} />

                    <p className="font-semibold">

                      Freshly Baked Daily

                    </p>

                  </div>

                  <p className="text-sm leading-relaxed text-orange-50">

                    Premium cakes, pastries and desserts handcrafted for birthdays and sweet celebrations.

                  </p>

                </div>

              </div>

            </motion.div>

          </>

        )}

      </AnimatePresence>

      {/* SEARCH */}

      <SearchOverlay
        open={searchOpen}
        onClose={() =>
          setSearchOpen(false)
        }
      />

    </>

  );

}