import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 0px) and (max-width: 360px) {
    margin-right: 0;
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  max-width: 350px;
  border: 0.3px solid rgba(0, 0, 0, 0.1);

  img {
    width: 300px;
    height: 350px;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    width: 85%;
    margin-right: 0;
  }
`;

export const Broken = styled.div`
  margin-top: 9%;
  margin-left: 2%;
`;
