
/**
 * VOID — Product Catalog
 * Each design is listed once. Add/edit colors inside the garment you want to offer.
 * Each color has its own price, size-level stock, and image gallery.
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
    name: "Charizard Oversized Black Tee",
    tagline: "Signature drop-shoulder silhouette",
    description: "A striking embroidered charizard breathing fire across the chest, blending bold orange, red, and green threadwork for a fierce statement on classic black.",
    embroidery: "High-density micro-thread embroidery (aprrox 10,000 stitches) across center chest.",
    featured: true,
    garments: {
      "t-shirts": {
        price: 649,
        colors: [
          {
            name: "BLACK",
            price: 649,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p1/front.png", "assets/p1/close_up.png", "assets/p1/tshirt.png"],
            fallbackImages: ["assets/p1/front.png", "assets/p1/close_up.png", "assets/p1/tshirt.png"]
          }
        ]
      },
      hoodies: { price: null, colors: [] }
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
            price: 899,
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
            price: 1299,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p3/back.png", "assets/p3/hoodie.png"],
            fallbackImages: ["assets/p3/back.png", "assets/p3/hoodie.png"]
          }
        ]
      }
    }
  },
  {
    id: "product-04",
    name: "Sakura Branch",
    tagline: "Clean embroidery",
    description: "Oversized black T-shirt featuring a hand-inspired cherry blossom embroidery, with a larger statement branch across the back and a smaller matching bloom on the front.",
    embroidery: "Direct flat-needle embroidery with approximately 70,000 stiches.",
    featured: false,
    garments: {
      "t-shirts": {
        price: 699,
        colors: [
          {
            name: "Black",
            price: 699,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p4/back.png", "assets/p4/front.png", "assets/p4/tshirt_back.png", "assets/p4/tshirt_front.png"],
            fallbackImages: ["assets/p4/back.png", "assets/p4/front.png", "assets/p4/tshirt_back.png", "assets/p4/tshirt_front.png"]
          },
          {
            name: "White",
            price: 699,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p5/back.png", "assets/p5/front.png", "assets/p5/tback.png", "assets/p5/tfront.png"],
            fallbackImages: ["assets/p5/back.png", "assets/p5/front.png", "assets/p5/tback.png", "assets/p5/tfront.png"]
          }
        ]
      },
      hoodies: { price: null, colors: [] }
    }
  },
  {
    id: "product-05",
    name: "Ghost Stitch Hoodie",
    tagline: "Raw-edge contrast stitch design",
    description: "Brushed fleece pullover hoodie in deep stone gray. Embellished with heavy contrast chain-stitch detailing running down the sleeves and back yoke.",
    embroidery: "Chain-stitch structural embroidery and left breast minimalist emblem.",
    featured: true,
    garments: {
      "t-shirts": { price: null, colors: [] },
      hoodies: {
        price: 1249,
        colors: [
          {
            name: "Stone Gray",
            price: 1249,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/c.jpg"],
            fallbackImages: ["assets/c.jpg"]
          }
        ]
      }
    }
  },
  {
    id: "product-07",
    name: "Lost Signal Hoodie",
    tagline: "Subtle sleeve typography",
    description: "Boxy fit, kangaroo pocket with reinforced bar-tacks. Fine-line Japanese tatami embroidery detailing along the right forearm and interior hood seam.",
    embroidery: "Tatami stitch geometric patterns and dense sleeve typography.",
    featured: false,
    garments: {
      "t-shirts": { price: null, colors: [] },
      hoodies: {
        price: 1199,
        colors: [
          {
            name: "Washed Olive",
            price: 1199,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/c.jpg"],
            fallbackImages: ["assets/c.jpg"]
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
            price: 649,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p6/front.png", "assets/p6/close.png", "assets/p6/tshirt.png"],
            fallbackImages: ["assets/p6/front.png", "assets/p6/close.png", "assets/p6/tshirt.png"]
          },
          {
            name: "White",
            price: 649,
            sizes: { S: 2, M: 2, L: 0, XL: 0 },
            images: ["assets/p7/front.png", "assets/p7/close.png", "assets/p7/tshirt.png"],
            fallbackImages: ["assets/p7/front.png", "assets/p7/close.png", "assets/p7/tshirt.png"]
          }
        ]
      },
      hoodies: { price: null, colors: [] }
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
            price: 899,
            sizes: { S: 1, M: 1, L: 0, XL: 0 },
            images: ["assets/p8/front.png", "assets/p8/close.png", "assets/p8/tshirt.png"],
            fallbackImages: ["assets/p8/front.png", "assets/p8/close.png", "assets/p8/tshirt.png"]
          }
        ]
      },
      hoodies: { price: null, colors: [] }
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
            price: 649,
            sizes: { S: 1, M: 1, L: 0, XL: 0 },
            images: ["assets/p9/front.png", "assets/p9/back.png"],
            fallbackImages: ["assets/p9/front.png", "assets/p9/back.png"]
          }
        ]
      },
      hoodies: { price: null, colors: [] }
    }
  }
];
