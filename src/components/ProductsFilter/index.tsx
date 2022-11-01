import React from "react";
import { config, TCategories } from "../../configs/config";
import { products } from "../../configs/products";
import { TActiveCategoryFilter } from "../../interfaces/components";
import { setActiveCategory, setPriceRange } from "../../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Button from "../UI/Button";

import * as S from "./styles";

const ProductsFilter: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const condition = /^[0-9]+$/;

  const [minMaxPrice, setMinMaxPrice] = React.useState<
    [number | "", number | ""]
  >(filter.priceRange);

  const [category, setCategory] = React.useState<TActiveCategoryFilter>(
    filter.activeCategory
  );

  React.useEffect(() => {}, [minMaxPrice]); //eslint-disable-line

  function handleMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    if (condition.test(e.target.value)) {
      setMinMaxPrice([+e.target.value, minMaxPrice[1]]);
    } else if (e.target.value === "")
      setMinMaxPrice([e.target.value, minMaxPrice[1]]);
  }

  function handleMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    if (condition.test(e.target.value)) {
      setMinMaxPrice([minMaxPrice[0], +e.target.value]);
    } else if (e.target.value === "")
      setMinMaxPrice([minMaxPrice[0], e.target.value]);
  }

  function handleSubmitFilter() {
    dispatch(setPriceRange(minMaxPrice));
    dispatch(setActiveCategory(category));
  }

  return (
    <S.ProductsFilter>
      <S.FilterBlock>
        <header>Цена</header>
        <div className="prices-container">
          <S.PriceInput
            onChange={handleMinPrice}
            value={minMaxPrice[0]}
            placeholder="От"
          />
          <S.PriceInput
            onChange={handleMaxPrice}
            value={minMaxPrice[1]}
            placeholder="До"
          />
        </div>
      </S.FilterBlock>
      <S.FilterBlock>
        <header>Категория</header>
        <S.Categories>
          <li
            className={category === "all" ? "active" : undefined}
            onClick={() => setCategory("all")}
          >
            Все
          </li>
          {config.categories.map((item, i) => (
            <li
              key={i}
              className={
                category === item.name ? "active" : undefined
              }
              onClick={() => setCategory(item.name as TCategories)}
            >
              {item.title}
            </li>
          ))}
        </S.Categories>
      </S.FilterBlock>
      <Button handleCLick={handleSubmitFilter}>Применить</Button>
    </S.ProductsFilter>
  );
};

export default ProductsFilter;
