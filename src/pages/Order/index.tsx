import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import {
  DeliveryType,
  ICustomerForm,
  IDeliveryInfo,
} from "../../interfaces/components";
import OrderDeliveryInfo from "../../components/OrderDeliveryInfo";
import OrderCustomerInfo from "../../components/OrderCustomerInfo";
import OrderInfo from "../../components/OrderInfo";

const Order: React.FC = () => {
  const [customerForm, setCustomerForm] = React.useState<ICustomerForm>({
    lastName: "",
    firstName: "",
    middleName: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [deliveryInfo, setDeliveryInfo] = React.useState<IDeliveryInfo>({
    city: "",
    street: "",
    streetNumber: "",
    flatNumber: "",
  });

  const [activeType, setActiveType] = React.useState<DeliveryType>("delivery");

  return (
    <S.Order>
      <C.Wrapper>
        <C.Title>Оформление заказа</C.Title>
        <S.OrderContainer>
          <OrderCustomerInfo
            customerForm={customerForm}
            setCustomerForm={setCustomerForm}
          />
          <OrderInfo />
          <OrderDeliveryInfo
            activeType={activeType}
            setActiveType={setActiveType}
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
        </S.OrderContainer>
      </C.Wrapper>
    </S.Order>
  );
};

export default Order;
