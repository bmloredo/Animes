import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/pagination";
import { handleClick } from "../../utils/CreateLocalStorage";
import { BsFilm } from "react-icons/bs";
import Header from "../../components/Header/Header";
import { ContainerCard, DivGeneral, Broken } from "../../Style/Card.style";
import { Container, Main } from "../Home/home.styled";
import { Title } from "./categories.styled";
import Footer from "../../components/Footer/footer";
import * as T from "../../components/Tooltip/tooltip.styled.js";
import Tooltip from "../../components/Tooltip/ToolTips";

function Categories({ location }) {
  const limit = 20;
  const [categories, setCategories] = useState();
  const category = location.replace("/", "");
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[categories]=${category}&page[limit]=${limit}&page[offset]=${offset}`
    )
      .then((resp) => resp.json())
      .then((response) => {
        setCategories(response.data);
        setInfo(response);
      });
  }, [offset, category]);

  return (
    <div>
      <Main>
        <Header />
        <Container>
          <Broken>
            <Title>
              <h1>
                <BsFilm /> {category.toUpperCase()}
              </h1>
            </Title>
            <div className="animes-categories">
              {categories && (
                <ContainerCard>
                  {categories.map((cat) => (
                    <Tooltip
                      title={cat.attributes.canonicalTitle}
                      averageRating={cat.attributes.averageRating}
                      popularityRank={cat.attributes.popularityRank}
                      ratingRank={cat.attributes.ratingRank}
                      description={cat.attributes.description ?? "Ótimo Anime"}
                      key={cat.id}
                    >
                      <DivGeneral
                        onClick={() => handleClick(cat.id)}
                        key={cat.id}
                      >
                        <img
                          src={
                            cat.attributes.posterImage
                              ? cat.attributes.posterImage.small
                              : "Categoria Não possui imagens"
                          }
                          alt={cat.attributes.canonicalTitle}
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
}

export default Categories;
