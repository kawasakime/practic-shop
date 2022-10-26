import React from "react";
import { AddToCartBtnProps } from "../../../interfaces/components";
import { addProduct } from "../../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import * as S from "./styles";

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ children, item }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.cart.products)
  const [isActive, setIsActive] = React.useState(false);

  const handleOnClick = () => {
    dispatch(addProduct(item));
    console.log(products)
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  return (
    <S.AddToCartBtn
      className={isActive ? "active" : undefined}
      onClick={handleOnClick}
    >
      {isActive ? "Добавлено" : children}
    </S.AddToCartBtn>
  );
};

export default AddToCartBtn;
