import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 250px;
  background: #262626;
  position: relative;

  .mascote {
    position: absolute;
    bottom: 85%;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -10px;

  a {
    text-decoration: none;
    color: #f46d1b;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-top: 1rem;
    text-align: center;
    padding: 1rem;
    border: solid #f46d1b 1px;
  }

  .question {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
  }

  .collection {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #34ac40;
  }

  @media (min-width: 361px) and (max-width: 500px) {
    margin-top: 4rem;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin-top: 3rem;
  }
`;

export const Reserved = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    p {
      font-size: 10px;
    }
  }
`;
