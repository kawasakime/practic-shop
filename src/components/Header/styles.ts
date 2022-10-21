import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 0;

  img {
    max-height: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: flex;

  li {
    margin: 0 20px;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }

    a {
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Information = styled.p`
  font-size: 14px;
  margin-left: 20px;
`;

export const Contacts = styled.div`
  display: flex;

`
