import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";
import { config } from "../../configs/config";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { setActiveCategory } from "../../redux/filterSlice";

const MiniCategories: React.FC = () => {
  const { categories } = config;

  const dispatch = useAppDispatch();

  return (
    <S.MiniCategories>
      <C.Wrapper className=".wrapper">
        <S.TopSide>
          <S.Title>Каталог</S.Title>
          <Link to="/categories">Смотреть все</Link>
        </S.TopSide>
        <S.MiniCategoriesItems>
          {categories.map(
            (item, i) =>
              i < 6 && (
                <C.CategoryItem
                  to={`/catalog`}
                  key={i}
                  className={i < 2 ? "big" : undefined}
                  onClick={() => dispatch(setActiveCategory(item.name))}
                >
                  <h2>{item.title}</h2>
                  <img src={`./assets/img/categories/${item.img}`} alt="" />
                  <C.Shadow />
                </C.CategoryItem>
              )
          )}
        </S.MiniCategoriesItems>
      </C.Wrapper>
    </S.MiniCategories>
  );
};

export default MiniCategories;
