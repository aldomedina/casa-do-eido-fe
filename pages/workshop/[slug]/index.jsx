import { useState, useEffect, useContext } from "react";
import ErrorPage from "next/error";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";

import translate from "../../../i18n/translate";
import { getMD, urlFor } from "../../../utils";
import { LangContext } from "../../_app";
import sanity from "../../../lib/sanity";

export async function getStaticPaths() {
  const query = groq` 
    *[_type == "workshop" && defined(slug.current)][].slug.current
  `;
  const paths = await sanity.fetch(query);
  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const query = groq`
    *[_type=='workshop' && slug.current == '${slug}'][0]
  `;
  const data = await sanity.fetch(query);
  return {
    props: {
      workshop: data,
    },
  };
}

const Retiro = ({ workshop }) => {
  // handle 404
  const slug = workshop?.slug;
  if (!slug) {
    return <ErrorPage statusCode={404} />;
  }

  const {
    end_date,
    start_date,
    duration,
    mainImage,
    post_title,
    subtitle,
    price,
    programa,
    intro,
    other_info,
  } = workshop;

  const [formattedDate, setFormattedDate] = useState("");
  const ctx = useContext(LangContext);

  useEffect(() => {
    const endDateTS = new Date(end_date.utc).getTime();
    const startDateTS = new Date(start_date.utc).getTime();
    const final =
      endDateTS && duration > 1
        ? `${getMD(startDateTS)} — ${getMD(endDateTS)}`
        : getMD(startDateTS);
    setFormattedDate(final);
  }, [workshop]);

  return (
    <div>
      {/* INTRO CARD */}
      <section className="p-5 md:p-10 mb-10 md:mb-20">
        <div className="container bg-beige flex flex-col md:flex-row min-h-80v md:min-h-70v p-0 ">
          <div
            className="bg-center bg-cover flex-1 md:flex-none md:w-7/12"
            style={{ backgroundImage: `url(${urlFor(mainImage)})` }}
          />
          <div className="p-3 md:p-6 flex  flex-col justify-between">
            <div className="mb-10">
              <h1 className="title font-normal text-xxl md:text-xxxl mb-1 md:mb-3">
                {post_title[ctx.locale]}
              </h1>
              <h2 className="title font-extralight text-xxl md:text-xxxl">
                {subtitle[ctx.locale]}
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
          <div className="p-5 md:p-0 md:w-5/12 ">
            <p className="font-light mb-5">{intro[ctx.locale]}</p>
            <h2 className="title mb-5">{translate("programa")}</h2>
            {programa &&
              Object.values(programa).length &&
              Object.values(programa).map((el, i) => (
                <div className="mb-5" key={"table" + i}>
                  <h3 className="mb-2">{el.activity_date}</h3>
                  <table>
                    {el.activities.map((item, trI) => (
                      <tr key={"table" + i + trI}>
                        <td className="font-thin align-top pr-5 whitespace-nowrap">
                          {item.activity}
                        </td>
                        <td className="font-light align-top">
                          {item.start_time} - {item.end_time}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              ))}
            <div className="font-light mt-10 prose">
              <BlockContent blocks={other_info[ctx.locale]} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Retiro;
