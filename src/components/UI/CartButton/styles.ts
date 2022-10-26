import { Link } from "react-router-dom";
import styled from "styled-components";

export const CartButton = styled(Link)`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.duration};
  width: 146px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .left-side {
    margin-left: 5px;
    position: relative;

    .cart-icon {
      fill: ${({ theme }) => theme.colors.primary};
      transition: ${({ theme }) => theme.duration};
      font-size: 20px;
      display: grid;
      place-items: center;
    }

    .products-count {
      position: absolute;
      transition: ${({ theme }) => theme.duration};
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      height: 13px;
      width: 13px;
      border-radius: 50%;
      right: -6px;
      top: -6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};

    .left-side {
      .cart-icon {
        fill: ${({ theme }) => theme.colors.secondary};
      }
      .products-count {
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
