import { useState, createContext } from "react";
import { I18nProvider, LOCALES } from "../i18n";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Layout from "../components/Layout";

export const LangContext = createContext();

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState("pt");
  const selectLang = e => setLocale(e);

  return (
    <LangContext.Provider value={{ locale, selectLang }}>
      <I18nProvider locale={LOCALES[locale]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </I18nProvider>
    </LangContext.Provider>
  );
}

export default MyApp;
