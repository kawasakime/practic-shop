import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import Search from "../UI/Search";
import { config } from "../../configs/config";
import CartButton from "../UI/CartButton";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = (props) => {
  return (
    <S.Header>
      <C.Wrapper>
        <S.Container>
          <S.Block>
            <img src="./assets/img/logo.png" alt="" />
            <Search />
            <S.Information>
              {config.information.email}
              <br />
              {config.information.workTime}
            </S.Information>
          </S.Block>
          <CartButton>Корзина</CartButton>
        </S.Container>
        <S.Container>
          <S.Navigation>
            {config.navigation.map((item, i) => (
              <li key={i}>
                <Link to={item.route}>{item.title}</Link>
              </li>
            ))}
          </S.Navigation>
          <S.Contacts>
            {config.information.phone}
          </S.Contacts>
        </S.Container>
      </C.Wrapper>
    </S.Header>
  );
};

export default Header;
