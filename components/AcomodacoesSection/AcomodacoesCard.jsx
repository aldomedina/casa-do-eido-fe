import { useState } from "react";
import translate from "../../i18n/translate";
import FullGallery from "../FullGallery";
import CustomCarousel from "../CustomCarousel";

const AcomodacoesCard = ({ item }) => {
  const { name, size, features, images } = item;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <div className="md:-ml-20 flex flex-col md:flex-row mb-10 p-5 md:p-0">
      <div className="flex-1 h-max mb-5 md:mb-0 md:mr-10">
        <CustomCarousel
          name={name}
          images={images}
          onImageClick={() => setIsGalleryOpen(true)}
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium mb-5">{name}</h3>
        <p className="font-light mb-2">{size}</p>
        <ul>
          {features.map(el => (
            <li key={name + el} className="font-light mb-2">
              <span className="text-xs font-bold mr-2">+</span>
              <span>{translate("acomodacoes-features-" + el)}</span>
            </li>
          ))}
        </ul>
      </div>
      <FullGallery
        isOpen={isGalleryOpen}
        images={images}
        name={name}
        closeGallery={() => setIsGalleryOpen(false)}
      />
    </div>
  );
};

export default AcomodacoesCard;
