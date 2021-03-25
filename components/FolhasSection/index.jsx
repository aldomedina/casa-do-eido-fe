import React from "react";
import translate from "../../i18n/translate";

const FolhasSection = ({ children, hasBtn, handleButton, customClass }) => {
  return (
    <section className={"bg-folhas " + customClass}>
      <div className="container p-5 md:p-10">
        <div className="bg-white p-5 md:p-20  mx-auto lg:w-3/5 mb-10">
          {children}
        </div>
        {hasBtn && (
          <div>
            <button
              onClick={handleButton}
              className="btn btn-white mx-auto text-xxs block"
            >
              {translate("btn-know-more")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FolhasSection;
