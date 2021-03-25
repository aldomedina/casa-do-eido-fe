import { LOCALES } from "../locales";
import common from "./en/common";
import home from "./en/home";
import acomodacoes from "./en/acomodacoes";

export default {
  [LOCALES.en]: {
    ...common,
    ...home,
    ...acomodacoes,
  },
};
