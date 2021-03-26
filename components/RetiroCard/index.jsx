import { useEffect, useState } from "react";
import translate from "../../i18n/translate";
import { getMD } from "../../utils";
import Link from "next/link";

const RetiroCard = ({ item }) => {
  const { img, title, subtitle, date_start, date_end, duration } = item;
  const [isPast, setIsPast] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setIsPast(Date.now() - date_start > 0);

    const final =
      date_end && duration > 1
        ? `${getMD(date_start)} — ${getMD(date_end)}`
        : getMD(date_start);
    setFormattedDate(final);
  }, [date_start]);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="min-h-55v md:min-h-50v w-full bg-cover bg-center"
        />
        {isPast && (
          <span className="absolute bg-white top-1 right-1 px-4 py-1 uppercase text-xxs">
            {translate("terminado")}
          </span>
        )}
      </div>
      <div className="p-3 md:p-5 bg-beige">
        <div className="mb-10">
          <h2 className="title uppercase">{title}</h2>
          <h3 className="title font-extralight uppercase">{subtitle}</h3>
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
            <Link href="/retiros/test-blog-post">
              <button className="btn btn-outline mr-2">
                {translate("btn-know-more")}
              </button>
            </Link>
            <button className="btn btn-outline ">
              {translate("book-now")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetiroCard;
