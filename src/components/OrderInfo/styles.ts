import styled from "styled-components";

export const OrderInfo = styled.div`
  grid-column: 2/3;
  grid-row: span 2;

  .content {
    padding: 20px;
  }
`;

export const OrderInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary}20;

  .title {
    font-size: 13px;
  }

  .price {
    font-size: 15px;
  }

  .sale-price {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.primary}50;
    text-decoration: line-through;
  }

  .count {
    font-size: 13px;
  }
`;

export const DeliveryCost = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin: 14px 0 55px 0;
`;

export const TotalCost = styled.h3`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;