import styled from "styled-components";

export const Product = styled.div`
  position: inherit;
  padding: 40px 0 150px 0;

  .wrapper {
    display: flex;
  }
`;

export const ImagesContainer = styled.div`
  position: relative;
  display: flex;
  margin-right: 35px;
`;

export const SmallImages = styled.div`
  position: relative;
  overflow: hidden;
  width: 130px;
  height: 430px;
  margin-right: 20px;
`;

export const SmallImagesContainer = styled.div<{ top: number }>`
  position: absolute;
  width: 100%;
  top: ${({ top }) => top}px;
  transition: ${({ theme }) => theme.duration};
`;

export const SmallImg = styled.div<{ img: string }>`
  width: 130px;
  height: 130px;
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
  background: url(${({ img }) => img});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: border ${({ theme }) => theme.duration};

  &.active {
    border: 2px solid ${({ theme }) => theme.colors.primary}70;
  }

  &:not(.active):hover {
    border: 1px solid ${({ theme }) => theme.colors.primary}40;
  }
`;

export const BigImg = styled.div<{ img: string }>`
  height: 430px;
  width: 430px;
  background: url(${({ img }) => img});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: 0px 0px 4px 0 ${({ theme }) => theme.colors.primary}50;
  cursor: zoom-in;
`;

export const InfoContainer = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 45px;
  }

  p {
    text-align: justify;
    white-space: pre-line;
  }

  ul {
    margin-top: 24px;
    li {
      margin-bottom: 10px;
      span {
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      }
    }
  }

  .pricesContainer {
    margin: 45px 0 15px 0;
    span {
      font-weight: ${({ theme }) => theme.fontWeight.bold};

      &.salePrice {
        color: ${({ theme }) => theme.colors.primary}50;
        text-decoration: line-through;
        font-weight: 18px;
        margin-right: 10px;
      }

      &.price {
        font-size: 25px;
      }
    }
  }
`;

export const SlidersBtns = styled.div`
  display: flex;
  position: absolute;
  left: 65px;
  bottom: -30px;
  transform: translateX(-50%);

  svg {
    width: 20px;
    height: auto;
    margin: 0 5px;
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.primary};

    &.disable {
      pointer-events: none;
      fill: ${({ theme }) => theme.colors.primary}50;
    }

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const FullScreenImg = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  height: 100vh;
  width: 100%;

  display: grid;
  place-items: center;

  .bg {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #00000080;
  }

  .img-container {
    position: relative;

    .close {
      cursor: pointer;
      height: 35px;
      width: auto;
      position: absolute;
      right: 30px;
      top: 30px;
      transition: opacity ${({ theme }) => theme.duration};

      &:hover {
        opacity: 0.7;
      }
    }

    img {
      height: 80vh;
      padding: 30px;
      background: #fff;
    }
  }
`;
