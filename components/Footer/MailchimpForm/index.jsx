import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import translate from "../../../i18n/translate";
import { injectIntl } from "react-intl";

const MailchimpForm = ({ intl }) => {
  const inputEl = useRef(null);

  const handleSubscription = async e => {
    e.preventDefault();

    try {
      await axios.post("/api/subscribe", {
        email: inputEl.current.value,
      });
      toast.success("Subscribed!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (e) {
      toast.error(e.response.data.error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      inputEl.current.value = "";
    }
  };
  return (
    <div className="bg-beige mb-4 ">
      <form
        onSubmit={handleSubscription}
        className="container flex flex-col md:flex-row md:justify-between md:items-center text-sm py-3"
      >
        <label className="mb-2 md:mr-10 md:mb-0" htmlFor="email-input">
          {translate("newsletter")}
        </label>
        <div className="flex flex-1">
          <input
            className="px-4 py-2 font-extralight flex-1 mr-6"
            id="email-input"
            type="email"
            placeholder={intl.formatMessage({ id: "email-placeholder" })}
            ref={inputEl}
            required
          />
          <button className="btn btn-white" type="submit">
            {translate("subscribe")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default injectIntl(MailchimpForm);
