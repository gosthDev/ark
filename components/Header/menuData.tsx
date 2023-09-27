import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features"
  },
  {
    id: 3,
    title: "More",
    newTab: false,
    submenu: [
      {
        id: 34,
        title: "Software",
        newTab: false,
        path: "https://app.arkcorporation.es/",
      },
      {
        id: 34,
        title: "Web & Apps",
        newTab: false,
        path: "https://app.arkcorporation.es/",
      },
      {
        id: 34,
        title: "Quote Project",
        newTab: false,
        path: "https://quote.arkcorporation.es/",
      },
      {
        id: 34,
        title: "Licenses",
        newTab: false,
        path: "https://admin.arkcorporation.es/",
      },
      {
        id: 34,
        title: "Privacy Policy",
        newTab: false,
        path: "https://arkcorporation.es/privacy",
      },
      {
        id: 34,
        title: "Refunds Policy",
        newTab: false,
        path: "https://arkcorporation.es/refunds",
      },
      {
        id: 34,
        title: "Terms & Conditions",
        newTab: false,
        path: "https://arkcorporation.es/terms",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support"
  },
];

export default menuData;
