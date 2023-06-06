import styled from "styled-components";

export const CartItem = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}50;
  display: flex;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  img {
    height: 100%;
  }

  .title {
    font-size: 14px;
    margin: 0 15px;
    max-width: 490px;
  }

  .price-count__block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
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
    transition: ${({ theme }) => theme.duration};

    &:hover {
      transform: scale(1.08);
    }

    &.disable {
      pointer-events: none;
      color: ${({ theme }) => theme.colors.primary}50;
    }
  }

  p {
    padding: 0 15px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 130px;

  .price {
    margin-left: 20px;
  }
`;