import { LOCALES } from "../locales";
import common from "./en/common";
import home from "./en/home";
import acomodacoes from "./en/acomodacoes";
import aCasa from "./en/a-casa";

export default {
  [LOCALES.en]: {
    ...common,
    ...home,
    ...acomodacoes,
    ...aCasa,
  },
};
