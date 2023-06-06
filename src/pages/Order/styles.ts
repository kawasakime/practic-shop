import styled from "styled-components";

export const Order = styled.div`
  padding: 30px 0 90px 0;
`;

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 760px 1fr;
  gap: 30px;
  margin-top: 30px;
`;

export const Content = styled.div<{ padding?: string }>`
  padding: ${({ padding = "30px" }) => padding};
`;

