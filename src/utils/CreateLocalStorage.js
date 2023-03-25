import api from "./api";

export async function handleClick(animeId) {
  try {
    const response = await api.get(`/anime/${animeId}`);
    const animeArray = response.data;
    localStorage.setItem("animeId", JSON.stringify(animeArray));
    window.location.href = "/especific";
  } catch (error) {
    console.log(error);
  }
}
