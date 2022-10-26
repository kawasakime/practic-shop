import styled from "styled-components";

export const Cart = styled.div`
  padding: 30px 130px;
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
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 25px 20px;
`;

export const OrderInfoContainer = styled.div``;

export const ProductItem = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}50;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    /* margin-right: 20px; */
  }

  .title {
    font-size: 14px;
    margin: 0 15px;
  }

  .price-count__block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    /* margin: 0 20px; */
    height: 100%;
  }

  .remove {
    height: 25px;
    width: 25px;
    fill: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    opacity: 0.5;
    transition: opacity ${({ theme }) => theme.duration};

    margin: 0 30px;

    &:hover {
      opacity: 1;
    }
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 100px;

  .plus,
  .minus {
    display: grid;
    place-items: center;
    min-width: 30px;
    min-height: 30px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    cursor: pointer;
    transition: ${({theme}) => theme.duration};
     
    &:hover {
      transform: scale(1.08);
    }
  }

  p {
    padding: 0 15px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;

  .price {
    margin-left: 20px;
  }
`;
