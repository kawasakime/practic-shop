import styled, { css } from "styled-components";

export const Footer = styled.div`
  padding: 60px 0;
  background: ${({ theme }) => theme.colors.primary}05;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-height: 50px;
  }
`;

export const Container = styled.div<{ last?: boolean }>`
  ${({ last = false }) =>
    last &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    `}

  h2 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 16px;
  }
`;

export const ItemsList = styled.ul`
  list-style-type: none;

  li {
    margin-bottom: 10px;
    font-size: 15px;

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
