import React, { FC, useContext } from "react";
import "./logo.scss";

import logo from "@/img/logo.svg";
import logo_text from "@/img/logo-text.svg";
import logo_text_dark from "@/img/logo-text-dark.svg";
import { ThemeContext } from "../ThemeContextType/ThemeContextType";

const Logo: FC = () => {
  const theme = useContext(ThemeContext);
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
        {theme.theme === "light" ? (
          <img
            className="logo-text"
            src={logo_text}
            alt="logo text"
            width="102"
            height="24"
          />
        ) : theme.theme === "dark" ? (
          <img
            className="logo-text"
            src={logo_text_dark}
            alt="logo text"
            width="102"
            height="24"
          />
        ) : (
          <></>
        )}
      </div>
    </a>
  );
};
export default Logo;
