import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { OrderDeliveryInfoProps } from "../../interfaces/components";
import { config } from "../../configs/config";

const OrderDeliveryInfo: React.FC<OrderDeliveryInfoProps> = ({
  activeType,
  setActiveType,
  deliveryInfo,
  setDeliveryInfo,
}) => {
  return (
    <C.OrderSection>
      <header>Доставка</header>
      <S.DeliveryInfo>
        <div className="content">
          <S.selectDeliveryContainer>
            <S.SelectDeliveryBtn
              className={activeType === "delivery" ? "active" : undefined}
              onClick={() => setActiveType("delivery")}
            >
              <img
                src={`${window.location.origin}/assets/img/delivery/delivery.png`}
                alt=""
              />
              <div className="info-container">
                <p>Доставка</p>
                <span>
                  Стоимость доставки по всей России составляет{" "}
                  {config.deliveryCost} рублей
                </span>
              </div>
            </S.SelectDeliveryBtn>
            <S.SelectDeliveryBtn
              className={activeType === "pickup" ? "active" : undefined}
              onClick={() => setActiveType("pickup")}
            >
              <img
                src={`${window.location.origin}/assets/img/delivery/pickup.png`}
                alt=""
              />
              <div className="info-container">
                <p>Самовывоз</p>
                <span>
                  Вы можете бесплатно забрать свой заказ со склада по адресу{" "}
                  {config.information.address}
                </span>
              </div>
            </S.SelectDeliveryBtn>
          </S.selectDeliveryContainer>
          {activeType === "delivery" && (
            <S.DeliveryForm>
              <C.InputField gridColumn="span 1">
                Город
                <C.Input
                  required
                  type="text"
                  width="100%"
                  placeholder="Ростов-на-Дону"
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      city: e.target.value,
                    })
                  }
                />
              </C.InputField>
              <C.InputField gridColumn="span 1">
                Улица
                <C.Input
                  required
                  type="text"
                  width="100%"
                  placeholder="пр. Шолохова"
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      street: e.target.value,
                    })
                  }
                />
              </C.InputField>
              <C.InputField gridColumn="span 1">
                Номер
                <C.Input
                  required
                  type="text"
                  width="100%"
                  placeholder="115"
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      streetNumber: e.target.value,
                    })
                  }
                />
              </C.InputField>
              <C.InputField gridColumn="span 1">
                Квартира
                <C.Input
                  required
                  type="text"
                  width="100%"
                  placeholder="10"
                  onChange={(e) =>
                    setDeliveryInfo({
                      ...deliveryInfo,
                      flatNumber: e.target.value,
                    })
                  }
                />
              </C.InputField>
            </S.DeliveryForm>
          )}
        </div>
      </S.DeliveryInfo>
    </C.OrderSection>
  );
};

export default OrderDeliveryInfo;
