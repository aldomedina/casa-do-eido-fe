import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/Image";
import imageUrlBuilder from "@sanity/image-url";
import translate from "../../i18n/translate";
import { getMD, urlFor } from "../../utils";
import { LangContext } from "../../pages/_app";
import sanity from "../../lib/sanity";

const RetiroCard = ({ item }) => {
  const {
    mainImage,
    post_title,
    subtitle,
    start_date,
    end_date,
    duration,
    slug,
    url,
  } = item;

  const [isPast, setIsPast] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const ctx = useContext(LangContext);

  useEffect(() => {
    const endDateTS = new Date(end_date.utc).getTime();
    const startDateTS = new Date(start_date.utc).getTime();
    setIsPast(Date.now() - startDateTS > 0);
    const final =
      endDateTS && duration > 1
        ? `${getMD(startDateTS)} — ${getMD(endDateTS)}`
        : getMD(startDateTS);
    setFormattedDate(final);
  }, [start_date]);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          className="min-h-55v md:min-h-50v w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${urlFor(mainImage)})` }}
        ></div>
        {isPast && (
          <span className="absolute bg-white top-1 right-1 px-4 py-1 uppercase text-xxs">
            {translate("terminado")}
          </span>
        )}
      </div>
      <div className="p-3 md:p-5 bg-beige">
        <div className="mb-10">
          <h2 className="title uppercase">{post_title[ctx.locale]}</h2>
          <h3 className="title font-extralight uppercase">
            {subtitle[ctx.locale]}
          </h3>
        </div>
        <div>
          <div className="flex mb-2">
            <span className="mr-5">{formattedDate}</span>
            <span className="uppercase font-extralight">
              {duration} {translate("dia")}
              {duration > 1 ? "S" : ""}
            </span>
          </div>
          <div className="flex text-xxs md:text-xs">
            <Link href={`/workshop/${slug.current}`}>
              <button className="btn btn-outline mr-2">
                {translate("btn-know-more")}
              </button>
            </Link>
            <a href={url}>
              <button className="btn btn-outline ">
                {translate("book-now")}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetiroCard;
