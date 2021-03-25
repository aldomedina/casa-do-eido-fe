import FolhasSection from "../../components/FolhasSection";
import translate from "../../i18n/translate";
import HomeCard from "../../components/HomeElements/HomeCard";
import casa1 from "../../assets/img/casa/casa-1@2x.webp";
import casa2 from "../../assets/img/casa/casa-2@2x.webp";

const ContentCard = num => (
  <>
    <p className="font-light mb-5">
      {translate(`experiencias-card-${num}-p-1`)}
    </p>
    <p className="font-light mb-5">
      {translate(`experiencias-card-${num}-p-2`)}
    </p>
    <p className="font-light mb-5">
      {translate(`experiencias-card-${num}-p-3`)}
    </p>
  </>
);

const Experiencias = () => {
  return (
    <>
      <FolhasSection customClass="mb-20 md:mb-28">
        <h2 className="title text-center my-10 md:my-0 md:mb-10">
          {translate("experiencias")}
        </h2>
        <p className="text-md font-light mb-5">
          {translate("experiencias-p-1")}
        </p>
        <p className="text-md font-light mb-5">
          {translate("experiencias-p-2")}
        </p>
        <p className="text-md font-light">{translate("experiencias-p-3")}</p>
      </FolhasSection>

      <section className="mb-36">
        <div className="bg-beige container flex full-w flex-col md:flex-row p-5 md:p-10 md:pt-20">
          <HomeCard
            title={translate("experiencias-card-1-title")}
            content={ContentCard(1)}
            img={casa1}
            imgCustomClass="mb-5"
            customClasses="flex-1 md:mr-10 md:-mt-32 mb-10 md:mb-0"
          />
          <HomeCard
            title={translate("experiencias-card-2-title")}
            content={ContentCard(2)}
            img={casa2}
            imgCustomClass="mb-5"
            customClasses="flex-1"
          />
        </div>
      </section>
    </>
  );
};

export default Experiencias;
