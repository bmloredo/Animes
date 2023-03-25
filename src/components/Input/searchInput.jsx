import React, { useState } from "react";
import lupa from "../../assets/images/magnifying-glass.png";
import api from "../../utils/api";
import { ContainerInput, InputButton } from "./input.styled";

const Input = () => {
  const [text, setText] = useState("");
  const offset = 0;
  localStorage.setItem("offset", offset);
  async function Search() {
    if (text === "") {
      alert("Preencha algo");
      setText("");
    }
    try {
      const response = await api.get(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=10&page[offset]=${offset}`
      );
      console.log(response);
      if (response.data.meta.count === 0) {
        alert(`Não foi encontrado nenhum anime com ${text}`);
        setText("");
      } else {
        const sArray = response.data;
        localStorage.setItem("resource", JSON.stringify(sArray));
        localStorage.setItem("title", text);
        window.location.href = "/anime";
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ContainerInput>
      <InputButton>
        <input
          type="text"
          placeholder="Buscar"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={Search}>
          <img src={lupa} alt="lupa" />
        </button>
      </InputButton>
    </ContainerInput>
  );
};

export default Input;
