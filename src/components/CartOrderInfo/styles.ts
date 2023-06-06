import styled from "styled-components";

export const OrderInfoContainer = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  width: 100%;
  padding: 30px 20px;
  margin-left: 30px;

  hr {
    margin: 24px 0;
    color: ${({ theme }) => theme.colors.primary}20;
  }
`;

export const TotalInfo = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 11px;
    span {
      font-size: 20px;
    }
  }
`;

export const PromoContainer = styled.div`
  display: flex;
`;

export const PromoBtn = styled.button`
  min-width: 40px;
  min-height: 40px;
  max-height: 40px;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
  border: none;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.duration};

  &:hover {
    opacity: 0.7;
  }

  svg {
    fill: ${({ theme }) => theme.colors.secondary};
    width: 50%;
    height: auto;
  }
`;

export const TotalPrice = styled.h3`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 70px;
  margin-bottom: 14px;
`;