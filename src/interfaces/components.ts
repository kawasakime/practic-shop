import React from "react";
import { TCategories } from "../configs/config";

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
  handleCLick?: () => void;
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
  customerForm: ICustomerForm;
  setCustomerForm: React.Dispatch<React.SetStateAction<ICustomerForm>>;
}

export type TPriceRangeInput = [number | "", number | ""];
export type TActiveCategoryFilter = "all" | TCategories;

export interface IFilterSlice {
  priceRange: [number, number];
  activeCategory: TActiveCategoryFilter;
  params: IProductParams[];
  search: string;
}

export interface IFilterGroupParam {
  key: string;
  values: string[];
}

export interface IProductParams {
  key: string;
  value: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  imgs: {
    folder: string;
    files: string[];
  };
  category: TCategories;
  price: number;
  salePrice?: number;
  params: IProductParams[];
}

export interface IFIlterParamCheckboxProps {
  name: string;
  value: string;
  setParams: (params: IProductParams[]) => void;
  params: IProductParams[];
  activeCategory: string;
}
