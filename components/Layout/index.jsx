import { memo } from "react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import Nav from "../Nav";
import Footer from "../Footer";
import Transition from "../Transition";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Nav lang="pt" />
      <Transition location={router.pathname}>
        <main className=" pt-16 md:pt-24">{children}</main>
      </Transition>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default memo(Layout);
