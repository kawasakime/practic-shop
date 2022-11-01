import * as React from "react";

import { useAppSelector } from "../../../redux/hooks";

import * as S from "./styles";
import { CartButtonProps } from "../../../interfaces/components";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { getProductsCount } from "../../../utils/cart";

const CartButton: React.FunctionComponent<CartButtonProps> = ({ children }) => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  return (
    <S.CartButton to="cart">
      {children}
      <div className="left-side">
        <AiOutlineShoppingCart className="cart-icon" />
        <div className="products-count">{getProductsCount(cartProducts)}</div>
      </div>
    </S.CartButton>
  );
};

export default CartButton;
