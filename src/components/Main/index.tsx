import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

const Main: React.FunctionComponent = () => {
  return (
    <S.Main>
      <img src="./assets/img/bg.png" alt="" />
      <C.Wrapper className="wrapper">123</C.Wrapper>
    </S.Main>
  );
};

export default Main;
