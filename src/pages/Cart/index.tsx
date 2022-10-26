import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { AiOutlineClose } from "react-icons/ai";
import { ICartItem } from "../../interfaces/components";
import { addProduct, removeProduct } from "../../redux/cartSlice";

const Cart: React.FC = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();


  return (
    <S.Cart>
      <C.Wrapper>
        <C.Title className="title">
          Корзина <S.ProductsCount>{cartProducts.length}</S.ProductsCount>
        </C.Title>
        {cartProducts.length === 0 ? (
          <S.CartIsEmpty>Корзина пуста</S.CartIsEmpty>
        ) : (
          <S.CartContainer>
            <S.CartProductsContainer>
              {cartProducts.map((item, i) => (
                <S.ProductItem key={i}>
                  <img
                    src={`${window.location.origin}/assets/img/products/${item.imgUrl}`}
                    alt=""
                  />
                  <p className="title">{item.title}</p>
                  <div className="price-count__block">
                    <S.CountContainer>
                      <div
                        className="minus"
                        onClick={() => dispatch(removeProduct(item.id))}
                      >
                        -
                      </div>
                      <p>
                        {item.count}
                      </p>
                      <div
                        className="plus"
                        onClick={() => dispatch(addProduct(item))}
                      >
                        +
                      </div>
                    </S.CountContainer>
                    <S.PriceContainer>
                      {item.sale && <C.SalePrice>{item.prices[0]}</C.SalePrice>}
                      <C.MainPrice className="price">
                        {item.sale ? item.prices[1] : item.prices[0]}
                      </C.MainPrice>
                    </S.PriceContainer>
                  </div>
                  <AiOutlineClose className="remove" />
                </S.ProductItem>
              ))}
            </S.CartProductsContainer>
            <S.OrderInfoContainer></S.OrderInfoContainer>
          </S.CartContainer>
        )}
      </C.Wrapper>
    </S.Cart>
  );
};

export default Cart;
