import { useState, useEffect, useContext } from "react";
import mock_retiros from "../../../content/mock_retiros";
import translate from "../../../i18n/translate";
import { getMD, getFormattedDDMM } from "../../../utils";
import { LangContext } from "../../_app";

const Retiro = () => {
  const {
    img,
    title,
    subtitle,
    date_start,
    date_end,
    duration,
    price,
    summary,
    programa,
  } = mock_retiros[0];
  const [formattedDate, setFormattedDate] = useState("");
  const ctx = useContext(LangContext);

  useEffect(() => {
    const final =
      date_end && duration > 1
        ? `${getMD(date_start)} - ${getMD(date_end)}`
        : getMD(date_start);
    setFormattedDate(final);
  }, [date_start]);

  return (
    <div>
      {/* INTRO CARD */}
      <section className="p-5 md:p-10 mb-10 md:mb-20">
        <div className="container bg-beige flex flex-col md:flex-row min-h-80v md:min-h-70v p-0 ">
          <div
            className="bg-center bg-cover flex-1 md:flex-none md:w-7/12"
            style={{ backgroundImage: `url(${img})` }}
          />
          <div className="p-3 md:p-6 flex  flex-col justify-between">
            <div className="mb-10">
              <h1 className="title font-normal text-xxl md:text-xxxl mb-1 md:mb-3">
                {title}
              </h1>
              <h2 className="title font-extralight text-xxl md:text-xxxl">
                {subtitle}
              </h2>
            </div>
            <div>
              <div className="md:text-xl">
                <p className="md:mb-10">
                  <span className="mr-5">{formattedDate}</span>
                  <br className="hidden md:block" />
                  <span className="uppercase font-light">
                    {duration} {translate("dia")}
                    {duration > 1 ? "S" : ""}
                  </span>
                </p>
                <p className="mb-5 md:mb-1">{price} €</p>
              </div>

              <button className="btn btn-outline text-xxs md:text-xs px-8 py-1.5">
                {translate("book-now")}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* SCHEDULE */}
      <section className="mb-10 md:mb-20">
        <div className="container p-0">
          <div className="p-5 md:p-0 md:w-5/12">
            <p className="font-light mb-5">{summary}</p>
            <h2 className="title mb-5">{translate("programa")}</h2>
            {programa &&
              programa.length &&
              programa.map((el, i) => (
                <div className="mb-5" key={title + "table" + i}>
                  <h3 className="mb-2">
                    {getFormattedDDMM(el.date, ctx.locale)}
                  </h3>
                  <table>
                    {el.schedule.map((item, trI) => (
                      <tr key={title + "table" + i + trI}>
                        <td className="font-thin align-top pr-5 whitespace-nowrap">
                          {item.time}
                        </td>
                        <td className="font-light align-top">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              ))}
            <p className="font-light">Outras infos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retiro;
