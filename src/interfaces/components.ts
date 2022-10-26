import React from "react";

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
}

export interface ICartItem {
  id: number;
  imgUrl: string;
  title: string;
  sale: boolean;
  prices: [number, number | undefined];
  count: number;
}

export interface AddToCartBtnProps {
  item: ICartItem;
  children: React.ReactNode;
  height?: string;
  width?: string;
}
