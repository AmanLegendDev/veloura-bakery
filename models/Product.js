import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    /*
    =====================================
    BASIC INFO
    =====================================
    */

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    description: {
      type: String,
      default: "",
    },


    /*
    =====================================
    PRICING
    =====================================
    */

    sellingPrice: {
      type: Number,
      required: true,
    },


    /*
    =====================================
    IMAGES
    =====================================
    */

    image: {
      type: String,
      required: true,
    },

    gallery: [
      {
        type: String,
      },
    ],


    /*
    =====================================
    CATEGORY
    =====================================
    */

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },


    /*
    =====================================
    VISIBILITY
    =====================================
    */

    isVisible: {
      type: Boolean,
      default: true,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },


    /*
    =====================================
    COMMERCE
    =====================================
    */

    badgeText: {
      type: String,
      default: "",
    },

    offerText: {
      type: String,
      default: "",
    },

    stockStatus: {
      type: String,
      enum: [
        "in_stock",
        "low_stock",
        "out_of_stock",
      ],
      default: "in_stock",
    },

    deliveryInfo: {
      type: String,
      default: "",
    },


    /*
    =====================================
    CAKE OPTIONS
    =====================================
    */

    sizes: [
      {
        type: String,
      },
    ],

    weights: [
      {
        type: String,
      },
    ],

    cakeMessage: {
      type: Boolean,
      default: true,
    },

    cakeType: {
  type: String,
  enum: ["egg", "eggless"],
  default: "eggless",
},

preparationTime: {
  type: String,
  default: "",
},


    /*
    =====================================
    HIGHLIGHTS
    =====================================
    */

    shortHighlights: [
      {
        type: String,
      },
    ],

  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);