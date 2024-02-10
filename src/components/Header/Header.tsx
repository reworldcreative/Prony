import React, { FC, useContext, useState } from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import RadioButton from "../RadioButton/RadioButton";
import HeaderUserMenu from "./components/HeaderUserMenu";
import { ThemeContext } from "../ThemeContextType/ThemeContextType";
import HeaderDropDownMenu from "./components/HeaderDropDownMenu";
const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false);

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

        {openHeaderMenu ? <HeaderDropDownMenu /> : <></>}
      </div>
    </header>
  );
};
export default Header;
