const SHOP_DATA = {
  appetizers: {
    id: 1,
    title: "Appetizers",
    routeName: "appetizers",
    items: [
      {
        id: 1,
        name: "Falafel",
        imageUrl:
          "https://i.ibb.co/hVMhv2t/louis-hansel-shotsoflouis-B1-Iu-Px-UOk-H4-unsplash.jpg",
        price: 14,
      },
      {
        id: 2,
        name: "Sushi Roll",
        imageUrl:
          "https://i.ibb.co/cYbkGPK/louis-hansel-shotsoflouis-w-Xk-Gv-QJWI-Y-unsplash.jpg",
        price: 15,
      },
      {
        id: 3,
        name: "Cheese Fingers",
        imageUrl:
          "https://i.ibb.co/CHztwV1/clint-bustrillos-c6-J2thg8k04-unsplash.jpg",
        price: 12,
      },
      {
        id: 4,
        name: "Mini Quiche",
        imageUrl:
          "https://i.ibb.co/3kK5Xxm/hillary-ungson-n9xsu46-NGa-E-unsplash.jpg",
        price: 13,
      },
      {
        id: 5,
        name: "Caprese Salad",
        imageUrl:
          "https://i.ibb.co/WWJ3BLY/markus-spiske-GM0-Zvw3-Pz-Y-unsplash.jpg",
        price: 15,
      },
      {
        id: 6,
        name: "Gyozas",
        imageUrl: "https://i.ibb.co/YTRvKQM/mae-mu-n-GTDXf6-NM-I-unsplash.jpg",
        price: 12,
      },
      {
        id: 7,
        name: "Tuna Stack",
        imageUrl:
          "https://i.ibb.co/BT9VpsZ/monstruo-estudio-df-It-ZYL3q-I0-unsplash.jpg",
        price: 10,
      },
      {
        id: 8,
        name: "Super Nachos",
        imageUrl:
          "https://i.ibb.co/PFj1zz7/louis-hansel-shotsoflouis-h1-Uur-Xw0-Yck-unsplash.jpg",
        price: 17,
      },
      {
        id: 9,
        name: "Chicken Wings",
        imageUrl:
          "https://i.ibb.co/C1wJyp0/drew-beamer-FUuts51p47-E-unsplash.jpg",
        price: 12,
      },
    ],
  },
  breakfast: {
    id: 2,
    title: "Breakfast",
    routeName: "breakfast",
    items: [
      {
        id: 10,
        name: "Pancakes",
        imageUrl:
          "https://i.ibb.co/nrPmhz0/calum-lewis-8-Nc-o-Qsc2q-Q-unsplash.jpg",
        price: 12,
      },
      {
        id: 11,
        name: "Power Bowl",
        imageUrl:
          "https://i.ibb.co/wrNXfvC/joseph-gonzalez-fdl-ZBWIP0a-M-unsplash.jpg",
        price: 11,
      },
      {
        id: 12,
        name: "Egg Toasts",
        imageUrl:
          "https://i.ibb.co/1XzR1TZ/ben-kolde-FFq-NATH27-EM-unsplash.jpg",
        price: 11,
      },
      {
        id: 13,
        name: "Bacon Eggs",
        imageUrl:
          "https://i.ibb.co/85MnLYc/eiliv-sonas-aceron-An6c-Tgm-C8yk-unsplash.jpg",
        price: 14,
      },
      {
        id: 14,
        name: "French Toasts",
        imageUrl:
          "https://i.ibb.co/tMg2g4y/joseph-gonzalez-zc-Ugjyq-Ewe8-unsplash-1.jpg",
        price: 14,
      },
      {
        id: 15,
        name: "Veggie Eggs",
        imageUrl:
          "https://i.ibb.co/wyqP7Fm/chris-ralston-09-HGd-Zzk-P-Q-unsplash.jpg",
        price: 13,
      },
      {
        id: 16,
        name: "Oatmeal Bowl",
        imageUrl:
          "https://i.ibb.co/1XdhMv7/alex-motoc-v77vc1i-AK18-unsplash.jpg",
        price: 7,
      },
      {
        id: 17,
        name: "Turkey Croissant",
        imageUrl:
          "https://i.ibb.co/3yhQwyR/maria-labanda-t-G0-Fdjr-H0-E-unsplash.jpg",
        price: 13,
      },
    ],
  },
  burgers: {
    id: 3,
    title: "Burgers",
    routeName: "burgers",
    items: [
      {
        id: 18,
        name: "Classic Burger",
        imageUrl:
          "https://i.ibb.co/D9CLRHg/food-photographer-david-fedulov-E94j3r-Mcxlw-unsplash.jpg",
        price: 15,
      },
      {
        id: 19,
        name: "Porto Burger",
        imageUrl:
          "https://i.ibb.co/MDqqtPz/andre-noboa-v-Ed-Dm-Pd-To-BM-unsplash.jpg",
        price: 17,
      },
      {
        id: 20,
        name: "Pollo Burger",
        imageUrl:
          "https://i.ibb.co/yPJ7DHw/dilyara-garifullina-i-TGi5q-QHPM-unsplash.jpg",
        price: 15,
      },
      {
        id: 21,
        name: "Green Stack",
        imageUrl:
          "https://i.ibb.co/8rwJbXp/vicky-ng-x-Ta-Tm8e-Foe4-unsplash.jpg",
        price: 14,
      },
      {
        id: 22,
        name: "Monster Burger",
        imageUrl:
          "https://i.ibb.co/PTzYqXv/amirali-mirhashemian-j-MPEw-H9-LM4-unsplash.jpg",
        price: 18,
      },
    ],
  },
  salads: {
    id: 4,
    title: "Salads",
    routeName: "salads",
    items: [
      {
        id: 23,
        name: "Salmon Salad",
        imageUrl:
          "https://i.ibb.co/FnF7Z9x/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg",
        price: 17,
      },
      {
        id: 24,
        name: "Fresh Spring",
        imageUrl:
          "https://i.ibb.co/FKmfH1Z/dovile-ramoskaite-x-X9-Smq-QCb-FY-unsplash.jpg",
        price: 15,
      },
      {
        id: 25,
        name: "Grenish Bowl",
        imageUrl:
          "https://i.ibb.co/N39fb4Y/nadine-primeau-ft-Wfohtj-Nw-unsplash.jpg",
        price: 15,
      },
      {
        id: 26,
        name: "Asian Bowl",
        imageUrl:
          "https://i.ibb.co/8b5tn41/eiliv-sonas-aceron-Zu-IDLSz3-XLg-unsplash.jpg",
        price: 15,
      },
      {
        id: 27,
        name: "Tropical",
        imageUrl:
          "https://i.ibb.co/TYzPgS8/rebeca-g-sendroiu-Et-ANw-Y5-TXJY-unsplash.jpg",
        price: 19,
      },
      {
        id: 28,
        name: "Pollo Salad",
        imageUrl:
          "https://i.ibb.co/7vRKJW5/nadine-primeau-n4-Rrgczk-LJM-unsplash.jpg",
        price: 17,
      },
      {
        id: 29,
        name: "Ocean Breeze",
        imageUrl:
          "https://i.ibb.co/RDHjfkB/alina-chernysheva-oj2h-Bf5-TOFM-unsplash.jpg",
        price: 18,
      },
    ],
  },
  desserts: {
    id: 5,
    title: "Desserts",
    routeName: "desserts",
    items: [
      {
        id: 30,
        name: "Chocolate Cake",
        imageUrl:
          "https://i.ibb.co/MVT0w5n/will-echols-P-l1b-JQp-QF0-unsplash.png",
        price: 9,
      },
      {
        id: 31,
        name: "Tiramisu",
        imageUrl:
          "https://i.ibb.co/SNz9W5p/after-anthony-espinosa-6iqp-LKqea-E0-unsplash.png",
        price: 8,
      },
      {
        id: 32,
        name: "House Doughnut",
        imageUrl:
          "https://i.ibb.co/M9qpych/after-kobby-mendez-q54-Oxq44-MZs-unsplash.png",
        price: 3,
      },
      {
        id: 33,
        name: "Apple Pie",
        imageUrl:
          "https://i.ibb.co/HYghv9B/after-dilyara-garifullina-i-LSc-UZaf-Bzc-unsplash.png",
        price: 7,
      },
      {
        id: 34,
        name: "Chocolate Cookie",
        imageUrl:
          "https://i.ibb.co/1X1Zz3Y/after-jennifer-pallian-Ofd-Diqx8-Cz8-unsplash.png",
        price: 5,
      },
      {
        id: 35,
        name: "Oreo Milkshake",
        imageUrl:
          "https://i.ibb.co/BVYTSWX/after-emile-mbunzama-c-Lpd-EA23-Z44-unsplash.png",
        price: 12,
      },
    ],
  },
};

export default SHOP_DATA;
