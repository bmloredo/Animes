import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  h1 {
    margin-left: 15px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    color: #f46d1b;
  }
  @media (min-width: 361px) and (max-width: 500px) {
    margin-top: 8rem;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin-top: 6rem;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    margin-top: 7rem;
  }

  @media (min-width: 601px) and (max-width: 899px) {
    margin-top: 8rem;
  }

  @media (min-width: 900px) and (max-width: 960px) {
    margin-top: 8rem;
  }

  @media (min-width: 961px) and (max-width: 1500px) {
    margin-top: 4rem;
  }
  @media (min-width: 1501px) and (max-width: 1700px) {
    margin-top: 3rem;
  }
`;
