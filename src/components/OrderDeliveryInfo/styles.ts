import styled from "styled-components";

export const DeliveryInfo = styled.div``;

export const selectDeliveryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px;
  column-gap: 30px;
`;

export const SelectDeliveryBtn = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary}25;
  border-radius: 2px;
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.duration};

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:not(.active):hover {
    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.primary}40;
  }

  img {
    max-height: 80px;
    margin-right: 20px;
  }

  .info-container {
    p {
      font-size: 15px;
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin-bottom: 7px;
    }
    span {
      font-size: 13px;
      color: ${({ theme }) => theme.colors.primary}50;
    }
  }
`;

export const DeliveryForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  gap: 30px;
  margin-top: 30px;
`;
