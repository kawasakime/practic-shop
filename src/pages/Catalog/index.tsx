import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { AiOutlineShoppingCart } from "react-icons/ai";

import ProductsFilter from "../../components/ProductsFilter";
import { products } from "../../configs/products";
import AddToCartBtn from "../../components/UI/AddToCartBtn";
import { useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";

const Catalog: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const navigate = useNavigate();

  const btnRef = React.useRef(null);

  function selectPrice(salePrice: number | undefined, price: number) {
    return !!salePrice ? salePrice : price;
  }

  function handleItemClick(
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
    id: number
  ) {
    console.log(e.target)
    if (e.target !== btnRef.current) navigate(`/catalog/${id}`);
  }

  return (
    <S.Catalog>
      <C.Wrapper>
        <C.Title>Каталог</C.Title>
        <S.Container>
          <ProductsFilter />
          <S.ProductsList>
            {products
              .filter((item) =>
                filter.activeCategory === "all"
                  ? item
                  : item.category === filter.activeCategory
              )
              .filter(
                (item) =>
                  selectPrice(item.salePrice, item.price) >=
                    filter.priceRange[0] &&
                  selectPrice(item.salePrice, item.price) <=
                    filter.priceRange[1]
              )
              .map((item, i) => (
                //
                <S.ProductItem
                  key={item.id}
                  onClick={(e) => handleItemClick(e, item.id)}
                >
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
                      ref={btnRef}
                      item={{
                        id: item.id,
                        imgUrl: `${item.imgs.folder}/${item.imgs.files[0]}`,
                        title: item.title,
                        price: item.price,
                        salePrice: !!item.salePrice ? item.salePrice : 0,
                        count: 1,
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
