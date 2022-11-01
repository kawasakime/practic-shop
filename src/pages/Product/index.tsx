import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../configs/products";
import NotFound from "../NotFound";

import * as S from "./styles";
import * as C from "../../styles/components";
import AddToCartBtn from "../../components/UI/AddToCartBtn";

import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCloseCircle,
} from "react-icons/ai";

const Product = () => {
  const { productId } = useParams();

  const currentProduct = products.find((item) => String(item.id) === productId);
  const imgPath = `${window.location.origin}/assets/img/products/${currentProduct?.imgs.folder}`;

  const [activeImg, setActiveImg] = React.useState<string | undefined>(
    currentProduct?.imgs.files[0]
  );

  const [fullImgIsOpen, setFullImgIsOpen] = React.useState<boolean>(false);
  const [topPosition, setTopPosition] = React.useState<number>(0);

  function toggleFullScreenImg() {
    fullImgIsOpen
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
    setFullImgIsOpen((prev) => !prev);
  }

  if (!currentProduct) return <NotFound />;

  return (
    <S.Product>
      <C.Wrapper className="wrapper">
        <S.ImagesContainer>
          <S.SmallImages>
            <S.SmallImagesContainer top={topPosition}>
              {currentProduct.imgs.files.map((file, i) => (
                <S.SmallImg
                  className={file === activeImg ? "active" : undefined}
                  key={i}
                  img={`${imgPath}/${file}`}
                  onClick={() => setActiveImg(file)}
                ></S.SmallImg>
              ))}
            </S.SmallImagesContainer>
          </S.SmallImages>
          <S.BigImg
            onClick={() => toggleFullScreenImg()}
            img={`${imgPath}/${activeImg}`}
          ></S.BigImg>
          {currentProduct.imgs.files.length > 3 && (
            <S.SlidersBtns>
              <AiFillCaretDown
                className={
                  topPosition === (currentProduct.imgs.files.length - 3) * -150
                    ? "disable"
                    : undefined
                }
                onClick={() => {
                  setTopPosition(topPosition - 150);
                }}
              />
              <AiFillCaretUp
                className={topPosition === 0 ? "disable" : undefined}
                onClick={() => setTopPosition(topPosition + 150)}
              />
            </S.SlidersBtns>
          )}
        </S.ImagesContainer>
        <S.InfoContainer>
          <h3>{currentProduct.title}</h3>
          <p>{currentProduct.description}</p>
          <ul>
            {currentProduct.params.map((item, i) => (
              <li key={i}>
                <span>{item.key}</span>: {item.value}
              </li>
            ))}
          </ul>
          <div className="pricesContainer">
            {!!currentProduct.salePrice && (
              <span className="salePrice">{currentProduct.price} ₽</span>
            )}
            <span className="price">
              {!!currentProduct.salePrice
                ? currentProduct.salePrice
                : currentProduct.price}{" "}
              ₽
            </span>
          </div>
          <AddToCartBtn
            width="240px"
            height="50px"
            item={{
              id: currentProduct.id,
              imgUrl: `${currentProduct.imgs.folder}/${currentProduct.imgs.files[0]}`,
              title: currentProduct.title,
              price: currentProduct.price,
              salePrice: !!currentProduct.salePrice
                ? currentProduct.salePrice
                : 0,
              count: 1,
            }}
          >
            В корзину
          </AddToCartBtn>
        </S.InfoContainer>
        {fullImgIsOpen && (
          <S.FullScreenImg>
            <div className="bg" onClick={() => toggleFullScreenImg()}></div>
            <div className="img-container">
              <img src={`${imgPath}/${activeImg}`} alt="" />
              <AiFillCloseCircle
                onClick={() => toggleFullScreenImg()}
                className="close"
              />
            </div>
          </S.FullScreenImg>
        )}
      </C.Wrapper>
    </S.Product>
  );
};

export default Product;
