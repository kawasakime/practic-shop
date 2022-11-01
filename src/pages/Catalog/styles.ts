import styled from "styled-components";

export const Catalog = styled.div`
  padding: 30px 0 90px 0;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 20px;
  grid-auto-rows: minmax(390px, 410px);
  margin-left: 35px;
`;

export const ProductItem = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;

  padding: 20px;

  img {
    width: 100%;
  }

  p {
    margin: 20px 0;
    font-size: 13px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
