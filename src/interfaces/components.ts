import React from "react";
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

export interface SocialProps {
  marginLeft?: string;
}

export interface SocialItemProps {
  link: string;
}

export interface CartButtonProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  primary?: boolean;
  isFill?: boolean;
  children: React.ReactNode;
  handleCLick?: () => void
}

export interface ICartItem {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
  salePrice: number;
  count: number;
}

export interface CartItemProps {
  item: ICartItem;
}

export interface AddToCartBtnProps {
  item: ICartItem;
  children: React.ReactNode;
  height?: string;
  width?: string;
}

export interface ICustomerForm {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
  comment?: string;
}

export interface IDeliveryInfo {
  city: string;
  street: string;
  streetNumber: string;
  flatNumber: string;
}

export type DeliveryType = "delivery" | "pickup";

export interface OrderDeliveryInfoProps {
  activeType: DeliveryType;
  setActiveType: React.Dispatch<React.SetStateAction<DeliveryType>>;
  deliveryInfo: IDeliveryInfo;
  setDeliveryInfo: React.Dispatch<React.SetStateAction<IDeliveryInfo>>;
}

export interface OrderCustomerInfoProps {
  customerForm: ICustomerForm,
  setCustomerForm: React.Dispatch<React.SetStateAction<ICustomerForm>>
}

export type TPriceFilter = [number | "", number | ""]
export type TActiveCategoryFilter = 'all' | TCategories;

export interface IFilterSlice {
  priceRange: TPriceFilter;
  activeCategory: TActiveCategoryFilter
}

