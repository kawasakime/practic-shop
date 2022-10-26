import styled from "styled-components";

export const AddToCartBtn = styled.button`
  width: 120px;
  height: 33px;
  background: #bc9f75;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${({ theme }) => theme.duration};

  svg {
    margin-right: 5px;
    height: 17px;
    width: 17px;
    fill: ${({ theme }) => theme.colors.secondary};
  }

  &.active {
    pointer-events: none;
  }

  &:hover {
    opacity: 0.7;
  }
`;