export const navLinks = [
  {
    title: "home",
    href: "/",
    hasMenu: false,
  },
  {
    title: "products",
    href: "/product?type=hot",
    hasMenu: true,
  },
  {
    title: "about us",
    href: "/about",
    hasMenu: false,
  },
  {
    title: "contact",
    href: "#footer",
    hasMenu: false,
  },
]

export const productsType = [
  {
    title: "Heating",
    href: "/product?type=hot",
    imageHref: "/kitchen.jpg",
  },
  {
    title: "Refrigation",
    href: "/product?type=cold",
    imageHref: "/kitchen2.jpg",
  },
  {
    title: "Kitchen Utensils",
    href: "/product?type=utensils",
    imageHref: "/kitchen3.jpg",
  },

  {
    title: "Boilers & Burners",
    href: "/product?type=burner",
    imageHref: "/boilers.jpg",
  },
  {
    title: "Fire Extinguisher",
    href: "/product?type=boiler",
    imageHref: "/fire extinguisher2.jpg",
  },
  {
    title: "Medical",
    href: "/product?type=others",
    imageHref: "/medical.jpg",
  },
]

export const products = [
  {
    mainImage: "/kitchen2.jpg",
    items: [
      {
        productImage: "/gas.jpg",
        title: "hot",
      },
      {
        productImage: "/gas2.jpg",
        title: "Heating",
      },
      {
        productImage: "/boilers2.jpg",
        title: "Boilers",
      },
      {
        productImage: "/boiler-nobackground.png",
        title: "Boiler",
      },
    ],
  },
  {
    mainImage: "/machine.jpg",
    items: [
      {
        productImage: "/kitchen2.jpg",
        title: "kitchen",
      },
      {
        productImage: "/kitchen2.jpg",
        title: "kitchen",
      },
      {
        productImage: "/kitchen3.jpg",
        title: "kitchen",
      },
      {
        productImage: "/kitchen2.jpg",
        title: "kitchen",
      },
    ],
  },
  {
    mainImage: "/kitchen3.jpg",
    items: [
      {
        productImage: "/boiler-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/boiler-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/boiler-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/boiler-nobackground.png",
        title: "Boiler",
      },
    ],
  },
  {
    mainImage: "/machine.jpg",
    items: [
      {
        productImage: "/Fire-Extinguisher-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/Fire-Extinguisher-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/Fire-Extinguisher-nobackground.png",
        title: "Boiler",
      },
      {
        productImage: "/Fire-Extinguisher-nobackground.png",
        title: "Boiler",
      },
    ],
  },
]
