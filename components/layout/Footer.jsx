import Link from "next/link";
import Image from "next/image";

import {
MapPin,
Phone,
MessageCircleMore,
Cake,
Clock3,
Leaf
} from "lucide-react";

export default function Footer() {

  return (

    <footer className="relative overflow-hidden border-t border-[#F7E3D6] bg-gradient-to-b from-[#fffaf7] to-white">


      {/* BACKGROUND */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FF8A3D]/5 blur-3xl"/>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFD9BF]/20 blur-3xl"/>


      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14">


        {/* TOP */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">


          {/* BRAND */}

          <div>


            <div className="flex items-center gap-4">


              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white bg-white shadow-lg">

                <Image
                  src="/logo.jpg"
                  alt="Veloura Bakery"
                  fill
                  className="object-cover"
                />

              </div>


              <div>

                <h2 className="text-xl font-black tracking-tight text-[#3D2314]">

                  Veloura Bakery

                </h2>

                <p className="mt-1 text-xs font-medium text-[#FF8A3D]">

                  Freshly Baked Happiness 🎂

                </p>

              </div>

            </div>


            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#6B4423]">

              Premium cakes, pastries and handcrafted desserts baked fresh daily for birthdays, celebrations and sweet moments.

            </p>


            {/* SOCIALS */}
{/* SOCIALS */}

<div className="mt-6 flex items-center gap-3">


  <a
    href="https://instagram.com"
    target="_blank"
    className="flex h-11 items-center justify-center rounded-full border border-[#F6DFD0] bg-white px-5 text-sm font-semibold text-[#3D2314] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF8A3D] hover:text-white"
  >

    Instagram

  </a>


  <a
    href="https://facebook.com"
    target="_blank"
    className="flex h-11 items-center justify-center rounded-full border border-[#F6DFD0] bg-white px-5 text-sm font-semibold text-[#3D2314] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:text-white"
  >

    Facebook

  </a>


  <a
    href="https://wa.me/919999999999"
    target="_blank"
    className="flex h-11 items-center justify-center rounded-full border border-[#F6DFD0] bg-white px-5 text-sm font-semibold text-[#3D2314] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366] hover:text-white"
  >

    WhatsApp

  </a>

</div>  

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="text-[15px] font-black text-[#3D2314]">

              Quick Links

            </h3>


            <div className="mt-5 flex flex-col gap-4 text-sm text-[#6B4423]">


              <Link
                href="/"
                className="transition hover:text-[#FF8A3D]"
              >

                Home

              </Link>


              <Link
                href="/category/all"
                className="transition hover:text-[#FF8A3D]"
              >

                Cakes & Desserts

              </Link>


              <Link
                href="/custom-order"
                className="transition hover:text-[#FF8A3D]"
              >

                Custom Cakes

              </Link>


              <Link
                href="/contact"
                className="transition hover:text-[#FF8A3D]"
              >

                Contact Us

              </Link>

            </div>

          </div>


          {/* FEATURES */}

          <div>

            <h3 className="text-[15px] font-black text-[#3D2314]">

              Why Customers Love Us

            </h3>


            <div className="mt-5 flex flex-col gap-4">


              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                  <Cake
                    size={18}
                    className="text-[#FF8A3D]"
                  />

                </div>

                <p className="text-sm text-[#6B4423]">

                  Freshly Baked Daily

                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                  <Clock3
                    size={18}
                    className="text-[#FF8A3D]"
                  />

                </div>

                <p className="text-sm text-[#6B4423]">

                  Same Day Delivery

                </p>

              </div>


              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFF1E7]">

                  <Leaf
                    size={18}
                    className="text-[#22c55e]"
                  />

                </div>

                <p className="text-sm text-[#6B4423]">

                  Eggless Cakes Available

                </p>

              </div>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="text-[15px] font-black text-[#3D2314]">

              Contact

            </h3>


            <div className="mt-5 flex flex-col gap-5">


              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-0.5 text-[#FF8A3D]"
                />

                <p className="text-sm leading-relaxed text-[#6B4423]">

                  Shimla, Himachal Pradesh

                </p>

              </div>


              <a
                href="tel:+919999999999"
                className="flex items-center gap-3 text-sm text-[#6B4423] transition hover:text-[#FF8A3D]"
              >

                <Phone
                  size={18}
                  className="text-[#FF8A3D]"
                />

                +91 99999 99999

              </a>


              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center gap-3 text-sm text-[#6B4423] transition hover:text-[#25D366]"
              >

                <MessageCircleMore
                  size={18}
                  className="text-[#25D366]"
                />

                WhatsApp Support

              </a>

            </div>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#EED8CB] to-transparent"/>


        {/* BOTTOM */}

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">


          <p className="text-xs leading-relaxed text-[#8B6B58]">

            © {new Date().getFullYear()} Veloura Bakery.
            All rights reserved.

          </p>


          <div className="flex flex-wrap items-center justify-center gap-3">


            <div className="rounded-full border border-[#F6DFD0] bg-white px-4 py-2 shadow-sm">

              <p className="text-[11px] font-medium text-[#6B4423]">

                🎂 Freshly Baked

              </p>

            </div>


            <div className="rounded-full border border-[#F6DFD0] bg-white px-4 py-2 shadow-sm">

              <p className="text-[11px] font-medium text-[#6B4423]">

                🚚 Same Day Delivery

              </p>

            </div>

          </div>


          <p className="text-xs leading-relaxed text-[#8B6B58]">

            Crafted with ❤️ by

            <span className="ml-1 font-semibold text-[#FF8A3D]">

              Aman Digital Solution

            </span>

          </p>

        </div>

      </div>

    </footer>

  );

}