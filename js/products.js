/**
 * VOID — Product Catalog Data & Configuration
 * Edit this file to update contacts or add/remove products.
 */

const STORE_CONFIG = {
  brandName: "VOID",
  tagline: "Heavyweight silhouettes. Precision embroidery.",
  // Replace with your actual WhatsApp phone number with country code (no + or spaces)
  whatsappNumber: "+91 8885360071",
  email: "ritvikjagana539@gmail.com",
  currency: "₹"
};

const PRODUCTS = [
  {
    id: "product-01",
    name: "Charizard Oversized Black Tee",
    category: "t-shirts",
    price: 649,
    tagline: "Signature drop-shoulder silhouette",
    description: "A striking embroidered charizard breathing fire across the chest, blending bold orange, red, and green threadwork for a fierce statement on classic black.",
    embroidery: "High-density micro-thread embroidery (aprrox 10,000 stitches) across center chest.",
    sizes: ["S", "M"],
    colors: ["BLACK"],
    featured: true,
    images: [
      "assets/p1/front.png",
      "assets/p1close_up.png",
      "assets/p1/tshirt.png"
    ],
    // High-quality placeholders for immediate preview
    fallbackImages: [
      "assets/p1/front.png",
      "assets/p1/close_up.png",
      "assets/p1/tshirt.png"
    ]
  },
  {
    id: "product-02",
    name: "phoenix Embroidery Tee",
    category: "t-shirts",
    price: 899,
    tagline: "Phoenix back artwork",
    description: "240 Heavyweight oversized tee featuring an abstract phoenix motif embroidered with metallic red thread. Built for daily wear.",
    embroidery: "Made with more than 50,000 individual stiches, taking more than 3 hours per piece.",
    sizes: ["S", "M"],
    colors: ["BLACK"],
    featured: true,
    images: [
      "assets/p2/back.png",
      "assets/p2/tshirt.png"
    ],
    fallbackImages: [
      "assets/p2/back.png",
      "assets/p2/tshirt.png"
    ]
  },
  {
    id: "product-03",
    name: "Phoenix Heavyweight Hoodie",
    category: "hoodies",
    price: 1299,
    tagline: "430 GSM Cotton brushed",
    description: "A premium black hoodie featuring a bold, fiery phoenix embroidery across the back. Rich red, orange, and gold tones create a striking rebirth-inspired design with a powerful streetwear aesthetic.",
    embroidery: "Made with more than 50,000 individual stiches, taking more than 3 hours per piece.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pitch Black"],
    featured: true,
    images: [
      "assets/p3/back.png",
      "assets/p3/hoodie.png"
    ],
    fallbackImages: [
      "assets/p3/back.png",
      "assets/p3/hoodie.png"
    ]
  },
  {
    id: "product-04",
    name: "Sakura Branch Tee",
    category: "t-shirts",
    price: 699,
    tagline: "Clean retro-techno embroidery",
    description: "Oversized black T-shirt featuring a hand-inspired cherry blossom embroidery, with a larger statement branch across the back and a smaller matching bloom on the front.",
    embroidery: "Direct flat-needle embroidery with approximately 70,000 stiches.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    featured: false,
    images: [
      "assets/p4/back.png",
      "assets/p4/front.png",
      "assets/p4/tshirt_back.png",
      "assets/p4/tshirt_front.png"
    ],
    fallbackImages: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "product-05",
    name: "Ghost Stitch Hoodie",
    category: "hoodies",
    price: 1249,
    tagline: "Raw-edge contrast stitch design",
    description: "Brushed fleece pullover hoodie in deep stone gray. Embellished with heavy contrast chain-stitch detailing running down the sleeves and back yoke.",
    embroidery: "Chain-stitch structural embroidery and left breast minimalist emblem.",
    sizes: ["M", "L", "XL"],
    colors: ["Stone Gray"],
    featured: true,
    images: [
      "assets/products/product-05/front.jpg",
      "assets/products/product-05/back.jpg"
    ],
    fallbackImages: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "product-06",
    name: "After Dark Tee",
    category: "t-shirts",
    price: 749,
    tagline: "Midnight botanical needlework",
    description: "Oversized silhouette cut from 220 GSM combed cotton. Intricate dark flora motif rendered in high-density matte black thread for a covert, light-reactive look.",
    embroidery: "Complex 14,000 stitch matte tonal needlework across the upper back.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Faded Black"],
    featured: false,
    images: [
      "assets/products/product-06/front.jpg",
      "assets/products/product-06/back.jpg"
    ],
    fallbackImages: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "product-07",
    name: "Lost Signal Hoodie",
    category: "hoodies",
    price: 1199,
    tagline: "Subtle sleeve typography",
    description: "Boxy fit, kangaroo pocket with reinforced bar-tacks. Fine-line Japanese tatami embroidery detailing along the right forearm and interior hood seam.",
    embroidery: "Tatami stitch geometric patterns and dense sleeve typography.",
    sizes: ["M", "L", "XL"],
    colors: ["Washed Olive"],
    featured: false,
    images: [
      "assets/products/product-07/front.jpg",
      "assets/products/product-07/back.jpg"
    ],
    fallbackImages: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id: "product-08",
    name: "Eclipse Embroidery Tee",
    category: "t-shirts",
    price: 799,
    tagline: "Solar disc continuous needlework",
    description: "Heavyweight streetwear cut with dropped shoulders. Front features a circular lunar eclipse rendered in graduated density black-on-charcoal thread.",
    embroidery: "Continuous gradient-density circular embroidery on center torso.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Vintage Charcoal"],
    featured: false,
    images: [
      "assets/products/product-08/front.jpg",
      "assets/products/product-08/back.jpg"
    ],
    fallbackImages: [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];
