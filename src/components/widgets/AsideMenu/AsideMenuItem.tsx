import React, { FC, useContext, useState } from "react";
import UpArrowIcon from "@/assets/img/icons/UpArrow.svg";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Link } from "react-router-dom";

interface MenuItem {
  text: string;
  url: string;
  icon: string;
  submenu?: SubMenuItem[];
}

interface SubMenuItem {
  text: string;
  url?: string;
  click?: () => void;
}

const AsideMenuItem: FC<{ item: MenuItem; active?: boolean }> = ({ item, active }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubmenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const theme = useContext(GlobalContext);
  return (
    <>
      {item.url !== "" ? (
        <Link to={item.url} className={`asideMenu__item ${isSubmenuOpen ? "open" : ""}`}>
          <div className={`asideMenu__link-container ${active ? "active" : ""}`} tabIndex={0}>
            <div className="asideMenu__link-wrapper">
              <img
                src={item.icon}
                alt={item.text}
                width={20}
                height={20}
                aria-hidden="true"
                className={`asideMenu__icon ${theme.theme}`}
              />
              <p className="asideMenu__link subtitle-second">{item.text}</p>
            </div>
            {item.submenu && (
              <button
                className="asideMenu__sub-button"
                aria-label={`${isSubmenuOpen ? "close" : "open"} ${item.text} sub menu`}
                onClick={toggleSubmenuOpen}
              >
                <img
                  src={UpArrowIcon}
                  alt="submenu"
                  width={12}
                  height={7}
                  aria-hidden="true"
                  className={`asideMenu__sub-icon ${theme.theme}`}
                />
              </button>
            )}
          </div>
        </Link>
      ) : (
        <div
          className={`asideMenu__item-button asideMenu__item ${isSubmenuOpen ? "open" : ""}`}
          onClick={toggleSubmenuOpen}
        >
          <div className={`asideMenu__link-container ${active ? "active" : ""}`} tabIndex={0}>
            <div className="asideMenu__link-wrapper">
              <img
                src={item.icon}
                alt={item.text}
                width={20}
                height={20}
                aria-hidden="true"
                className={`asideMenu__icon ${theme.theme}`}
              />
              <p className="asideMenu__link subtitle-second">{item.text}</p>
            </div>
            {item.submenu && (
              <button
                className="asideMenu__sub-button"
                aria-label={`${isSubmenuOpen ? "close" : "open"} ${item.text} sub menu`}
                onClick={toggleSubmenuOpen}
              >
                <img
                  src={UpArrowIcon}
                  alt="submenu"
                  width={12}
                  height={7}
                  aria-hidden="true"
                  className={`asideMenu__sub-icon ${theme.theme}`}
                />
              </button>
            )}
          </div>
          {isSubmenuOpen && (
            <div className="asideMenu__submenu">
              {item.submenu.map((subItem, subIndex) =>
                subItem.click ? (
                  <button
                    key={subIndex}
                    onClick={
                      subItem.click}
                    className="asideMenu__submenu-link caption"
                  >
                    {subItem.text}
                  </button>
                ) : (
                  <Link key={subIndex} to={subItem.url} className="asideMenu__submenu-link caption">
                    {subItem.text}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AsideMenuItem;
export { MenuItem, SubMenuItem };
