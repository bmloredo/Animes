import React from "react";
import Most from "../../components/MostPopular/mostpopular";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../assets/images/banner.png";
import {
  Container,
  BannerHome,
  HeaderHome,
  MostPopular,
  Structure,
  Classified,
  CenterHome,
  Main,
} from "./home.styled";
import { SpanG, SpanO } from "../../Style/span.styled";

function Home() {
  return (
    <div>
      <Main>
        <Header />
        <Container>
          <HeaderHome>
            <BannerHome>
              <div className="img_banner">
                <img src={Banner} alt="Banner Animes" />
              </div>
              <div className="title_home">
                <h1>
                  O <SpanO>Maior</SpanO> Catálogo de <SpanG>Anime </SpanG>do
                  Mundo
                </h1>
              </div>
            </BannerHome>
          </HeaderHome>

          <CenterHome>
            <MostPopular>
              <Most
                cName={"popular"}
                linkApi={
                  "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=popularityRank"
                }
              />
            </MostPopular>

            <Structure>
              <Carousel />
            </Structure>

            <Classified>
              <div className="most-classified">
                <Most
                  cName={"classified"}
                  linkApi={
                    "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating"
                  }
                />
              </div>
            </Classified>
          </CenterHome>
        </Container>
      </Main>
      <Footer />
    </div>
  );
}

export default Home;
