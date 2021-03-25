import { useState } from "react";
import AcomodacoesSection from "../../components/AcomodacoesSection";
import FolhasSection from "../../components/FolhasSection";

import translate from "../../i18n/translate";
import acomodacoes_data from "../../content/acomodacoes";

const Acomodacoes = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <FolhasSection customClass="mb-20 md:mb-36">
        <h2 className="title text-center my-10 md:my-0 md:mb-10">
          {translate("acomodacoes")}
        </h2>
        <p className="text-md font-light mb-5">
          {translate("acomodacoes-p-1")}
        </p>
        <p className="text-md font-light mb-5">
          {translate("acomodacoes-p-2")}
        </p>
      </FolhasSection>

      {acomodacoes_data &&
        acomodacoes_data.map((el, i) => (
          <AcomodacoesSection
            key={"acomodacoes-" + i}
            customSectionClass="mb-20 md:mb-36"
            title={translate(`acomodacoes-${el.id}-title`)}
            content={translate(`acomodacoes-${el.id}-content`)}
            items={el.items}
          />
        ))}
    </>
  );
};

export default Acomodacoes;
