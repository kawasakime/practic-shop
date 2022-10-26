import * as React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { Link } from "react-router-dom";
import Social from "../Social";

const Footer: React.FunctionComponent = () => {
  return (
    <S.Footer>
      <C.Wrapper className="wrapper">
        <img src={window.location.origin + "/assets/img/logo.png"} alt="" />
        <S.Container>
          <h2>Каталог</h2>
          <S.ItemsList>
            <li>
              <Link to={"/catalog"}>Все товары</Link>
            </li>
            {config.categories.map((item, i) => (
              <li key={i}>
                <Link to={`/${item.name}`}>{item.title}</Link>
              </li>
            ))}
          </S.ItemsList>
        </S.Container>
        <S.Container>
          <h2>Информация</h2>
          <S.ItemsList>
            {config.navigation.map(
              (item, i) =>
                item.inFooter && (
                  <li key={i}>
                    <Link to={item.route}>{item.title}</Link>
                  </li>
                )
            )}
          </S.ItemsList>
        </S.Container>
        <S.Container last>
          <h2>{config.information.phone}</h2>
          <Social />
        </S.Container>
      </C.Wrapper>
    </S.Footer>
  );
};

export default Footer;
