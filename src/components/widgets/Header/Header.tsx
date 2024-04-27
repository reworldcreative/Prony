import React, { FC, useContext, useState } from "react";
import "./Header.scss";
import Logo from "../../UI/Logo/Logo";
import RadioButton from "../../UI/forms/RadioButton/RadioButton";
import HeaderUserMenu from "./components/HeaderUserMenu";
import { GlobalContext } from "../GlobalContext/GlobalContext";

interface HeaderProps {
  useOption?: boolean;
  addClass?: string;
}

const Header: FC<HeaderProps> = ({ useOption = true, addClass = "" }) => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleGetTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
  };
  
  return (
    <header className={`header ${addClass}`}>
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

        <HeaderUserMenu useOption={useOption} />
      </div>
    </header>
  );
};
export default Header;
