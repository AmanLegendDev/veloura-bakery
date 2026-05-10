"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
Star,
ArrowRight,
Sparkles
} from "lucide-react";

export default function Hero() {

return(

<section className="relative min-h-[72vh] lg:min-h-[82vh] overflow-hidden bg-[#FDF6F0]">


{/* BACKGROUND PATTERN */}

<div className="absolute inset-0 opacity-[0.03]">

<div
className="absolute inset-0"
style={{
backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}}
/>

</div>


{/* BLOBS */}

<div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[#FF8A3D]/10 blur-3xl"/>

<div className="absolute bottom-[-120px] left-[-120px] w-[380px] h-[380px] rounded-full bg-[#8B4513]/10 blur-3xl"/>


<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


{/* HERO CONTENT */}

<div className="grid items-center gap-10 pt-8 pb-14 lg:grid-cols-2 lg:gap-14 lg:pt-12">


{/* LEFT SIDE */}

<motion.div
initial={{opacity:0,x:-30}}
animate={{opacity:1,x:0}}
transition={{duration:0.6}}
className="order-2 lg:order-1"
>


{/* TOP BADGE */}

<div className="inline-flex items-center gap-2 rounded-full border border-[#FFE4D0] bg-white px-4 py-2 shadow-sm">

<Sparkles
size={14}
className="text-[#FF8A3D]"
/>

<p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B4513]">

Shimla’s Finest Bakery

</p>

</div>


{/* HEADING */}

<h1 className="mt-6 text-[38px] sm:text-[56px] lg:text-[82px] leading-[0.95] font-black tracking-[-0.05em] text-[#3D2314] sm:text-[62px] lg:text-[82px]">

Freshly Baked

<span className="block bg-gradient-to-r from-[#FF8A3D] via-[#E67329] to-[#8B4513] bg-clip-text text-transparent">

With Love ❤️

</span>

</h1>


{/* DESCRIPTION */}

<p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-[#6B4423] md:text-[17px]">

Fresh cream cakes, brownies & handcrafted desserts baked daily for birthdays, celebrations and sweet memories.

</p>


{/* CTA */}

<div className="mt-7">

<Link
href="/category/all"
className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(255,138,61,0.35)] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f57c2e]"
>

Explore Menu

<ArrowRight size={17}/>

</Link>

</div>

</motion.div>


{/* RIGHT SIDE */}

<motion.div
initial={{opacity:0,x:30}}
animate={{opacity:1,x:0}}
transition={{duration:0.6,delay:0.2}}
className="order-1 lg:order-2 relative"
>


{/* MAIN IMAGE */}

<div className="relative">


{/* SOFT BACKGROUND */}

<div className="absolute inset-0 scale-[0.88] rounded-full bg-gradient-to-br from-[#FFE4D0] to-[#FFF0E6] blur-md"/>


<div className="relative aspect-[4/4.6] overflow-hidden rounded-[46px] border-4 border-white shadow-[0_25px_80px_rgba(255,138,61,0.18)]">

<Image
src="/hero/cake-main.jpg"
alt="Premium Cake"
fill
priority
className="object-cover scale-[1.04] max-w-[420px] mx-auto"
/>


{/* OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"/>

</div>


{/* RATING CARD */}

<motion.div
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:0.5,delay:0.5}}
className="absolute left-0 top-10 rounded-[28px] border border-[#FFE4D0] bg-white p-4 shadow-2xl"
>

<div className="mb-2 flex items-center gap-1">

{[...Array(5)].map((_,i)=>(

<Star
key={i}
size={14}
className="fill-[#FFB800] text-[#FFB800]"
/>

))}

</div>

<p className="text-lg font-black text-[#3D2314]">

4.9 Rating

</p>

<p className="text-xs text-[#8B6914]">

2000+ Happy Customers

</p>

</motion.div>


{/* BESTSELLER CARD */}

<motion.div
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:0.5,delay:0.7}}
className="absolute bottom-14 right-0 rounded-[28px] bg-gradient-to-br from-[#FF8A3D] to-[#E67329] p-5 text-white shadow-[0_20px_60px_rgba(255,138,61,0.35)]"
>

<p className="text-[10px] uppercase tracking-[0.18em] text-orange-100">

Best Seller

</p>

<h3 className="mt-2 text-lg font-bold">

Chocolate Truffle

</h3>

<p className="mt-1 text-3xl font-black">

₹649

</p>

</motion.div>

</div>

</motion.div>

</div>

</div>

</section>

);

}