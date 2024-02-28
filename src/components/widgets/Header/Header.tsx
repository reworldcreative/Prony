import React, { FC, useContext, useState } from "react";
import "./Header.scss";
import Logo from "../../UI/Logo/Logo";
import RadioButton from "../../UI/forms/RadioButton/RadioButton";
import HeaderUserMenu from "./components/HeaderUserMenu";
import { GlobalContext } from "../GlobalContext/GlobalContext";
const Header: FC = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleGetTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
  };
  return (
    <header className="header">
      <Logo />

      <div className="header__menu">
        <div className="radio-header__container">
          <RadioButton
            labelText="Day theme"
            value="light"
            group="theme"
            getRadioValue={handleGetTheme}
            selectedValue={theme}
          />
          <RadioButton
            labelText="Night theme"
            value="dark"
            group="theme"
            getRadioValue={handleGetTheme}
            selectedValue={theme}
          />
        </div>

        <HeaderUserMenu useOption={true} />
      </div>
    </header>
  );
};
export default Header;
