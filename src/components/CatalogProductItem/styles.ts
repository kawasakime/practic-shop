import styled from "styled-components";

export const ProductItem = styled.div<{ bgUrl: string }>`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;

  .img-container {
    width: 240px;
    height: 240px;
    background-image: url(${({ bgUrl }) => bgUrl});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  p {
    margin: 20px 0;
    font-size: 13px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
