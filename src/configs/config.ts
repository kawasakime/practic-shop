import { IConfig } from "../interfaces/config";

export type TCategories =
  | "scissors"
  | "combs"
  | "brushes"
  | "electronics"
  | "razors"
  | "other"
  | "brushing"
  | "apron";

export const config: IConfig = {
  // Название сайта (название вкладки в браузере)
  title: "Scissors Shop",
  // Цвета
  colors: {
    primary: "#493D32",
    secondary: "#FFFFFF",
    teriary: "#BC9F75",
  },
  // Информация
  information: {
    phone: "+7 (900) 999 99 99",
    email: "scissors@shop",
    workTime: "Пн. - Вс. 10:00 - 21:00",
    address: "г. Ростов-на-Дону Ворошиловский проспект 10",
  },
  // Ссылки на соцсети, либо false
  social: {
    vk: "https://vk.com/",
    telegram: "https://web.telegram.org/k/",
    instagram: "https://www.instagram.com/",
  },
  // Навигация
  navigation: [
    {
      title: "Главная",
      route: "/",
      inFooter: false, // будет ли находиться в футере
    },
    {
      title: "Каталог",
      route: "/catalog",
      inFooter: false,
    },
    {
      title: "Оплата",
      route: "/payment",
      inFooter: true,
    },
    {
      title: "Доставка",
      route: "/delivery",
      inFooter: true,
    },
    {
      title: "Контакты",
      route: "/contacts",
      inFooter: true,
    },
  ],
  categories: [
    {
      title: "Ножницы",
      name: "scissors",
      img: "scissors.png",
    },
    {
      title: "Расчёски",
      name: "combs",
      img: "combs.png",
    },
    {
      title: "Смётки",
      name: "brushes",
      img: "brushes.png",
    },
    {
      title: "Электротовары",
      name: "electronics",
      img: "electronics.png",
    },
    {
      title: "Фартуки",
      name: "apron",
      img: "apron.png",
    },
    {
      title: "Брашинги",
      name: "brushing",
      img: "brushing.png",
    },
    {
      title: "Бритвы",
      name: "razors",
      img: "razors.png",
    },
    {
      title: "Разное",
      name: "other",
      img: "other.png",
    },
  ],
  // Главный блок при открытии
  main: {
    title: "КАЧЕСТВЕННЫЕ\nПАРИКМАХЕРСКИЕ\nИНСТРУМЕНТЫ",
    descr: "По самым выгодным ценам",
    btnText: "Купить",
  },
  mailing: {
    enable: true,
    title: "Подпишитесь на рассылку и получите 15% скидку на первый заказ",
    btnText: "Подписаться",
  },
  cart: {
    maxProductsCount: 10,
  },
  deliveryCost: 350,
};
