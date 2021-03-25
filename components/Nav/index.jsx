import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "../../assets/logo/horizontal-logo.svg";
import smallLogo from "../../assets/logo/small-logo-1.svg";
import LangControls from "./LangControls";
import useWindowSize from "../hooks/WindowSize";
import translate from "../../i18n/translate";

const menu_items = ["a-casa", "acomodacoes", "experiencias", "explore", "blog"];
function Nav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowSize();

  return (
    <div className="z-20 top-0 left-0	w-full fixed bg-white flex flex-col shadow-md">
      <ul
        className="block lg:hidden transition-all duration-300 truncate px-4"
        style={{ height: isOpen ? height - 64 : 0 }}
      >
        {menu_items.map((item, i) => (
          <li
            key={item + i + "mobile"}
            className={`uppercase  text-mobile-menu mr-5  ${
              router.pathname === item ? "font-bold" : "font-medium"
            } `}
          >
            <Link href={"/" + item}>
              <a>{translate(item)}</a>
            </Link>
          </li>
        ))}
        <li className="mr-5">
          <button className="btn btn-outline border-4 mt-3 text-mobile-menu">
            {translate("bookNow")}
          </button>
        </li>
        <LangControls customClass="text-xxl mt-3" />
      </ul>
      <div className="h-16 md:h-24 container flex justify-between items-center uppercase">
        <Link href="/">
          <div>
            <img
              className="hidden lg:block cursor-pointer max-w-sm xl:max-w-lg"
              src={logo}
              alt="logo"
            />
            <img
              className="block lg:hidden cursor-pointer max-w-lg"
              src={smallLogo}
              alt="logo"
            />
          </div>
        </Link>
        <ul className="items-center flex">
          {menu_items.map((item, i) => (
            <li
              key={item + i}
              className={`${
                router.pathname === item ? "font-bold" : undefined
              } text-xs mr-5 hidden md:block`}
            >
              <Link href={`/${item}`}>
                <a> {translate(item)}</a>
              </Link>
            </li>
          ))}
          <li className="mr-5">
            <button
              className={`btn btn-outline text-xs ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              {translate("bookNow")}
            </button>
          </li>
          <li>
            <button
              className="block md:hidden"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </li>
          <LangControls customClass="text-xxs hidden md:block" />
        </ul>
      </div>
    </div>
  );
}

export default Nav;
