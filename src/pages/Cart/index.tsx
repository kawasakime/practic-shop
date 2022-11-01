import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { useAppSelector } from "../../redux/hooks";

import { getProductsCount } from "../../utils/cart";
import CartItem from "../../components/CartItem";
import CartOrderInfo from "../../components/CartOrderInfo";

const Cart: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <S.Cart>
      <C.Wrapper>
        <C.Title className="title">
          Корзина{" "}
          <S.ProductsCount>{getProductsCount(cartProducts)}</S.ProductsCount>
        </C.Title>
        {cartProducts.length === 0 ? (
          <S.CartIsEmpty>Корзина пуста</S.CartIsEmpty>
        ) : (
          <S.CartContainer>
            <S.CartProductsContainer>
              {cartProducts.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </S.CartProductsContainer>
            <CartOrderInfo cartProducts={cartProducts} />
          </S.CartContainer>
        )}
      </C.Wrapper>
    </S.Cart>
  );
};

export default Cart;
