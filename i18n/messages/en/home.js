import { renameObjectKeysWithPrefix } from "../../../utils";
const home = {
  // home
  "hero-title": "Welcome to",
  "hero-circle": "retreats\n &\n workshops",
  "a-casa-content":
    "Conhecida também por Casa do Capitão pelos vizinhos, a Casa do Eido – sustainable living & nature experiences tem sido, desde gerações, uma casa de família e, agora, um espaço de refúgio e vivências, onde pode fazer uma pausa, desligar e reconetar.",
  "acomodacoes-content":
    "Camas confortáveis vestidas com tecidos naturais – algodão e linho –, atoalhados macios, detalhes e flores coloridas e frescas no quarto, amenities orgânicos, esperam por si.",
  "experiencias-content-0": "Pequeno almoço biológico.",
  "experiencias-content-1": "Almoço ligeiro: salada, sandwiche.",
  "experiencias-content-2":
    "Jantar com produtos biológicos e locais, com opção vegetariana.",
  "experiencias-content-3": "Bicicletas.",
  "experiencias-content-4": "Honesty Bar.",
  "experiencias-content-5": "Bebidas sob pedido.",
  "experiencias-content-6": "Massagem.",
  "experiencias-content-7": "Cesta de piquenique.",
  "experiencias-content-8": "Tour no Gerês.",
  "experiencias-content-9": "Tour nas redondezas: Braga, Guimarães, Porto.",
  "experiencias-content-10": "Retiros/ Worshops",
  "retiros-content":
    "Conhecida também por Casa do Capitão pelos vizinhos, a Casa do Eido – sustainable living & nature experiences tem sido, desde gerações, uma casa de família e, agora, um espaço de refúgio e vivências, onde pode fazer uma pausa, desligar e reconetar.",
  "explore-content":
    "Desde a sua paisagem deslumbrante, marcada por florestas luxuriantes, paisagens agrestes, penhascos graníticos, à sua diversidade vegetal e de vida selvagem, este é o momento para explorar aquele é que o único parque nacional em território português",
};
export default renameObjectKeysWithPrefix(home, "home-");
