import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";
import Button from "../UI/Button";

const Main: React.FunctionComponent = () => {
  const { main } = config;

  return (
    <S.Main>
      <img src="./assets/img/bg.png" alt="" />
      <C.Wrapper className="wrapper">
        <S.Title>{main.title}</S.Title>
        <S.Descr>{main.descr}</S.Descr>
        <Button>{main.btnText}</Button>
      </C.Wrapper>
    </S.Main>
  );
};

export default Main;
