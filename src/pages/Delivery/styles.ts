import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export const Delivery = styled.div``;

export const DeliveryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 20px;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const Caption = styled.p`
  padding: 30px 0;
  border-top: 1px solid ${({theme}) => theme.colors.primary};
  border-bottom: 1px solid ${({theme}) => theme.colors.primary};
`;
