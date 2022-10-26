import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  white-space: pre-wrap;
`;

export const Descr = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary}7d;
  margin: 12px 0 45px 0;
`;
