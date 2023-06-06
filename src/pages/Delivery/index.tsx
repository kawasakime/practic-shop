import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { delivery } from "../../configs/delivery";
import { ItemsList } from "../../components/Footer/styles";

interface IDeliveryProps {}

const Delivery: React.FunctionComponent<IDeliveryProps> = (props) => {
  return (
    <S.Delivery>
      <C.Wrapper>
        <S.DeliveryContainer>
          <S.GridRow>
            <S.Caption>Способ доставки</S.Caption>
            <S.Caption>Стоимость</S.Caption>
            <S.Caption>Время</S.Caption>
          </S.GridRow>
          {delivery.map((item, i) => (
            <S.GridRow>
              <p>{item.method}</p>
              <p>{item.cost}</p>
            </S.GridRow>
          ))}
        </S.DeliveryContainer>
      </C.Wrapper>
    </S.Delivery>
  );
};

export default Delivery;
