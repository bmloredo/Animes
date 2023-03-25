import styled from "styled-components";

export const Page = styled.div``;

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
`;

export const HeaderSpecific = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: -1;
`;
export const Banner = styled.div`
  background-color: black;
  opacity: 1;
  position: relative;

  .img_banner {
    background-color: black;
    opacity: 0.6;
    max-width: 100%;
  }

  img {
    height: 400px;
    width: 100%;
  }

  @media (min-width: 380px) and (max-width: 500px) {
    img {
      height: 200px;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    img {
      height: 200px;
    }
  }
`;

export const TextInfo = styled.div`
  display: flex;
  margin: 80px 20px;

  @media (min-width: 361px) and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 601px) and (max-width: 899px) {
    margin: 110px;
  }
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
  left: 12rem;
  bottom: 4.5rem;
  p {
    width: 80%;
    left: 405px;
    top: 530px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #3d3d3d;
    margin-top: 10px;
    white-space: pre-line;
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: center;
    color: #3c3c3c;
    margin-bottom: 25px;
    border: solid green 1px;
  }

  @media (min-width: 361px) and (max-width: 500px) {
    left: 1rem;
    width: 100%;
    top: 60px;
    margin-bottom: 80px;
    border: solid #f46d1b 1px;
    padding: 0.5rem;

    h1 {
      font-size: 5px;
    }

    p {
      font-size: 10px;
      line-height: 14px;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    left: 1rem;
    width: 100%;
    top: 60px;
    margin-bottom: 80px;
    border: solid #f46d1b 1px;
    padding: 0.5rem;

    h1 {
      font-size: 5px;
    }

    p {
      font-size: 10px;
      line-height: 14px;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    bottom: 5rem;
    left: 3.1rem;
    max-width: 70%;
    padding: 0.5rem;

    p {
      font-size: 1rem;
      line-height: 14px;
    }
  }

  @media (min-width: 601px) and (max-width: 899px) {
    bottom: 5rem;
    left: 5rem;
    max-width: 70%;

    p {
      font-size: 1rem;
      line-height: 16px;
    }
  }

  @media (min-width: 900px) and (max-width: 960px) {
    bottom: 5rem;
    left: 6rem;
    max-width: 70%;
    padding: 0.5rem;

    p {
      font-size: 1rem;
      line-height: 16px;
      margin-top: 1px;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  position: relative;
  width: 221px;
  height: 313px;
  left: 10%;
  bottom: 8rem;

  button {
    margin: 1rem 1rem;
    background: #f46d1b;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      margin: 0 10px 0 -2px;
    }
  }

  .aproved {
    font-family: "Inter";
    font-style: normal;
    font-size: 14px;
    line-height: 19px;
    color: #16a085;
    margin: 0px 0 8px 5px;

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #16a085;
    }
  }

  .popular {
    font-family: "Inter";

    font-size: 15px;
    line-height: 19px;
    margin: 0px 0 8px 5px;

    color: #3d3d3d;
    > svg {
      color: red;
    }
  }

  .classified {
    font-family: "Inter";

    font-size: 15px;
    line-height: 19px;
    margin: 0px 0 8px 5px;

    color: #3d3d3d;
    > svg {
      color: yellow;
    }
  }
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.85);
  min-width: 100%;
  height: ${(props) => props.scroll || "100%"};
`;

export const Iframe = styled.div`
  position: absolute;
  left: 30%;
  top: 28%;
  @media (min-width: 361px) and (max-width: 500px) {
    left: 15%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    left: 8%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    left: 15%;

    iframe {
      width: 400px;
      height: 300px;
    }
  }

  @media (min-width: 601px) and (max-width: 686px) {
    left: 3%;
    iframe {
      width: 550px;
      height: 400px;
    }
  }

  @media (min-width: 687px) and (max-width: 899px) {
    left: 5%;
    iframe {
      width: 650px;
      height: 400px;
    }
  }

  @media (min-width: 900px) and (max-width: 960px) {
    left: 10%;
    iframe {
      width: 700px;
      height: 400px;
    }
  }

  @media (min-width: 961px) and (max-width: 1170px) {
    left: 20%;
    iframe {
      width: 700px;
      height: 400px;
    }
  }
`;
