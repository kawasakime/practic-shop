import * as React from "react";

import { useAppSelector } from "../../../redux/hooks";

import * as S from "./styles";
import { CartButtonProps } from "../../../interfaces/components";

import { AiOutlineShoppingCart } from "react-icons/ai";


const CartButton: React.FunctionComponent<CartButtonProps> = ({ children }) => {

  const productsCount = useAppSelector((state) => state.cart.products).length;

  return (
    <S.CartButton to="cart">
      {children}
      <div className="left-side">
        <AiOutlineShoppingCart className="cart-icon" />
        <div className="products-count">{productsCount}</div>
      </div>
    </S.CartButton>
  );
};

export default CartButton;
