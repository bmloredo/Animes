import React, { useState } from "react";
import Header from "../../components/Header/Header";
import You from "../../assets/images/YoutubeButton.png";
import { FaHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Container, Main } from "../Home/home.styled";
import {
  Page,
  Banner,
  HeaderSpecific,
  Iframe,
  Information,
  Text,
  TextInfo,
  Video,
} from "./specific.styled";
import Footer from "../../components/Footer/footer";

const SpecificAnime = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const anime = JSON.parse(localStorage.getItem("animeId"));
  return (
    <Page>
      <Main>
        <Header />
        <Container>
          <HeaderSpecific>
            <Banner>
              <div className="img_banner">
                <img
                  src={
                    anime.data.attributes.coverImage
                      ? anime.data.attributes.coverImage.large
                      : anime.data.attributes.posterImage.large
                  }
                  alt={`Banner ${anime.data.attributes.canonicalTitle}`}
                />
              </div>
            </Banner>
          </HeaderSpecific>

          <TextInfo>
            <Information>
              <img
                src={anime.data.attributes.posterImage.small}
                alt={anime.data.attributes.canonicalTitle}
              />

              <button onClick={() => setOpenVideo(!openVideo)}>
                <img src={You} alt="youtube-icon" />
                Ver Trailer
              </button>

              <p className="aproved">
                Aprovado por <span>{anime.data.attributes.averageRating}</span>{" "}
                % da comunidade
              </p>
              <p className="popular">
                <FaHeart /> #{anime.data.attributes.popularityRank} Mais popular
              </p>
              <p className="classified">
                <AiFillStar /> #{anime.data.attributes.ratingRank} Melhor
                Classificado
              </p>
            </Information>
            <Text>
              <h2>{anime.data.attributes.canonicalTitle}</h2>
              <p>
                {anime.data.attributes.description
                  ? anime.data.attributes.description
                  : `Não possui sinopse para esse anime!`}
              </p>
            </Text>
          </TextInfo>
        </Container>
      </Main>
      <Footer />
      {openVideo && (
        <Video
          scroll={`${document.body.scrollHeight}px`}
          onClick={() => setOpenVideo(false)}
        >
          <Iframe>
            <iframe
              width="800"
              height="500"
              src={`https://www.youtube.com/embed/${anime.data.attributes.youtubeVideoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Trailler Anime"
            />
          </Iframe>
        </Video>
      )}
    </Page>
  );
};

export default SpecificAnime;
