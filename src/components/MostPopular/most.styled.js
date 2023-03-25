import styled from "styled-components";

export const MostStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 1%;

  @media (min-width: 361px) and (max-width: 500px) {
    margin-left: 5%;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin-left: 6%;
    width: 80%;
  }
`;
