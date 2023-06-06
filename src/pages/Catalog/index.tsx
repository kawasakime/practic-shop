import React from "react";

import * as S from "./styles";
import * as C from "../../styles/components";

import ProductsFilter from "../../components/ProductsFilter";
import { products } from "../../configs/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterProducts } from "../../utils/filters";
import { resetValues } from "../../redux/filterSlice";
import Pagination from "../../components/Pagination";
import CatalogProductItem from "../../components/CatalogProductItem";
import { IProduct } from "../../interfaces/components";

const Catalog: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const filteredProducts = filterProducts(products, filter);
  const [activePage, setActivePage] = React.useState(0);

  const productsOnPage = 9;

  // 60 товаров, активная страница 3 // itemsOnPage * ( activePage + 1 ),

  function paginationFilter(products: IProduct[]) {
    return products.splice(productsOnPage * activePage, productsOnPage);
  }

  React.useEffect(() => {
    dispatch(resetValues());
  }, []);

  return (
    <S.Catalog>
      <C.Wrapper>
        <C.Title>Каталог</C.Title>
        <S.Container>
          <ProductsFilter />
          <S.ProductsListContainer>
            <S.ProductsList>
              {paginationFilter(filteredProducts).map((item) => (
                <CatalogProductItem key={item.id} item={item} />
              ))}
            </S.ProductsList>
            <Pagination
              productsCount={filteredProducts.length}
              activePage={activePage}
              setActivePage={setActivePage}
              productsOnPage={productsOnPage}
            />
          </S.ProductsListContainer>
        </S.Container>
      </C.Wrapper>
    </S.Catalog>
  );
};

export default Catalog;
