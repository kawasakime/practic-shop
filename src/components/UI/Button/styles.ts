import styled, { css } from "styled-components";

export const Button = styled.button<{ isFill: boolean; primary: boolean }>`
  width: 200px;
  height: 50px;
  background: ${({ isFill, primary, theme }) => {
    if (isFill) {
      return primary ? theme.colors.primary : theme.colors.teriary;
    } else return "none";
  }};
  border-radius: 25px;
  border: 1px solid
    ${({ primary, theme }) =>
      primary ? theme.colors.primary : theme.colors.teriary};
  color: ${({ primary, theme }) =>
    !primary ? theme.colors.primary : theme.colors.secondary};
  font-size: 15px;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};

  &:hover {
    ${({ isFill, theme, primary }) =>
      !isFill
        ? css`
            background: ${primary
              ? theme.colors.primary
              : theme.colors.teriary};
            color: ${theme.colors.secondary};
          `
        : css`
            opacity: 0.7;
          `}
  }
`;
