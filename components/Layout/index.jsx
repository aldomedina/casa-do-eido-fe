import { memo, useState, createContext } from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import Nav from "../Nav";
import Footer from "../Footer";
import Transition from "../Transition";
import FullGallery from "../FullGallery";

export const GalleryContext = createContext();

const DEFAULT_LANGUAGE = "pt";

const Layout = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState(false);
  const [galleryName, setGalleryName] = useState(false);
  const router = useRouter();
  const setImages = images => setGalleryImages(images);
  const setName = name => setGalleryName(name);
  return (
    <div className="min-h-screen">
      <Nav lang={DEFAULT_LANGUAGE} />
      <Transition location={router.pathname}>
        <GalleryContext.Provider value={{ setImages, setName }}>
          <main className=" pt-16 md:pt-24">{children}</main>
        </GalleryContext.Provider>
      </Transition>
      <Footer />

      <ToastContainer />
      <FullGallery
        isOpen={galleryImages}
        images={galleryImages}
        closeGallery={() => setGalleryImages(false)}
        name={galleryName}
      />
    </div>
  );
};

export default memo(Layout);
