import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { OrderCustomerInfoProps } from "../../interfaces/components";

const OrderCustomerInfo: React.FC<OrderCustomerInfoProps> = ({customerForm, setCustomerForm}) => {
  return (
    <C.OrderSection>
      <header>Покупатель</header>
      <S.CustomerInfo>
        <div className="content">
          <C.InputField gridColumn="span 2">
            Фамилия
            <C.Input
              required
              type="text"
              width="100%"
              placeholder="Петров"
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  lastName: e.target.value,
                })
              }
            />
          </C.InputField>
          <C.InputField gridColumn="span 2">
            Имя
            <C.Input
              required
              type="text"
              width="100%"
              placeholder="Пётр"
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  firstName: e.target.value,
                })
              }
            />
          </C.InputField>
          <C.InputField gridColumn="span 2">
            Отчество
            <C.Input
              required
              type="text"
              width="100%"
              placeholder="Петрович"
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  middleName: e.target.value,
                })
              }
            />
          </C.InputField>
          <C.InputField gridColumn="span 3">
            Номер
            <C.Input
              required
              type="text"
              width="100%"
              placeholder="+7900000000"
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  middleName: e.target.value,
                })
              }
            />
          </C.InputField>

          <C.InputField gridColumn="span 3">
            Email
            <C.Input
              required
              type="email"
              width="100%"
              placeholder="example@mail.ru"
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  email: e.target.value,
                })
              }
            />
          </C.InputField>
          <C.InputField gridColumn="span 6">
            Комментарий к заказу
            <textarea
              placeholder="В свободной форме"
              name=""
              id=""
              onChange={(e) =>
                setCustomerForm({
                  ...customerForm,
                  comment: e.target.value,
                })
              }
            ></textarea>
          </C.InputField>
        </div>
      </S.CustomerInfo>
    </C.OrderSection>
  );
};

export default OrderCustomerInfo;
