import React, { FC, useContext } from "react";
import "./Logo.scss";

import LogoIcon from "@/assets/img/icons/logo/logo.svg";
import Logo_text from "@/assets/img/icons/logo/logo-text.svg";
// import Logo_text_dark from "@/assets/img/icons/logo/logo-text-dark.svg";
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
          src={LogoIcon}
          alt="logo icon"
          width="25"
          height="30"
        />

        <img
          className={`logo-text ${theme.theme}`}
          src={Logo_text}
          alt="logo text"
          width="102"
          height="24"
        />

        {/* <LogoIcon className="logo-icon" width="25" height="30" aria-label="logo icon"/> */}
      </div>
    </a>
  );
};
export default Logo;
