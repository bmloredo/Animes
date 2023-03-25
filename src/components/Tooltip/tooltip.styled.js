import styled from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.div`
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  color: inherit;
  cursor: inherit;
  display: flex;
`;

export const TooltipBox = styled.div`
  position: absolute;
  background-color: #262626;
  color: #ffff;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 0.85rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  top: 103%;
  pointer-events: none;
  z-index: 1;
  max-height: 85%;
  max-width: 500px;
  overflow: hidden;
  white-space: pre-line;
  text-overflow: clip ellipsis;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    align-content: space-around;
    max-height: 85%;
    max-width: 500px;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0%;
    right: 11.02%;
    top: 3.66%;
    bottom: 19.51%;
    background: #fff;
    border-radius: 10px;
    width: 1px;
    height: 1px;
    pointer-events: all;
    overflow: hidden;
    white-space: pre-line;
    text-overflow: clip ellipsis;
  }

  h3 {
    left: 7.87%;
    right: 33.86%;
    top: 8.54%;
    bottom: 84.15%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #cccccc;
    padding: 5px;
  }

  .average_rating {
    left: 7.87%;
    right: 64.57%;
    top: 17.99%;
    bottom: 74.7%;
    padding: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #16a085;
  }

  .popularity_rank {
    left: 15.35%;
    right: 32.68%;
    top: 28.35%;
    bottom: 64.94%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #cccccc;
    padding: 5px;

    > svg {
      color: #ff4545;
    }
  }

  .rating_rank {
    left: 15.35%;
    right: 0%;
    top: 36.89%;
    bottom: 56.4%;
    padding: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    color: #cccccc;

    > svg {
      color: #ffe145;
    }
  }

  .description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #cccccc;
    padding: 10px 5px;
  }

  @media (min-width: 0px) and (max-width: 360px) {
    width: 90%;
    margin-right: 0;
  }
`;
