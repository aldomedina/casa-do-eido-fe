import React, { Fragment } from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import messages from "./messages";
import { LOCALES } from "./locales";

const Provider = ({ children, locale = LOCALES.pt }) => {
  function onError(e) {
    if ((e.code = ReactIntlErrorCode.MISSING_DATA)) {
      return;
    }
    console.error(e);
  }
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
      onError={onError}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
