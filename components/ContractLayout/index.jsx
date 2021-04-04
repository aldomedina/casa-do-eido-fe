import React from "react";
import translate from "../../i18n/translate";
const ContractLayout = ({ titleId, children }) => {
  return (
    <section>
      <div className="container">
        <h1 className="title text-xxxl my-10">{translate(titleId)}</h1>
        <div style={{ maxWidth: 600 }} className="font-light mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContractLayout;
