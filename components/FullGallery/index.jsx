import CustomCarousel from "../CustomCarousel";

const FullGallery = ({ isOpen, closeGallery, name, images }) => (
  <div
    className={`z-30 bg-black top-0 left-0  ${
      !!isOpen ? "fixed h-screen w-screen" : "hidden"
    }`}
  >
    <div className="flex flex-col h-full">
      <div className="px-10 py-5 absolute w-full z-20">
        <button
          className="text-xxxxl text-white font-extralight float-right"
          onClick={closeGallery}
        >
          X
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="md:max-w-70v">
          <CustomCarousel
            name={name}
            images={images}
            onImageClick={closeGallery}
            isFullGallery
          />
        </div>
      </div>
    </div>
  </div>
);

export default FullGallery;
