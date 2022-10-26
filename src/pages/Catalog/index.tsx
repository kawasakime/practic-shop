import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { AiOutlineShoppingCart } from "react-icons/ai";

import ProductsFilter from "../../components/ProductsFilter";
import { products } from "../../configs/products";
import AddToCartBtn from "../../components/UI/AddToCartBtn";

const Catalog: React.FC = () => {
  return (
    <S.Catalog>
      <C.Wrapper>
        <C.Title>Каталог</C.Title>
        <S.Container>
          <ProductsFilter />
          <S.ProductsList>
            {products.map((item, i) => (
              <S.ProductItem key={item.id}>
                <img
                  src={`${window.location.origin}/assets/img/products/${item.imgs.folder}/${item.imgs.files[0]}`}
                  alt=""
                />
                <p>{item.title}</p>
                <div className="bottom">
                  {!!item.salePrice ? (
                    <>
                      <C.MainPrice>{item.salePrice} ₽</C.MainPrice>
                      <C.SalePrice>{item.price} ₽</C.SalePrice>
                    </>
                  ) : (
                    <C.MainPrice>{item.price} ₽</C.MainPrice>
                  )}
                  <AddToCartBtn
                    item={{
                      id: item.id,
                      imgUrl: `${item.imgs.folder}/${item.imgs.files[0]}`,
                      title: item.title,
                      sale: !!item.salePrice,
                      prices: [item.price, item.salePrice],
                    }}
                  >
                    <AiOutlineShoppingCart /> В корзину
                  </AddToCartBtn>
                </div>
              </S.ProductItem>
            ))}
          </S.ProductsList>
        </S.Container>
      </C.Wrapper>
    </S.Catalog>
  );
};

export default Catalog;
