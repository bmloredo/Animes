import styled from "styled-components";

export const Container = styled.div`
  background-color: #f46d1b;
  position: absolute;
  min-width: 15%;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.2s;
  z-index: 1;
  height: ${(props) => props.scroll || "100%"};

  > svg {
    color: white;
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: 85%;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 10%;
    }
  }
  @media (min-width: 361px) and (max-width: 500px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }

  @media (min-width: 601px) and (max-width: 899px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }

  @media (min-width: 900px) and (max-width: 960px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }
  @media (min-width: 961px) and (max-width: 1280px) {
    > svg {
      width: 15px;
      height: 20px;
      margin-top: 5px;
    }
  }
`;

export const Content = styled.div`
  margin-left: 10%;
  height: ${(props) => props.scroll || "100%"};

  li {
    display: flex;
    align-items: center;
    background-color: #f46d1b;
    font-size: 1rem;
    color: white;
    padding: 5px 10px 0 10px;
    list-style-type: none;
    cursor: pointer;
    border-radius: 10px;

    &:hover {
      background-color: black;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 1.5rem;
  }

  .title {
    margin: 25px 10px 2px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > svg {
      margin-right: 10px;
    }
  }

  @media (min-width: 361px) and (max-width: 500px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 360px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }

  @media (min-width: 601px) and (max-width: 899px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }

  @media (min-width: 900px) and (max-width: 960px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }

  @media (min-width: 961px) and (max-width: 1280px) {
    li {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.2rem;
    }

    .title {
      margin: 25px 10px 2px 10px;

      > svg {
        height: 20px;
        width: 50px;
        margin-right: 1px;
        margin-left: -9px;
      }
    }
  }
`;
