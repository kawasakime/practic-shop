import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
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
  transition: opacity ${({ theme }) => theme.duration};

  &:hover {
    opacity: 0.7;
  }

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
  white-space: nowrap;
`;

export const MainPrice = styled.h3`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: nowrap;
  margin-top: 10px;
`;

export const Input = styled.input<{ width: string }>`
  height: 40px;
  width: ${({ width }) => width};
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.primary}10;
  border: none;
  padding: 0 15px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OrderBtn = styled(Link)`
  display: grid;
  place-items: center;
  border: none;
  background: ${({ theme }) => theme.colors.teriary};
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.duration};

  &:hover {
    opacity: 0.7;
  }
`;

export const InputField = styled.label<{ gridColumn: string }>`
  font-size: 15px;
  grid-column: ${({ gridColumn }) => gridColumn};

  input,
  textarea {
    margin-top: 5px;
  }

  textarea {
    display: block;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.primary}10;
    border: none;
    width: 100%;
    min-height: 120px;
    resize: none;
    padding: 15px;
  }
`;

export const OrderSection = styled.div`
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.primary}25;
  border-radius: 15px;
  height: fit-content;

  header {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}25;
    padding: 16px 27px;
    font-size: 15px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  .content {
    padding: 30px;
  }
`;
