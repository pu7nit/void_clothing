/**
 * VOID — Product Catalog
 * Each design is listed once. Add/edit colors inside the garment you want to offer.
 * Each color has its own price, size-level stock, and image gallery.
 * A product is offered in only the garments you list under "garments":
 * omit the "t-shirts" or "hoodies" key entirely if that version does not exist.
 */
const STORE_CONFIG = {
  brandName: "VOID",
  tagline: "Heavyweight silhouettes. Precision embroidery.",
  whatsappNumber: "+91 8885360071",
  email: "ritvikjagana539@gmail.com",
  currency: "₹"
};

const PRODUCTS = [
  {
    id: "product-01",
    name: "Charizard Oversized",
    tagline: "Signature drop-shoulder silhouette",
    description: "A striking embroidered charizard breathing fire across the chest, blending bold orange, red, and green threadwork for a fierce statement on classic black.",
    embroidery: "High-density micro-thread embroidery (aprrox 10,000 stitches) across center chest.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 749,
        colors: [
          {
            name: "BLACK",
            sizes: { S: 1, M: 0, L: 0, XL: 0 },
            images: ["assets/p1/tee/front.png", "assets/p1/tee/close_up.png", "assets/p1/tee/tshirt.png", "assets/p1/tee/back2.png"],
          }
        ]
      },
      "hoodies": {
        price: 1149,
        colors: [
          {
            name: "BLACK",
            sizes: {S: 1, M: 1, L: 1, XL: 1},
            images: [
                "assets/p1/hoodie/front.png",
                "assets/p1/hoodie/back.png"
            ]
          }
        ]
      }
    }
  },
  {
    id: "product-02",
    name: "Phoenix Embroidery",
    tagline: "Phoenix back artwork",
    description: "240 Heavyweight oversized tee featuring an abstract phoenix motif embroidered with metallic red thread. Built for daily wear.",
    embroidery: "Made with more than 50,000 individual stiches, taking more than 3 hours per piece.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 899,
        colors: [
          {
            name: "BLACK",
            sizes: { S: 1, M: 2, L: 0, XL: 1 },
            images: ["assets/p2/back.png", "assets/p2/tshirt.png"],
            fallbackImages: ["assets/p2/back.png", "assets/p2/tshirt.png"]
          }
        ]
      },
      hoodies: {
        price: 1299,
        colors: [
          {
            name: "Pitch Black",
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p3/back.png", "assets/p3/hoodie.png"],
            fallbackImages: ["assets/p3/back.png", "assets/p3/hoodie.png"]
          }
        ]
      }
    }
  },

  {
    id: "product-08",
    name: "Flight of Freedom",
    tagline: "Soar. Move. Be Free.",
    description: "A clean tee with a vibrant hummingbird embroidery and Japanese-inspired detailing.",
    embroidery: "Detailed green, gold, and orange hummingbird embroidery paired with 翔る in gold thread.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 649,
        colors: [
          {
            name: "Black",
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p6/front.png", "assets/p6/close.png", "assets/p6/tshirt.png"],
            fallbackImages: ["assets/p6/front.png", "assets/p6/close.png", "assets/p6/tshirt.png"]
          },
          {
            name: "White",
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p7/front.png", "assets/p7/close.png", "assets/p7/tshirt.png"],
            fallbackImages: ["assets/p7/front.png", "assets/p7/close.png", "assets/p7/tshirt.png"]
          }
        ]
      }
    }
  },
  {
    id: "product-10",
    name: "Dragonball Tee",
    tagline: "Awaken the Dragon.",
    description: "A clean beige tee with a stunning dragonball embroidery and detailing.",
    embroidery: "Made with more than 1.1 lakh stitches taking over 3 hours for each piece.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 899,
        colors: [
          {
            name: "Beige",
            sizes: { S: 1, M: 1, L: 0, XL: 0 },
            images: ["assets/p8/front.png", "assets/p8/close.png", "assets/p8/tshirt.png"],
            fallbackImages: ["assets/p8/front.png", "assets/p8/close.png", "assets/p8/tshirt.png"]
          }
        ]
      }
    }
  },
  {
    id: "product-11",
    name: "Void Tee",
    tagline: "VOID Within.",
    description: "A clean cyan streetwear tee featuring bold maroon and cyan embroidery, blending minimalism with cyber sigilism.",
    embroidery: "A sharp cyber-sigil surrounding the VOID logo on the front, paired with 空所 (“void”) on the back for a subtle Japanese-inspired aesthetic.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 649,
        colors: [
          {
            name: "Cyan",
            sizes: { S: 1, M: 1, L: 0, XL: 0 },
            images: ["assets/p9/front.png", "assets/p9/back.png"],
            fallbackImages: ["assets/p9/front.png", "assets/p9/back.png"]
          }
        ]
      }
    }
  }
];