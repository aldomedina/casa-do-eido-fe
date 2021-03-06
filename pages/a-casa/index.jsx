import { useContext } from "react";
import { GalleryContext } from "../../components/Layout";

import FolhasSection from "../../components/FolhasSection";
import translate from "../../i18n/translate";
import CustomCarousel from "../../components/CustomCarousel";
import casa1 from "../../assets/img/casa/casa-1@2x.webp";
import casa2 from "../../assets/img/casa/casa-2@2x.webp";
import casa3 from "../../assets/img/casa/casa-3@2x.webp";
import jardim1 from "../../assets/img/casa/jardim-1@2x.webp";

const images = [casa1, casa2, casa3, jardim1];
const ACasa = () => {
  const ctx = useContext(GalleryContext);
  return (
    <>
      <FolhasSection customClass="mb-20 md:mb-28">
        <h2 className="title text-center my-10 md:my-0 md:mb-10">
          {translate("a-casa")}
        </h2>
        <p className="text-md font-light mb-5">{translate("a-casa-p-1")}</p>
        <p className="text-md font-light mb-5">{translate("a-casa-p-2")}</p>
      </FolhasSection>
      <section className="mb-20 md:mb-36">
        <div className="container md:max-w-65v">
          <CustomCarousel
            images={images}
            onImageClick={() => {
              ctx.setName("a-casa");
              ctx.setImages(images);
            }}
          />
        </div>
      </section>
      <section className="mb-20">
        <div className="container bg-beige p-5 md:p-10 flex flex-col  md:flex-row md:pt-36">
          <div className="flex-1">
            <div
              className="w-full h-full min-h-60v md:min-h-0 mb-10 md:mb-0 bg-cover bg-center md:-mt-56"
              style={{ backgroundImage: `url(${casa1})` }}
            />
          </div>
          <div className="flex-1 md:pl-10">
            <h2 className="title mb-5">
              {translate("a-casa-sustentabilidade")}
            </h2>
            <p className="mb-5 font-light">{translate("a-casa-p-s-1")}</p>
            <p className="mb-5 font-light">{translate("a-casa-p-s-2")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ACasa;
