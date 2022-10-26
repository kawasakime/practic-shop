import styled from "styled-components";

export const Mailing = styled.div`
  height: 350px;
  width: 100%;
  display: grid;
  place-items: center;
  background-image: url("./assets/img/mailing.jpg");
  background-size: cover;
  background-position: center center;
`;

export const Container = styled.div`
  height: 220px;
  max-width: 820px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary}70;
  backdrop-filter: blur(3.5px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 30px;
    max-width: 700px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  outline: none;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  margin-right: 15px;
  padding: 0px 24px;
  font-size: 16px;
`;
