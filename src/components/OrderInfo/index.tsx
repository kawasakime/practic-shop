import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { useAppSelector } from "../../redux/hooks";
import { getTotalPrice, getTotalSale, resizeString } from "../../utils/cart";
import { config } from "../../configs/config";

const OrderInfo: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <C.OrderSection>
      <header>Ваш заказ</header>
      <S.OrderInfo>
        <div className="content">
          {products.map((item) => (
            <S.OrderInfoItem key={item.id}>
              <p className="title">{`${resizeString(item.title)}...`}</p>
              {!!item.salePrice && <p className="sale-price">{item.price} ₽</p>}
              <p className="price">
                {!!item.salePrice ? item.salePrice : item.price} ₽
              </p>
              <p className="count">{`${item.count} шт`}</p>
            </S.OrderInfoItem>
          ))}
          <S.DeliveryCost>
            Стоимость доставки
            <span>{config.deliveryCost} ₽</span>
          </S.DeliveryCost>
          <S.TotalCost>
            Итого к оплате:
            <span>
              {getTotalPrice(products) -
                getTotalSale(products) +
                config.deliveryCost}{" "}
              ₽
            </span>
          </S.TotalCost>
          <C.OrderBtn to="/">Перейти к оплате</C.OrderBtn>
        </div>
      </S.OrderInfo>
    </C.OrderSection>
  );
};

export default OrderInfo;
