import React, { useEffect, useState } from "react";
import { handleClick } from "../../utils/CreateLocalStorage";
import Pagination from "../../components/Pagination/pagination";
import { FaVideo } from "react-icons/fa";
import Header from "../../components/Header/Header";
import { ContainerCard, DivGeneral, Broken } from "../../Style/Card.style";
import { Container, Main } from "../Home/home.styled";
import { Title } from "./all.styled";
import Footer from "../../components/Footer/footer";
import * as T from "../../components/Tooltip/tooltip.styled.js";
import Tooltip from "../../components/Tooltip/ToolTips";

const AllAnimes = () => {
  const [all, setAll] = useState({});
  const limit = 20;
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}&sort=-popularityRank,-popularityRank`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setAll(response);
        setInfo(response);
      });
  }, [all, offset]);
  return (
    <div>
      <Main>
        <Header />
        <Container>
          <Broken>
            <Title>
              <h1>
                <FaVideo /> Todos Animes
              </h1>
            </Title>

            <div className="animes-categories">
              {all.data && (
                <ContainerCard>
                  {all.data.map((allAnimes) => (
                    <Tooltip
                      title={allAnimes.attributes.canonicalTitle}
                      averageRating={allAnimes.attributes.averageRating}
                      popularityRank={allAnimes.attributes.popularityRank}
                      ratingRank={allAnimes.attributes.ratingRank}
                      description={
                        allAnimes.attributes.description ?? "Ótimo Anime"
                      }
                      key={allAnimes.id}
                    >
                      <DivGeneral
                        key={allAnimes.id}
                        onClick={() => handleClick(allAnimes.id)}
                        className="anime-clicked"
                      >
                        <img
                          src={allAnimes.attributes.posterImage.small}
                          alt={allAnimes.attributes.canonicalTitle}
                        />
                      </DivGeneral>
                    </Tooltip>
                  ))}
                </ContainerCard>
              )}
            </div>
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

export default AllAnimes;
