import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 30px;

  li {
    margin: 10px;
    color: ${({ theme }) => theme.colors.primary}70;
    cursor: pointer;

    &.arrow {
      display: grid;
      place-items: center;
    }

    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.disable {
      pointer-events: none;
      svg {
        fill: ${({ theme }) => theme.colors.primary}40; 
      }
    }
  }
`;
