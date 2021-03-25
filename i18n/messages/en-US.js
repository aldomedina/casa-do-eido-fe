import { LOCALES } from "../locales";
import common from "./en/common";
import home from "./en/home";
import acomodacoes from "./en/acomodacoes";
import aCasa from "./en/a-casa";
import experiencias from "./en/experiencias";

export default {
  [LOCALES.en]: {
    ...common,
    ...home,
    ...acomodacoes,
    ...aCasa,
    ...experiencias,
  },
};
