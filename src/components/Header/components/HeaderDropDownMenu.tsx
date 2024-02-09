import React, { FC } from "react";
import "./headerDropDownMenu.scss";
const HeaderDropDownMenu: FC = () => {
  return (
    <nav className="headerDropDownMenu">
      <a href="/" className="heading-h6 headerDropDownMenu__link">
        Workspaces
      </a>
      <a href="/" className="heading-h6 headerDropDownMenu__link">
        Profile
      </a>
      <a href="/" className="heading-h6 headerDropDownMenu__link">
        Logout
      </a>
    </nav>
  );
};

export default HeaderDropDownMenu;
