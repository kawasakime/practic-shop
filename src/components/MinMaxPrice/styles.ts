import styled from "styled-components";

export const MinMaxPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceInput = styled.input`
  height: 40px;
  width: 48%;
  border: none;
  background: ${({ theme }) => theme.colors.primary}10;
  border-radius: 5px;
  padding: 0 10px 0 10px;
`;
