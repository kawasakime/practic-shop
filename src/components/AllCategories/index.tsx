import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";

const AllCategories: React.FC = () => {
  const { categories } = config;

  return (
    <S.AllCategories>
      <C.Wrapper>
        <h2>Все категории</h2>
        <S.Container>
          {categories.map((item, i) => (
            <C.CategoryItem to={`/${item.name}`} key={i}>
              <h2>{item.title}</h2>
              <img src={`./assets/img/categories/${item.img}`} alt="" />
              <C.Shadow />
            </C.CategoryItem>
          ))}
        </S.Container>
      </C.Wrapper>
    </S.AllCategories>
  );
};

export default AllCategories;
