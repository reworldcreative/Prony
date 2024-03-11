import React, { FC } from "react";
import "./HeaderDropDownMenu.scss";
import { Link } from "react-router-dom";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
const HeaderDropDownMenu: FC<{
  openButton?: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
}> = ({ openButton, isOpen }) => {
  const links = [
    { text: "Workspaces", url: "/" },
    { text: "Profile", url: "/" },
    { text: "Logout", url: "/" },
  ];

  return (
    <OpenMenu
      openButton={openButton}
      isOpen={isOpen}
      addClass={`headerDropDownMenu`}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.url}
          className="heading-h6 headerDropDownMenu__link"
        >
          {link.text}
        </Link>
      ))}
    </OpenMenu>
  );
};

export default HeaderDropDownMenu;
