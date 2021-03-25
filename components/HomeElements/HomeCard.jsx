import React from "react";
import translate from "../../i18n/translate";

const HomeCard = ({
  img,
  title,
  content,
  handleBtn,
  customClasses,
  imgCustomClass,
  contentCustomClass,
  contentWrapperCustomClass,
}) => {
  return (
    <div className={"flex flex-col " + customClasses}>
      <div
        className={"w-full bg-cover bg-center h-40v md:h-60v " + imgCustomClass}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={contentWrapperCustomClass}>
        <h2 className="text-xl font-regular uppercase mb-5">{title}</h2>
        <div
          className={"md:w-3/4 text-md font-light mb-5 " + contentCustomClass}
        >
          {content}
        </div>
        {handleBtn && (
          <div>
            <button
              onClick={handleBtn}
              className="btn  btn-outline text-xxs py-1 px-2"
            >
              {translate("btn-know-more")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCard;
