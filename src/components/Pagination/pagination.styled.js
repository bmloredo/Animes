import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
  @media (min-width: 361px) and (max-width: 500px) {
    margin-bottom: 6rem;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 900px) and (max-width: 960px) {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  background-color: #f46d1b;
  padding: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  margin: 0 4px 20px 20px;
`;
