import * as React from "react";
import { IProduct } from "../../interfaces/components";

import * as S from "./styles";
import * as C from "../../styles/components";
import AddToCartBtn from "../UI/AddToCartBtn";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ICatalogProductItemProps {
  item: IProduct;
}

const CatalogProductItem: React.FunctionComponent<ICatalogProductItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const btnRef = React.useRef(null);

  function handleItemClick(e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, id: number) {
    if (e.target !== btnRef.current) navigate(`/catalog/${id}`);
  }

  return (
    <S.ProductItem
      key={item.id}
      onClick={(e) => handleItemClick(e, item.id)}
      bgUrl={`${window.location.origin}/assets/img/products/${item.imgs.folder}/${item.imgs.files[0]}`}>
      <div className="img-container"></div>
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
          }}>
          <AiOutlineShoppingCart /> В корзину
        </AddToCartBtn>
      </div>
    </S.ProductItem>
  );
};

export default CatalogProductItem;
