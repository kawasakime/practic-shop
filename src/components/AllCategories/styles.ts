import styled from "styled-components";

export const AllCategories = styled.div`
  padding: 50px 0 100px 0;

  h2 {
    font-weight: ${({theme}) => theme.fontWeight.semiBold};
    margin-bottom: 50px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 300px;
  gap: 20px;
`