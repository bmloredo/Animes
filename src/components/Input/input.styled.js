import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin: 1rem 0.8rem;

  @media (min-width: 361px) and (max-width: 500px) {
    margin: 0.2rem;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin: 0.2rem;
  }
`;

export const InputButton = styled.div`
  border: solid #ffffff 1px;
  border-radius: 0.625rem;
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5%;

  @media (min-width: 361px) and (max-width: 500px) {
    height: 2%;
    margin-top: -0.5rem;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    height: 1px;
    margin-top: -0.5rem;
  }

  input {
    background-color: transparent;
    border: none;
    color: #fff;
  }

  button {
    border-radius: 0.625rem;
    background-color: transparent;
    border: none;
    margin-left: 1rem;
    margin-right: -0.5rem;

    @media (min-width: 361px) and (max-width: 500px) {
      width: 2rem;
      height: 1rem;
    }

    @media (min-width: 0px) and (max-width: 360px) {
      width: 2rem;
      height: 1.5rem;
    }
  }
`;
