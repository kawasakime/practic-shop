import styled from "styled-components";

export const Search = styled.div`
  position: relative;
  margin-left: 60px;

  .icon {
    position: absolute;
    right: 10px;
    font-size: 18px;
    top: 50%;
    transform: translateY(-50%);
    fill: ${({theme}) => theme.colors.primary};
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.primary}4d;
  outline: none;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 35px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary}6d;
  }
`;


