import { useEffect, useState } from "react";
import naruto from "../../assets/images/naruto.jpg";
import dragon from "../../assets/images/dragonball.jpg";
import onepiece from "../../assets/images/ondepiece.jpg";
import "./carousel.css";

function Carousel() {
  const carousel = [
    {
      title: "NARUTO: ",
      image: naruto,
      description:
        "Incrível. Personagens simpáticos, uma história com coração e muita animação. A música também é fantástica.",
    },
    {
      title: "DRAGON BALL Z: ",
      image: dragon,
      description:
        "Você conhece pelo nome e reputação, e honestamente é a série que redefiniu o que o anime shonen se tornaria para melhor ou para pior.",
    },
    {
      title: "ONE PIECE: ",
      image: onepiece,
      description:
        "Um anime incrível com construção de mundo incrivelmente memorável. Montanha russa de emoções, cheia de aventura e grandes personagens.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3500);
  });

  const slideRight = () => {
    setCurrent(current === carousel.length - 1 ? 0 : current + 1);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {carousel.map((image, index) => (
          <div>
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />
              <div className="card_description">
                <p className="card_title">
                  <span>{image.title}</span>
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="carousel_pagination">
          {carousel.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
