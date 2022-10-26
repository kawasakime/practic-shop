import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import Search from "../UI/Search";
import { config } from "../../configs/config";
import CartButton from "../UI/CartButton";
import { Link, useLocation } from "react-router-dom";

import Social from "../Social";

const Header: React.FunctionComponent = () => {
  const location = useLocation().pathname;
  
  return (
    <S.Header>
      <C.Wrapper>
        <S.Container>
          <S.Block>
            <img src={window.location.origin + "/assets/img/logo.png"} alt="" />
            {(location === "/" || location === "/catalog") && <Search />}
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
            <Social />
          </S.Contacts>
        </S.Container>
      </C.Wrapper>
    </S.Header>
  );
};

export default Header;
