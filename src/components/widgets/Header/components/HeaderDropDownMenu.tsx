import React, { FC, useContext } from "react";
import "./HeaderDropDownMenu.scss";
import { Link } from "react-router-dom";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
const HeaderDropDownMenu: FC<{
  openButton?: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
}> = ({ openButton, isOpen }) => {
  const { authorized, setAuthorized,menuLinks,
    setMenuLinks } = useContext(GlobalContext);

  // const links = [
  //   { text: "Workspaces", url: "/client" },
  //   { text: "Profile", url: "/client/profile" },
  //   { text: "Logout", url: "", click: () => setAuthorized(false) },
  // ];

  return (
    <OpenMenu openButton={openButton} isOpen={isOpen} addClass={`headerDropDownMenu`}>
      {menuLinks.map((link, index) =>
        link.url !== "" ? (
          <Link key={index} to={link.url} className="heading-h6 headerDropDownMenu__link">
            {link.text}
          </Link>
        ) : (
          <button key={index} onClick={link.click} className="heading-h6 headerDropDownMenu__link">
            {link.text}
          </button>
        )
      )}
    </OpenMenu>
  );
};

export default HeaderDropDownMenu;
