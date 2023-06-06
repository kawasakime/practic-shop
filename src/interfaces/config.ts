import { TCategories } from "../configs/config";

export interface IConfig {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    teriary: string;
  };
  information: {
    phone: string;
    email: string;
    workTime: string;
    address: string;
  };
  social: {
    vk: string;
    telegram: string;
    instagram: string;
  };
  navigation: { title: string; route: string; inFooter: boolean }[];
  categories: { title: string; name: TCategories; img: string }[];
  main: {
    title: string;
    descr: string;
    btnText: string;
  };
  mailing: {
    enable: boolean;
    title: string;
    btnText: string;
  };
  cart: {
    maxProductsCount: number;
  };
  deliveryCost: number;
}