import styled from "styled-components";

export const MiniCategories = styled.div`
  padding: 120px 0 130px 0;
`;

export const TopSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 60px;

  a {
    color: ${({ theme }) => theme.colors.primary}50;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const MiniCategoriesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 450px 270px;
  gap: 20px;
`;
