export const apiPokedex = "https://pokeapi.co/api/v2/pokemon";
export const apiPokemon = (e) => `https://pokeapi.co/api/v2/pokemon/${e}`;
export const viaCepApi = (cep) => `https://viacep.com.br/ws/${cep}/json/`;
export const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=g9LCVFUvZ20Jseh1djh9Wu0RhtnlMB2S6TBLp90g`;
export const climaUrl = (cidade) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=a26d41cb4264196b0bcc723b03f5017b`;
