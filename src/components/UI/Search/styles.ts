import styled from "styled-components";

export const Search = styled.div<{ marginLeft: string }>`
  position: relative;
  margin-left: ${({ marginLeft }) => marginLeft};

  .icon {
    position: absolute;
    right: 10px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({ theme }) => theme.colors.primary};
  }

  .clear-btn {
    fill: ${({ theme }) => theme.colors.primary}50;
    cursor: pointer;
    transition: fill ${({ theme }) => theme.duration};

    &:hover {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Input = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary}4d;
  border: none;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary}30;
  outline: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 35px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary}6d;
  }
`;
