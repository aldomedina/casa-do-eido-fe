import Head from "next/head";
import Layout from "../components/Layout";
import translate from "../i18n/translate";
import heroImg from "../assets/img/hero@2x.webp";
import casaImg from "../assets/img/casa@2x.webp";
import acomodacaoImg from "../assets/img/acomodacao@2x.webp";
import HomeCard from "../components/HomeElements/HomeCard";
import FolhasSection from "../components/FolhasSection";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-beige mb-24 md:mb-56">
        <div className="container flex flex-col md:flex-row h-90v md:h-70v p-5 md:px-10 md:py-0">
          <div className="w-full h-75v md:w-55v md:h-full flex flex-col md:flex-row items-start md:items-end md:mt-20">
            <div
              className=" relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImg})` }}
            ></div>
            <div className="z-10 -mt-16 md:mt-0 md:-ml-24 bg-white rounded-full min-h-36 min-w-36 md:min-h-48 md:min-w-48 flex flex-col items-center justify-center">
              <h2 className="capitalize text-lg md:text-xl font-light whitespace-pre-wrap text-center leading-4 md:leading-6 mb-2 md:mb-3">
                {translate("home-hero-circle")}
              </h2>
              <div>
                <button className="btn btn-outline text-xxs py-1 px-1">
                  {translate("btn-know-more")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end md:justify-center">
            <h1 className="uppercase text-xxl md:text-xxxl text-right md:text-center font-light -mt-16 md:mt-28">
              {translate("home-hero-title")}
              <br />
              <span>casa do eido!</span>
            </h1>
          </div>
        </div>
      </section>
      {/* A CASA & ACOMODAÇÕES */}
      <section className="mb-36">
        <div className="bg-beige container flex full-w flex-col md:flex-row p-5 md:p-10 md:pt-20">
          <HomeCard
            title={translate("a-casa")}
            content={translate("home-a-casa-content")}
            img={casaImg}
            imgCustomClass="mb-5"
            customClasses="flex-1 md:mr-10 md:-mt-32 mb-10 md:mb-0"
          />
          <HomeCard
            title={translate("acomodacoes")}
            content={translate("home-acomodacoes-content")}
            img={acomodacaoImg}
            imgCustomClass="mb-5"
            customClasses="flex-1"
          />
        </div>
      </section>
      {/* EXPERIENCIAS */}
      <FolhasSection hasBtn>
        <h2 className="text-xl font-regular uppercase mb-10 text-center">
          {translate("experiencias")}
        </h2>
        <ul className="text-center">
          {Array.apply(null, Array(11)).map((el, i) => (
            <li key={"exp-list-" + i} className="font-light mb-3">
              {translate("home-experiencias-content-" + i)}
            </li>
          ))}
        </ul>
      </FolhasSection>
      {/* RETIROS */}
      <section className="mb-36">
        <div className="bg-beige container flex full-w flex-col md:flex-row px-5 md:px-10">
          <HomeCard
            title={translate("retiros")}
            content={translate("home-retiros-content")}
            img={casaImg}
            imgCustomClass="mb-5 md:mb-0 md:mr-10 -mt-10 md:-mt-20"
            customClasses="md:flex-row py-0 items-end pb-10"
            contentCustomClass=" md:w-3/5"
          />
        </div>
      </section>
      {/* EXPLORE */}
      <section className="mb-36">
        <div className="container flex full-w flex-col md:flex-row px-5 md:px-10">
          <div className="md:w-6/12 text-center mx-auto">
            <h2 className="title mb-5">{translate("explore")}</h2>
            <p className="text-md font-light mb-5">
              {translate("home-explore-content")}
            </p>
            <button className="btn btn-outline text-xxs py-1 px-2">
              {translate("btn-know-more")}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
