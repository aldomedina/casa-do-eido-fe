import Acomodacoes from "../../pages/acomodacoes";
import { LOCALES } from "../locales";
import common from "./pt/common";
import home from "./pt/home";
import acomodacoes from "./pt/acomodacoes";
import aCasa from "./pt/a-casa";
export default {
  [LOCALES.pt]: {
    ...common,
    ...home,
    ...acomodacoes,
    ...aCasa,
  },
};
