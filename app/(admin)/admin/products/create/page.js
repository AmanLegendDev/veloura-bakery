"use client";

import { useEffect, useState } from "react";

import {
  X,
  Upload,
  CheckCircle2,
  Package,
  IndianRupee,
  ImageIcon,
  Sparkles,
  Truck,
  Star,
  Images,
  Cake,
  Ruler,
  Weight,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {

  /*
  =====================================
  EMPTY FORM
  =====================================
  */

  const emptyForm = {
    name: "",
    description: "",
    sellingPrice: "",
    category: "",

    isFeatured: false,
    isVisible: true,

    /*
    COMMERCE
    */

    badgeText: "",
    offerText: "",
    deliveryInfo: "",

    stockStatus: "in_stock",

    /*
    OPTIONS
    */

    sizes: ["", "", ""],

    weights: ["", "", ""],

    shortHighlights: ["", "", "", ""],

    cakeMessage: true,

    cakeType: "eggless",

preparationTime: "",

    gallery: [],
  };

  const [form, setForm] = useState(emptyForm);

  const [categories, setCategories] = useState([]);

  const [image, setImage] = useState("");

  const [galleryUploading, setGalleryUploading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [showPopup, setShowPopup] =
    useState(false);

  /*
  =====================================
  FETCH CATEGORIES
  =====================================
  */

  useEffect(() => {

    fetch("/api/categories/dropdown")
      .then((res) => res.json())
      .then(setCategories);

  }, []);

  /*
  =====================================
  MAIN IMAGE UPLOAD
  =====================================
  */

  const handleUpload = async (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    const fd = new FormData();

    fd.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();

    if (data?.url) {
      setImage(data.url);
    }

    setUploading(false);

  };

  /*
  =====================================
  GALLERY UPLOAD
  =====================================
  */

  const handleGalleryUpload = async (e) => {

    const files = Array.from(e.target.files);

    if (!files.length) return;

    setGalleryUploading(true);

    const uploadedImages = [];

    for (const file of files) {

      const fd = new FormData();

      fd.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data?.url) {
        uploadedImages.push(data.url);
      }

    }

    setForm({
      ...form,
      gallery: [
        ...form.gallery,
        ...uploadedImages,
      ],
    });

    setGalleryUploading(false);

  };

  /*
  =====================================
  REMOVE IMAGE
  =====================================
  */

  const removeImage = () => {
    setImage("");
  };

  /*
  =====================================
  REMOVE GALLERY IMAGE
  =====================================
  */

  const removeGalleryImage = (index) => {

    const updated = [...form.gallery];

    updated.splice(index, 1);

    setForm({
      ...form,
      gallery: updated,
    });

  };

  /*
  =====================================
  SUBMIT
  =====================================
  */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !form.name ||
      !form.sellingPrice ||
      !form.category ||
      !image
    ) {
      alert("Fill all required fields");
      return;
    }

    await fetch("/api/products/create", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        ...form,

        image,

        sizes: form.sizes.filter(Boolean),

        weights: form.weights.filter(Boolean),

        shortHighlights:
          form.shortHighlights.filter(Boolean),

      }),

    });

    setShowPopup(true);

    setForm(emptyForm);

    setImage("");

    setTimeout(() => {
      setShowPopup(false);
    }, 1500);

  };

  return (

    <div className="min-h-screen bg-[#fffaf5] px-4 py-6 pb-24">


      <div className="mx-auto max-w-4xl space-y-6">


        {/* SUCCESS */}

        <AnimatePresence>

          {showPopup && (

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            >

              <div className="flex items-center gap-3 rounded-[30px] bg-white px-6 py-5 shadow-2xl">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100">

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                </div>

                <div>

                  <p className="font-semibold text-slate-900">

                    Product Created

                  </p>

                  <p className="text-sm text-slate-500">

                    Bakery product added successfully

                  </p>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>


        {/* HEADER */}

        <div className="space-y-3">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF1E7] px-4 py-2">

            <Sparkles
              size={14}
              className="text-[#FF8A3D]"
            />

            <p className="text-sm font-semibold text-[#FF8A3D]">

              VELOURA BAKERY ADMIN

            </p>

          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#3D2314] md:text-5xl">

            Add New Bakery Product

          </h1>

          <p className="max-w-2xl text-sm leading-relaxed text-[#8B6914]">

            Create premium cakes, desserts and bakery products with beautiful commerce details and bakery highlights.

          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-8 rounded-[36px] border border-[#FFE4D0] bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-8"
        >


          {/* PRODUCT INFO */}

          <div className="space-y-5">

            <SectionTitle
              icon={<Package size={18}/>}
              title="Product Information"
            />

            <InputField
              label="Product Name"
              placeholder="Belgian Chocolate Cake"
              value={form.name}
              onChange={(v) =>
                setForm({
                  ...form,
                  name: v,
                })
              }
            />

            <TextAreaField
              label="Description"
              placeholder="Write beautiful bakery product description..."
              value={form.description}
              onChange={(v) =>
                setForm({
                  ...form,
                  description: v,
                })
              }
            />

          </div>


          {/* PRICE + CATEGORY */}

          <div className="space-y-5">

            <SectionTitle
              icon={<IndianRupee size={18}/>}
              title="Pricing & Category"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <InputField
                label="Selling Price"
                type="number"
                placeholder="699"
                value={form.sellingPrice}
                onChange={(v) =>
                  setForm({
                    ...form,
                    sellingPrice: Number(v),
                  })
                }
              />

              <SelectField
                label="Stock Status"
                value={form.stockStatus}
                onChange={(v) =>
                  setForm({
                    ...form,
                    stockStatus: v,
                  })
                }
                options={[
                  {
                    value: "in_stock",
                    label: "In Stock",
                  },
                  {
                    value: "low_stock",
                    label: "Low Stock",
                  },
                  {
                    value: "out_of_stock",
                    label: "Out Of Stock",
                  },
                ]}
              />

            </div>

            <SelectField
              label="Product Category"
              value={form.category}
              onChange={(v) =>
                setForm({
                  ...form,
                  category: v,
                })
              }
              options={[
                {
                  value: "",
                  label: "Select Category",
                },

                ...categories.map((cat) => ({
                  value: cat._id,
                  label: cat.name,
                })),
              ]}
            />

          </div>


          {/* IMAGES */}

          <div className="space-y-5">

            <SectionTitle
              icon={<ImageIcon size={18}/>}
              title="Product Media"
            />

            <UploadBox
              title="Upload Main Product Image"
              subtitle="Premium bakery product image"
              onChange={handleUpload}
            />

            {uploading && (
              <p className="text-sm font-medium text-orange-500">
                Uploading image...
              </p>
            )}

            {image && (

              <div className="relative w-32">

                <img
                  src={image}
                  alt="product"
                  className="h-32 w-32 rounded-3xl border border-orange-100 object-cover"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white"
                >

                  <X size={14}/>

                </button>

              </div>

            )}


            {/* GALLERY */}

            <div className="space-y-4">

              <SectionTitle
                icon={<Images size={18}/>}
                title="Gallery Images"
              />

              <UploadBox
                title="Upload Multiple Gallery Images"
                subtitle="Cake angles, slices, closeups"
                multiple
                onChange={handleGalleryUpload}
              />

              {galleryUploading && (

                <p className="text-sm font-medium text-orange-500">

                  Uploading gallery...

                </p>

              )}

              <div className="flex flex-wrap gap-3">

                {form.gallery.map((img, index) => (

                  <div
                    key={index}
                    className="relative"
                  >

                    <img
                      src={img}
                      alt="gallery"
                      className="h-24 w-24 rounded-2xl border border-orange-100 object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeGalleryImage(index)
                      }
                      className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white"
                    >

                      <X size={12}/>

                    </button>

                  </div>

                ))}

              </div>

            </div>

          </div>


          {/* COMMERCE */}

          <div className="space-y-5">

            <SectionTitle
              icon={<Truck size={18}/>}
              title="Commerce Settings"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <InputField
                label="Badge Text"
                placeholder="Best Seller"
                value={form.badgeText}
                onChange={(v) =>
                  setForm({
                    ...form,
                    badgeText: v,
                  })
                }
              />

              <InputField
                label="Offer Text"
                placeholder="20% OFF"
                value={form.offerText}
                onChange={(v) =>
                  setForm({
                    ...form,
                    offerText: v,
                  })
                }
              />

            </div>

            <InputField
              label="Delivery Information"
              placeholder="Delivered in 2 Hours"
              value={form.deliveryInfo}
              onChange={(v) =>
                setForm({
                  ...form,
                  deliveryInfo: v,
                })
              }
            />

          </div>


          {/* OPTIONS */}

          <div className="space-y-5">

            <SectionTitle
              icon={<Cake size={18}/>}
              title="Cake Options"
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">


              {/* SIZES */}

              <div className="space-y-3">

                <div className="flex items-center gap-2">

                  <Ruler
                    size={16}
                    className="text-orange-500"
                  />

                  <p className="font-medium text-slate-800">

                    Cake Sizes

                  </p>

                </div>

                {[0,1,2].map((index) => (

                  <input
                    key={index}
                    type="text"
                    placeholder={`Size ${index + 1}`}
                    value={form.sizes[index]}
                    onChange={(e) => {

                      const updated = [...form.sizes];

                      updated[index] =
                        e.target.value;

                      setForm({
                        ...form,
                        sizes: updated,
                      });

                    }}
                    className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />

                ))}

              </div>


              {/* WEIGHTS */}

              <div className="space-y-3">

                <div className="flex items-center gap-2">

                  <Weight
                    size={16}
                    className="text-orange-500"
                  />

                  <p className="font-medium text-slate-800">

                    Cake Weights

                  </p>

                </div>

                {[0,1,2].map((index) => (

                  <input
                    key={index}
                    type="text"
                    placeholder={`Weight ${index + 1}`}
                    value={form.weights[index]}
                    onChange={(e) => {

                      const updated = [...form.weights];

                      updated[index] =
                        e.target.value;

                      setForm({
                        ...form,
                        weights: updated,
                      });

                    }}
                    className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />

                ))}

              </div>

            </div>


            {/* CAKE TYPE + PREPARATION */}

<div className="grid grid-cols-1 gap-4 md:grid-cols-2">


  {/* CAKE TYPE */}

  <SelectField
    label="Cake Type"
    value={form.cakeType}
    onChange={(v) =>
      setForm({
        ...form,
        cakeType: v,
      })
    }
    options={[
      {
        value: "egg",
        label: "With Egg",
      },
      {
        value: "eggless",
        label: "Eggless",
      },
    ]}
  />


  {/* PREPARATION TIME */}

  <InputField
    label="Preparation Time"
    placeholder="2 Hours"
    value={form.preparationTime}
    onChange={(v) =>
      setForm({
        ...form,
        preparationTime: v,
      })
    }
  />

</div>


            {/* HIGHLIGHTS */}

            <div className="space-y-3">

              <label className="text-sm font-medium text-slate-700">

                Product Highlights

              </label>

              <div className="grid grid-cols-2 gap-3">

                {[0,1,2,3].map((index) => (

                  <input
                    key={index}
                    type="text"
                    placeholder={`Highlight ${index + 1}`}
                    value={form.shortHighlights[index]}
                    onChange={(e) => {

                      const updated = [...form.shortHighlights];

                      updated[index] =
                        e.target.value;

                      setForm({
                        ...form,
                        shortHighlights: updated,
                      });

                    }}
                    className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                  />

                ))}

              </div>

            </div>


            {/* CAKE MESSAGE */}

            <label className="flex items-center justify-between rounded-3xl border border-slate-200 p-5">

              <div>

                <p className="font-semibold text-slate-900">

                  Cake Message Support

                </p>

                <p className="text-sm text-slate-500">

                  Allow custom text on cakes

                </p>

              </div>

              <input
                type="checkbox"
                checked={form.cakeMessage}
                onChange={(e) =>
                  setForm({
                    ...form,
                    cakeMessage:
                      e.target.checked,
                  })
                }
                className="h-5 w-5 accent-orange-500"
              />

            </label>

          </div>


          {/* VISIBILITY */}

          <div className="space-y-5">

            <SectionTitle
              icon={<Star size={18}/>}
              title="Visibility Settings"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">


              <ToggleCard
                title="Featured Product"
                subtitle="Highlight on homepage"
                checked={form.isFeatured}
                onChange={(value) =>
                  setForm({
                    ...form,
                    isFeatured: value,
                  })
                }
              />


              <ToggleCard
                title="Visible Product"
                subtitle="Show product in storefront"
                checked={form.isVisible}
                onChange={(value) =>
                  setForm({
                    ...form,
                    isVisible: value,
                  })
                }
              />

            </div>

          </div>


          {/* SUBMIT */}

          <button className="h-14 w-full rounded-2xl bg-[#FF8A3D] text-sm font-semibold text-white shadow-[0_15px_40px_rgba(255,138,61,0.30)] transition-all hover:bg-[#f57c2e]">

            Save Bakery Product

          </button>

        </form>

      </div>

    </div>

  );

}

/*
=====================================
COMPONENTS
=====================================
*/

function SectionTitle({
  icon,
  title,
}) {

  return (

    <div className="flex items-center gap-2">

      <div className="text-orange-500">

        {icon}

      </div>

      <h2 className="font-semibold text-slate-900">

        {title}

      </h2>

    </div>

  );

}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {

  return (

    <div className="space-y-2">

      <label className="text-sm font-medium text-slate-700">

        {label}

      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      />

    </div>

  );

}

function TextAreaField({
  label,
  placeholder,
  value,
  onChange,
}) {

  return (

    <div className="space-y-2">

      <label className="text-sm font-medium text-slate-700">

        {label}

      </label>

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="min-h-[120px] w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      />

    </div>

  );

}

function SelectField({
  label,
  value,
  onChange,
  options,
}) {

  return (

    <div className="space-y-2">

      <label className="text-sm font-medium text-slate-700">

        {label}

      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition-all focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
      >

        {options.map((option) => (

          <option
            key={option.value}
            value={option.value}
          >

            {option.label}

          </option>

        ))}

      </select>

    </div>

  );

}

function UploadBox({
  title,
  subtitle,
  onChange,
  multiple = false,
}) {

  return (

    <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-[30px] border-2 border-dashed border-orange-200 bg-orange-50/40 p-8 text-center transition-all hover:bg-orange-50">

      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">

        <Upload
          size={22}
          className="text-orange-500"
        />

      </div>

      <div>

        <p className="font-medium text-slate-700">

          {title}

        </p>

        <p className="text-sm text-slate-500">

          {subtitle}

        </p>

      </div>

      <input
        type="file"
        hidden
        multiple={multiple}
        onChange={onChange}
      />

    </label>

  );

}

function ToggleCard({
  title,
  subtitle,
  checked,
  onChange,
}) {

  return (

    <label className="flex cursor-pointer items-center justify-between rounded-3xl border border-slate-200 p-5">

      <div>

        <p className="font-semibold text-slate-900">

          {title}

        </p>

        <p className="text-sm text-slate-500">

          {subtitle}

        </p>

      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) =>
          onChange(e.target.checked)
        }
        className="h-5 w-5 accent-orange-500"
      />

    </label>

  );

}