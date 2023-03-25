import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/pagination";
import { handleClick } from "../../utils/CreateLocalStorage";
import { BsCameraVideo } from "react-icons/bs";
import Header from "../../components/Header/Header";
import { ContainerCard, DivGeneral, Broken } from "../../Style/Card.style";
import { Container, Main } from "../Home/home.styled";
import { Title } from "./animepage.styled";
import Footer from "../../components/Footer/footer";
import * as T from "../../components/Tooltip/tooltip.styled.js";
import Tooltip from "../../components/Tooltip/ToolTips";

const AnimePage = () => {
  const [anime, setAnime] = useState({});
  const text = localStorage.getItem("title").toUpperCase();
  const sArray = JSON.parse(localStorage.getItem("resource"));
  const limit = 10;
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState();

  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${text.toLowerCase()}&page[limit]=${limit}&page[offset]=${offset}`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setAnime(response);
        setInfo(response);
      });
  }, [offset, text]);
  console.log(anime);
  return (
    <div>
      <Main>
        <Header />
        <Container>
          <Broken>
            {sArray && (
              <Title>
                <h1>
                  <BsCameraVideo /> {text}
                </h1>
              </Title>
            )}
            {sArray.data && offset === 0 && (
              <ContainerCard>
                {sArray.data.map((anime) => (
                  <Tooltip
                    title={anime.attributes.canonicalTitle}
                    averageRating={anime.attributes.averageRating}
                    popularityRank={anime.attributes.popularityRank}
                    ratingRank={anime.attributes.ratingRank}
                    description={anime.attributes.description ?? "Ótimo Anime"}
                    key={anime.id}
                  >
                    <T.TooltipTarget>
                      <DivGeneral
                        key={anime.id}
                        onClick={() => handleClick(anime.id)}
                      >
                        <img
                          src={anime.attributes.posterImage.small}
                          alt={anime.attributes.canonicalTitle}
                        />
                      </DivGeneral>
                    </T.TooltipTarget>
                  </Tooltip>
                ))}
              </ContainerCard>
            )}
            {anime.data && offset !== 0 && (
              <ContainerCard>
                {anime.data.map((anime) => (
                  <DivGeneral
                    key={anime.id}
                    onClick={() => handleClick(anime.id)}
                  >
                    <img
                      src={anime.attributes.posterImage.small}
                      alt={anime.attributes.canonicalTitle}
                    />
                  </DivGeneral>
                ))}
              </ContainerCard>
            )}

            {info.meta && (
              <Pagination
                limit={limit}
                total={info.meta.count}
                offset={offset}
                setOffset={setOffset}
              />
            )}
          </Broken>
        </Container>
      </Main>
      <Footer />
    </div>
  );
};

export default AnimePage;
