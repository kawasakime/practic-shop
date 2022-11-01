import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { AiOutlineCheck } from "react-icons/ai";
import {
  getProductsCount,
  getTotalPrice,
  getTotalSale,
} from "../../utils/cart";
import { ICartItem } from "../../interfaces/components";

export interface CartOrderInfoProps {
  cartProducts: ICartItem[];
}

const CartOrderInfo: React.FC<CartOrderInfoProps> = ({ cartProducts }) => {
  return (
    <S.OrderInfoContainer>
      <S.TotalInfo>
        <li>
          {getProductsCount(cartProducts)} товара:{" "}
          <span>{getTotalPrice(cartProducts)} ₽</span>
        </li>
        <li>
          Скидка: <span>{getTotalSale(cartProducts)} ₽</span>
        </li>
      </S.TotalInfo>
      <hr />
      <S.PromoContainer>
        <C.Input placeholder="Промокод" width="100%" />
        <S.PromoBtn>
          <AiOutlineCheck />
        </S.PromoBtn>
      </S.PromoContainer>
      <S.TotalPrice>
        Итого к оплате:{" "}
        <span>
          {getTotalPrice(cartProducts) - getTotalSale(cartProducts)} ₽
        </span>
      </S.TotalPrice>
      <C.OrderBtn to="/order">Оформить заказ</C.OrderBtn>
    </S.OrderInfoContainer>
  );
};

export default CartOrderInfo;
