import { useState, createContext } from "react";
import { I18nProvider, LOCALES } from "../i18n";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Layout from "../components/Layout";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#000",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export const LangContext = createContext();

function MyApp({ Component, pageProps, router }) {
  const [locale, setLocale] = useState("pt");
  const selectLang = e => setLocale(e);

  return (
    <LangContext.Provider value={{ locale, selectLang }}>
      <I18nProvider locale={LOCALES[locale]}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </I18nProvider>
    </LangContext.Provider>
  );
}

export default MyApp;
