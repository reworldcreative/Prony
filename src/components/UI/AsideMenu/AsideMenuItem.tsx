import React, { FC, useContext, useState } from "react";
import UpArrowIcon from "@/assets/img/icons/UpArrow.svg";
import { ThemeContext } from "../ThemeContextType/ThemeContextType";
interface MenuItem {
  text: string;
  url: string;
  icon: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  url: string;
}

const AsideMenuItem: FC<{ item: MenuItem }> = ({ item }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubmenuOpen = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const theme = useContext(ThemeContext);
  return (
    <div className={`asideMenu__item ${isSubmenuOpen ? "open" : ""}`}>
      <div className="asideMenu__link-container">
        <div className="asideMenu__link-wrapper">
          <img
            src={item.icon}
            alt={item.text}
            width={20}
            height={20}
            aria-hidden="true"
            className={`asideMenu__icon ${theme.theme}`}
          />
          <a href={item.url} className="asideMenu__link subtitle-second">
            {item.text}
          </a>
        </div>
        {item.submenu && (
          <button
            className="asideMenu__sub-button"
            aria-label={`${isSubmenuOpen ? "close" : "open"} ${
              item.text
            } sub menu`}
            onClick={toggleSubmenuOpen}
          >
            <img
              src={UpArrowIcon}
              alt="submenu"
              width={12}
              height={7}
              aria-hidden="true"
              className="asideMenu__sub-icon"
            />
          </button>
        )}
      </div>
      {isSubmenuOpen && (
        <div className="asideMenu__submenu">
          {item.submenu.map((subItem, subIndex) => (
            <a
              key={subIndex}
              href={subItem.url}
              className="asideMenu__submenu-link caption"
            >
              {subItem.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsideMenuItem;
export { MenuItem, SubMenuItem };
