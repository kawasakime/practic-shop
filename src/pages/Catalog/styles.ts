import styled from "styled-components";

export const Catalog = styled.div`
  position: relative;
  padding: 30px 0 90px 0;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const ProductsListContainer = styled.div`
`

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 280px);
  gap: 20px;
  grid-auto-rows: minmax(390px, 410px);
  margin-left: 35px;
`;
