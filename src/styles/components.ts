import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;

export const Social = styled.div<{ marginLeft: string }>`
  margin-left: ${({ marginLeft }) => marginLeft};
`;

export const SocialItem = styled.a`
  cursor: pointer;
  margin: 0 5px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  svg {
    height: 18px;
    width: 18px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const CategoryItem = styled(Link)`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.teriary}1d;
  border-radius: 5%;
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.duration};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 10px 0 ${({ theme }) => theme.colors.primary}50;
  }

  &.big {
    grid-column: span 2;
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-37%);
    max-height: 60%;
    z-index: 2;
  }

  h2 {
    position: relative;
    top: 30px;
    left: 40px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 24px;
  }
`;

export const Shadow = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-37%);
  height: 50%;
  width: 50%;
  min-height: 170px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    ${({ theme }) => theme.colors.primary}1d 0%,
    ${({ theme }) => theme.colors.primary}1d 100%
  );
  filter: blur(50px);
`;

export const NotFoundContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 180px;

  h1 {
    font-size: 120px;
    color: ${({ theme }) => theme.colors.primary}50;
  }

  p {
    max-width: 450px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const SalePrice = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary}50;
  text-decoration: line-through;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const MainPrice = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
