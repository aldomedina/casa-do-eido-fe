import { ToastContainer } from "react-toastify";

import Nav from "../Nav";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Nav lang="pt" />
      <main className="pt-16 md:pt-24">{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
