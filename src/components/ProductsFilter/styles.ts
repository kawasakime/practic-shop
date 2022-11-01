import styled from "styled-components";

export const ProductsFilter = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 280px;
  padding: 30px;
`;

export const FilterBlock = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}50;
  padding-bottom: 30px;
  margin-bottom: 30px;

  header {
    margin-bottom: 22px;
  }

  .prices-container {
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceInput = styled.input`
  height: 40px;
  width: 100px;
  border: none;
  background: ${({ theme }) => theme.colors.primary}10;
  border-radius: 5px;
  padding: 0 10px 0 10px;
`;

export const Categories = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 10px;
    border-radius: 5px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.colors.primary}05;
    border: 1px solid ${({ theme }) => theme.colors.primary}50;
    cursor: pointer;
    transition: background ${({theme}) => theme.duration};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}15;
    }

    &.active {
      background: ${({ theme }) => theme.colors.teriary}50;
      pointer-events: none;
    }
  }
`;
