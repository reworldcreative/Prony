import React, { FC } from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import HeaderRadio from "./components/HeaderRadio";
const Header: FC = () => {
  return (
    <header className="header">
      <Logo />

      <div className="radio-header__container">
        <HeaderRadio
          labelText="Day theme"
          value="light"
          defaultChecked={true}
        />
        <HeaderRadio labelText="Night theme" value="dark" />

        {/* <div className="radio__container">
          <input
            type="radio"
            id="light"
            name="theme"
            value="light"
            defaultChecked
          />
          <label htmlFor="light" className="radio-label text">
            Day theme
          </label>
        </div>

        <div className="radio__container">
          <input type="radio" id="dark" name="theme" value="dark" />
          <label htmlFor="dark" className="radio-label text">
            Night theme
          </label>
        </div>*/}
      </div>
    </header>
  );
};
export default Header;
