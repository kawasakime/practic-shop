import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import { config } from "../../configs/config";
import { useAppDispatch } from "../../redux/hooks";
import { setActiveCategory } from "../../redux/filterSlice";

const AllCategories: React.FC = () => {
  const { categories } = config;

  const dispatch = useAppDispatch();

  return (
    <S.AllCategories>
      <C.Wrapper>
        <h2>Все категории</h2>
        <S.Container>
          {categories.map((item, i) => (
            <C.CategoryItem
              to={`/catalog`}
              key={i}
              onClick={() => dispatch(setActiveCategory(item.name))}
            >
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
