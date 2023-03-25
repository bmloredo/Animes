import React, { useEffect, useState } from "react";
import { ContainerCard, DivGeneral } from "../../Style/Card.style";
import { handleClick } from "../../utils/CreateLocalStorage";
import { AiOutlineStar } from "react-icons/ai";
import { GoThumbsup } from "react-icons/go";
import { MostStyled, Title } from "./most.styled";
import { SpanG, SpanO } from "../../Style/span.styled";
import Tooltip from "../Tooltip/ToolTips";
import styled from "styled-components";

const TooltipTarget = styled.div``;

const Most = ({ cName, linkApi }) => {
  const [most, setMost] = useState();

  useEffect(() => {
    fetch(`${linkApi}`)
      .then((resp) => resp.json())
      .then((response) => {
        setMost(response.data);
      });
  }, [linkApi]);

  if (cName === "popular") {
    return (
      <MostStyled>
        <Title>
          <h1>
            <SpanO>
              <AiOutlineStar /> Animes{" "}
            </SpanO>{" "}
            <SpanG> Mais Populares</SpanG>
          </h1>
        </Title>
        <div className="animes-mostPopular">
          {most && (
            <ContainerCard>
              {most.map((popular) => (
                <Tooltip
                  title={popular.attributes.canonicalTitle}
                  averageRating={popular.attributes.averageRating}
                  popularityRank={popular.attributes.popularityRank}
                  ratingRank={popular.attributes.ratingRank}
                  description={popular.attributes.description ?? "Ótimo Anime"}
                  key={popular.id}
                >
                  <TooltipTarget>
                    <DivGeneral
                      onClick={() => handleClick(popular.id)}
                      key={popular.id}
                    >
                      <img
                        src={popular.attributes.posterImage.small}
                        alt={popular.attributes.canonicalTitle}
                      />
                    </DivGeneral>
                  </TooltipTarget>
                </Tooltip>
              ))}
            </ContainerCard>
          )}
        </div>
      </MostStyled>
    );
  }
  if (cName === "classified") {
    return (
      <MostStyled>
        <Title>
          <h1>
            <SpanO>
              <GoThumbsup /> Animes{" "}
            </SpanO>{" "}
            <SpanG> Mais Bem Classificados</SpanG>
          </h1>
        </Title>
        <div className="animes-mostClassified">
          {most && (
            <ContainerCard>
              {most.map((classified) => (
                <DivGeneral
                  onClick={() => handleClick(classified.id)}
                  className="anime-clicked"
                  key={classified.id}
                >
                  <img
                    src={classified.attributes.posterImage.small}
                    alt={classified.attributes.canonicalTitle}
                  />
                </DivGeneral>
              ))}
            </ContainerCard>
          )}
        </div>
      </MostStyled>
    );
  }
};

export default Most;
