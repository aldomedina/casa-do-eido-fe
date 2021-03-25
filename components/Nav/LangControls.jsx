import { useContext } from "react";
import { LangContext } from "../../pages/_app";
const LangControls = ({ customClass }) => {
  const ctx = useContext(LangContext);

  return (
    <li className={customClass}>
      <button
        className={`${ctx.locale === "pt" ? "underline" : undefined} mr-2`}
        onClick={() => ctx.selectLang("pt")}
      >
        PT
      </button>
      <button
        className={ctx.locale === "en" ? "underline" : undefined}
        onClick={() => ctx.selectLang("en")}
      >
        ENG
      </button>
    </li>
  );
};

export default LangControls;
