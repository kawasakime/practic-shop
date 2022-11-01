import React from "react";

import { CartItemProps } from "../../interfaces/components";

import * as S from "./styles";
import * as C from "../../styles/components";

import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../redux/hooks";
import {
  addProduct,
  removeAllProducts,
  removeOneProduct,
} from "../../redux/cartSlice";

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  return (
    <S.CartItem>
      <img
        src={`${window.location.origin}/assets/img/products/${item.imgUrl}`}
        alt=""
      />
      <p className="title">{item.title}</p>
      <div className="price-count__block">
        <S.CountContainer>
          <div
            className={`minus ${item.count === 1 ? "disable" : undefined}`}
            onClick={() => dispatch(removeOneProduct(item.id))}
          >
            -
          </div>
          <p>{item.count}</p>
          <div
            className={`plus ${item.count === 10 ? "disable" : undefined}`}
            onClick={() => dispatch(addProduct(item))}
          >
            +
          </div>
        </S.CountContainer>
        <S.PriceContainer>
          {item.salePrice && (
            <C.SalePrice>{item.count * item.price} ₽</C.SalePrice>
          )}
          <C.MainPrice className="price">
            {(!!item.salePrice ? item.salePrice : item.price) * item.count} ₽
          </C.MainPrice>
        </S.PriceContainer>
      </div>
      <AiOutlineClose
        className="remove"
        onClick={() => dispatch(removeAllProducts(item.id))}
      />
    </S.CartItem>
  );
};

export default CartItem;
