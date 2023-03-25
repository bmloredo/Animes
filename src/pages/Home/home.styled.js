import styled from "styled-components";

export const Main = styled.main`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HeaderHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: -1;
`;

export const BannerHome = styled.div`
  background-color: black;
  opacity: 1;
  position: relative;

  @media (min-width: 361px) and (max-width: 500px) {
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    width: 98%;
  }

  .img_banner {
    background-color: black;
    opacity: 0.6;
    max-width: 100%;

    @media (min-width: 361px) and (max-width: 500px) {
      height: 280px;
      width: 99.5%;
    }

    @media (min-width: 0px) and (max-width: 360px) {
      height: 280px;
      width: 94%;
    }
  }

  img {
    height: 400px;
    width: 100%;

    @media (min-width: 361px) and (max-width: 500px) {
      height: 280px;
      width: 100%;
    }

    @media (min-width: 0px) and (max-width: 360px) {
      height: 280px;
      width: 100%;
    }
  }

  .title_home {
    position: absolute;
    top: 10.94rem;
    left: 35%;
    width: 39rem;
    height: 154px;

    @media (min-width: 361px) and (max-width: 500px) {
      left: 10%;
      max-width: 80%;
      top: 9rem;
    }

    @media (min-width: 0px) and (max-width: 360px) {
      left: 10%;
      max-width: 80%;
      top: 8rem;
    }

    @media (min-width: 501px) and (max-width: 600px) {
      left: 5%;
      width: 80%;
    }

    @media (min-width: 601px) and (max-width: 899px) {
      left: 5%;
      width: 80%;
    }

    @media (min-width: 900px) and (max-width: 1024px) {
      left: 5%;
      width: 80%;
      top: 13rem;
    }
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 4.875rem;
    color: #ffff;
    @media (max-width: 500px) {
      max-width: 100%;
      font-size: 1.8rem;
      line-height: 2.875rem;
    }

    @media (min-width: 501px) and (max-width: 600px) {
      font-size: 3rem;
      line-height: 2.875rem;
    }
  }
`;

export const CenterHome = styled.div`
  display: flex;
  flex-direction: column;
  left: 5.8rem;
  margin: 0 auto;
  top: 21%;
`;

export const MostPopular = styled.div`
  margin-bottom: 2rem;
`;

export const Structure = styled.div`
  margin: 0 2rem;
`;

export const Classified = styled.div`
  margin: 2rem 0;

  @media (min-width: 361px) and (max-width: 500px) {
    margin-top: -5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    margin-top: -5rem;
    margin-bottom: 5rem;
  }

  @media (min-width: 501px) and (max-width: 600px) {
    margin-bottom: 5rem;
  }

  @media (min-width: 900px) and (max-width: 1024px) {
    margin-bottom: 5rem;
  }
`;
