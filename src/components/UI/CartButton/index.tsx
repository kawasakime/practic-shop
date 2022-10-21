import * as React from "react";

import * as S from "./styles";

import { AiOutlineShoppingCart } from "react-icons/ai";

interface CartButtonProps {
  children: React.ReactNode;
}

const CartButton: React.FunctionComponent<CartButtonProps> = ({ children }) => {
  return (
    <S.CartButton>
      {children}
      <div className="left-side">
        <AiOutlineShoppingCart className="cart-icon"/>
        <div className="products-count">0</div>
      </div>
    </S.CartButton>
  );
};

export default CartButton;
