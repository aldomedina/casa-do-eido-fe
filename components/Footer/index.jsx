import Link from "next/link";
import logo from "../../assets/logo/horizontal-logo-1.svg";
import translate from "../../i18n/translate";
import MailchimpForm from "./MailchimpForm";

const footer_items = ["termos", "protecao", "faq"];

const Footer = () => {
  return (
    <div>
      <MailchimpForm />
      <div className="bg-beige">
        <div className=" container flex  flex-wrap justify-between items-center py-7 md:py-10 ">
          <div className="mb-5 md:mb-8 xl:mb-0">
            <img src={logo} className="w-48" />
          </div>
          <div className="flex flex-wrap">
            <ul className="mr-10 lg:mr-20 mb-3">
              {footer_items.map((item, i) => (
                <li key={item + i} className="text-xs uppercase mb-2">
                  <Link href={"/" + item}>
                    <a>{translate(item)}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mr-10 lg:mr-20 mb-3">
              <li className="text-xs uppercase mb-1">
                {translate("redes-sociais")}
              </li>
              <li className="text-xs font-extralight mb-1">facebook</li>
              <li className="text-xs font-extralight mb-1">instagram</li>
            </ul>
            <ul className="mr-10 lg:mr-20 mb-3">
              <li className="text-xs uppercase mb-1">
                {translate("contactos")}
              </li>
              <li className="text-xs font-extralight mb-1">+351 932 321 321</li>
              <li className="text-xs font-extralight mb-1">
                hello@casadoeido.com
              </li>
            </ul>
            <div className="mr-10 lg:mr-20">
              <h1 className="text-xs uppercase mb-1">{translate("morada")}</h1>
              <div className="text-xs font-extralight">
                Rua 2 nº6, 4845-044,
                <br /> Portugal
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
