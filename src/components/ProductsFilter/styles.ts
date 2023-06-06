import styled from "styled-components";

export const GeneralContainer = styled.div``;

export const ProductsFilter = styled.div`
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary}30;
  border-radius: 15px;
  width: 280px;
  padding: 30px 15px;
  height: fit-content;
  margin-top: 20px;
`;

export const FilterBlock = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;
  padding-bottom: 30px;
  margin-bottom: 15px;

  header {
    cursor: pointer;
    margin-bottom: 22px;
    /* padding: 10px 5px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;

    svg {
      color: ${({ theme }) => theme.colors.primary};
      display: grid;
      place-items: center;
      height: 15px;
      width: auto;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  &.closed {
    padding-bottom: 0;

    header {
      margin-bottom: 0;
      padding-bottom: 5px;
    }

    .content {
      display: none;
    }
  }
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
    transition: background ${({ theme }) => theme.duration};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}15;
    }

    &.active {
      background: ${({ theme }) => theme.colors.teriary}50;
      pointer-events: none;
    }
  }
`;

export const FilterGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    margin-right: 10px;
    margin-bottom: 5px;
  }
`;

export const FilterGroupItem = styled.label`
  display: flex;
  flex-direction: row-reverse;

  input {
    margin-right: 5px;
  }
`;
