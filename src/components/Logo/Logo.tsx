import React from "react";
import "./logo.scss";

import logo from "@/img/logo.svg";
import logo_text from "@/img/logo-text.svg";

export default function Logo() {
  return (
    <a
      href="/"
      aria-label="Prony logo. Link to main page."
      className="logo-link"
    >
      <div className="logo" aria-hidden="true">
        <img
          className="logo-icon"
          src={logo}
          alt="logo icon"
          width="25"
          height="30"
        />
        <img
          className="logo-text"
          src={logo_text}
          alt="logo text"
          width="102"
          height="24"
        />
      </div>
    </a>
  );
}
