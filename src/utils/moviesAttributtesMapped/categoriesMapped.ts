import { generateMappedArray } from "../generateMappedArray";

export const categoriesMapped = {
  TRUE_STORY: "Baseado em histórias reais",
  CHANGE_WAY_TO_LOOK_AT_LIFE: "Mudança na visão de mundo",
  HEIST: "Filmes sobre roubos",
  RACING: "Filmes de corrida",
  SPACE: "Filmes sobre espaço",
  IMDBTOP: "IMDb top 250",
  WAR: "Filmes sobre guerra",
  ZOMBIES: "Filmes sobre zombies",
  GREEK_MYTHOLOGY: "Filmes baseados na mitologia nórdica",
  POST_APOCALYPITC: "Filmes em cenários pós-apocalípticos",
};

export const categoriesMappedArray = generateMappedArray(categoriesMapped);
