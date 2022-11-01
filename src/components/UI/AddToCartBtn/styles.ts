import styled from "styled-components";

export const AddToCartBtn = styled.button<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #bc9f75;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity ${({ theme }) => theme.duration};

  &:hover {
    opacity: 0.7;
  }

  svg {
    pointer-events: none;
    margin-right: 5px;
    height: 17px;
    width: 17px;
    fill: ${({ theme }) => theme.colors.secondary};
  }

  &.active {
    pointer-events: none;
  }
`;
