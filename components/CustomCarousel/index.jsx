import { Carousel } from "react-responsive-carousel";
import next from "../../assets/img/next.svg";
import prev from "../../assets/img/prev.svg";

const CustomCarousel = ({ images, name, onImageClick, isFullGallery }) => {
  return (
    <>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        onClickItem={onImageClick}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev &&
          renderCustomArrow(
            onClickHandler,
            label,
            prev,
            { left: 15 },
            isFullGallery
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext &&
          renderCustomArrow(
            onClickHandler,
            label,
            next,
            { right: 15 },
            isFullGallery
          )
        }
      >
        {images &&
          images.map((el, i) => (
            <img
              key={name + "-image-" + i}
              src={el}
              className="h-full w-full"
            />
          ))}
      </Carousel>
    </>
  );
};

const renderCustomArrow = (
  onClickHandler,
  label,
  icon,
  customPos,
  isFullGallery
) => (
  <button
    type="button"
    onClick={onClickHandler}
    title={label}
    className={isFullGallery ? "fullGalleryArrows" : ""}
    style={{
      position: "absolute",
      zIndex: 2,
      top: "calc(50% - 15px)",
      width: 30,
      height: 30,
      cursor: "pointer",
      ...customPos,
    }}
  >
    <img src={icon} className="h-12 w-6" />
  </button>
);

export default CustomCarousel;
