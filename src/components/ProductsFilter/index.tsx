import React from "react";
import { config } from "../../configs/config";
import { products } from "../../configs/products";
import { IFilterGroupParam, IProduct } from "../../interfaces/components";
import { setActiveCategory, setParams, setPriceRange } from "../../redux/filterSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCurrentParams, productsCategoryFilter } from "../../utils/filters";
import FIlterParamCheckbox from "../FilterParamCheckbox";
import MinMaxPrice from "../MinMaxPrice";
import Search from "../UI/Search";
import FilterBlock from "./FilterBLock";

import * as S from "./styles";

const ProductsFilter: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(setParams([]));
  }, [filter.activeCategory]); //eslint-disable-line

  function getFilterGroups(products: IProduct[]) {
    let groups: IFilterGroupParam[] = [];
    // помещаем все параметры в один массив
    const paramsList = products.map((item) => item.params).flat();
    // заполнение groups списком группами фильтрации
    groups = getCurrentParams(paramsList, groups);
    // удаление повторяющихся значений
    groups.map((item) => (item.values = Array.from(new Set(item.values))));
    return groups;
  }

  return (
    <S.GeneralContainer>
      <Search marginLeft="0" width="100%"/>
      <S.ProductsFilter>
        <FilterBlock title="Цена">
          <MinMaxPrice
            priceRange={filter.priceRange}
            setPriceRange={(range) => dispatch(setPriceRange(range))}
          />
        </FilterBlock>
        <FilterBlock title="Категория">
          <S.Categories>
            <li
              className={filter.activeCategory === "all" ? "active" : undefined}
              onClick={() => dispatch(setActiveCategory("all"))}>
              Все
            </li>
            {config.categories.map((item, i) => (
              <li
                key={i}
                className={filter.activeCategory === item.name ? "active" : undefined}
                onClick={() => dispatch(setActiveCategory(item.name))}>
                {item.title}
              </li>
            ))}
          </S.Categories>
        </FilterBlock>

        {getFilterGroups(productsCategoryFilter(products, filter.activeCategory)).map((group, i) =>
          group.values.length > 1 ? (
            <FilterBlock key={i} title={group.key}>
              <S.FilterGroup>
                {group.values.map((groupItem, i) => (
                  <li key={i}>
                    <S.FilterGroupItem>
                      {groupItem}
                      <FIlterParamCheckbox
                        setParams={(params) => dispatch(setParams(params))}
                        value={groupItem}
                        name={group.key}
                        params={filter.params}
                        activeCategory={filter.activeCategory}
                      />
                    </S.FilterGroupItem>
                  </li>
                ))}
              </S.FilterGroup>
            </FilterBlock>
          ) : null
        )}
      </S.ProductsFilter>
    </S.GeneralContainer>
  );
};

export default ProductsFilter;
