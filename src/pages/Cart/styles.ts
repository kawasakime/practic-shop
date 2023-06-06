import styled from "styled-components";

export const Cart = styled.div`
  padding: 30px 0 130px 0;
  min-height: 400px;

  .title {
    display: flex;
    align-items: center;
  }
`;

export const CartIsEmpty = styled.h3`
  text-align: center;
  margin-top: 120px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primary}50;
`;

export const ProductsCount = styled.div`
  display: grid;
  place-items: center;
  height: 30px;
  width: 30px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-left: 10px;
`;

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  margin-top: 30px;
`;

export const CartProductsContainer = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  width: 100%;
  padding: 25px 20px;
  height: fit-content;
`;


