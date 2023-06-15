import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { payment } from "../../configs/payment";

interface IPaymentProps {}

const Payment: React.FunctionComponent<IPaymentProps> = (props) => {
  const {
    title,
    description,
    bankCardsCountries,
    bankCardsText,
    bankCardsTitle,
    electronicMoney,
    electronicMoneyTitle,
  } = payment;

  return (
    <S.Payment>
      <C.Wrapper>
        <S.PaymentBlock>
          <h1>{title}</h1>
          <p>{description}</p>
          <h1>{bankCardsTitle}</h1>
          <p>{bankCardsText}</p>
          <ul>
            {bankCardsCountries.map((country, index) => (
              <li key={index}>{country}</li>
            ))}
          </ul>
        </S.PaymentBlock>
        <S.PaymentBlock>
          <h1>{electronicMoneyTitle}</h1>
          <ul>
            {electronicMoney.map((type) => (
              <li>{type}</li>
            ))}
          </ul>
        </S.PaymentBlock>
      </C.Wrapper>
    </S.Payment>
  );
};

export default Payment;
