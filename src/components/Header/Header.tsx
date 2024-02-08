import React, { FC } from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import RadioButton from "../RadioButton/RadioButton";
import HeaderUserMenu from "./components/HeaderUserMenu";
const Header: FC = () => {
  return (
    <header className="header">
      <Logo />

      <div className="header__menu">
        <div className="radio-header__container">
          <RadioButton
            labelText="Day theme"
            value="light"
            defaultChecked={true}
            group="theme"
          />
          <RadioButton labelText="Night theme" value="dark" group="theme" />
        </div>

        <HeaderUserMenu />
      </div>
    </header>
  );
};
export default Header;
