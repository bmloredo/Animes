import React from "react";
import yugu from "../../assets/images/yuzu 1.png";
import { Container, Text, Reserved } from "./footer.styled";
import icon from "../../assets/images/icon logo animes branco 1.png";

const Footer = () => {
  return (
    <Container>
      <div className="mascote">
        <img src={yugu} alt="Mascote" />
      </div>

      <Text>
        <p className="question">Ainda está procurando algo pra assistir?</p>
        <p className="collection">Confira o nosso acervo completo</p>
        <a href="/all">VER TUDO</a>
      </Text>
      <Reserved>
        <p>© 2023 FPR Animes - Todos os direitos reservados</p>
        <img src={icon} alt="icon" />
      </Reserved>
    </Container>
  );
};

export default Footer;
