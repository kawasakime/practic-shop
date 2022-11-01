import React from "react";
import { AddToCartBtnProps } from "../../../interfaces/components";
import { addProduct } from "../../../redux/cartSlice";
import { useAppDispatch } from "../../../redux/hooks";

import * as S from "./styles";

const AddToCartBtn = React.forwardRef<
  HTMLButtonElement,
  AddToCartBtnProps
>(({ children, item, width = "120px", height = "33px" }, ref) => {
  const dispatch = useAppDispatch();
  const [isActive, setIsActive] = React.useState(false);

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addProduct(item));
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 1000);
  };

  return (
    <S.AddToCartBtn
      ref={ref}
      width={width}
      height={height}
      className={isActive ? "active" : undefined}
      onClick={handleOnClick}
    >
      {isActive ? "Добавлено" : children}
    </S.AddToCartBtn>
  );
});

export default AddToCartBtn;
