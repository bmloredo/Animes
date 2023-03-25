import styled from "styled-components";

export const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 7%;
  max-width: 8%;
`;

export const Container = styled.div`
  display: flex;
  background-color: #f46d1b;
  width: 100%;
  height: 100%;

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    margin: 2rem auto;
    cursor: pointer;
  }

  @media (min-width: 361px) and (max-width: 500px) {
    width: 30rem;
    z-index: 1;

    > svg {
      width: 2.5rem;
      height: 20px;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    width: 30rem;
    z-index: 1;

    > svg {
      width: 2.3rem;
      height: 20px;
    }
  }
`;

export const Inputimg = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
  background: rgba(0, 0, 0, 0.9);
  width: 92.9%;
  left: 7%;
  height: 15%;
  position: absolute;

  @media (min-width: 361px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 70%;
      width: 40%;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      height: 50%;
      width: 30%;
    }
  }

  @media (min-width: 1000px) and (max-width: 1024px) {
    img {
      height: 90%;
      width: 30%;
    }
  }
`;
