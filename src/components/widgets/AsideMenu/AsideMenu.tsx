import React, { FC, useState, useRef, useEffect, useContext } from "react";
import "./AsideMenu.scss";
import AsideDashboardIcon from "@/assets/img/icons/asideMenu/asideDashboard.svg";
import AsideBoardsIcon from "@/assets/img/icons/asideMenu/asideBoards.svg";
import AsidePostsIcon from "@/assets/img/icons/asideMenu/asidePosts.svg";
import AsideStatusesIcon from "@/assets/img/icons/asideMenu/asideStatuses.svg";
import AsideUsersIcon from "@/assets/img/icons/asideMenu/asideUsers.svg";
import AsideChangelogIcon from "@/assets/img/icons/asideMenu/asideChangelog.svg";
import AsideSettingsIcon from "@/assets/img/icons/asideMenu/asideSettings.svg";
import AsideIntegrationsIcon from "@/assets/img/icons/asideMenu/asideIntegrations.svg";
import AsideMenuItem, { MenuItem } from "./AsideMenuItem";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const AsideMenu: FC = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const rootElement = document.getElementById("root");
  const asideMenuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const [focusedItem, setFocusedItem] = useState<number>(1);
  const asideNavigationRef = useRef<HTMLDivElement>(null);
  const {
    isOpenPopUp,
    setOpenPopUp,
    PopUpSettingsType,
    setPopUpSettingsType,
    isOpenPopUpSettings,
    setOpenPopUpSettings,
  } = useContext(GlobalContext);

  const handleOpenPopup = (type: string) => {
    setPopUpSettingsType(type);
    setOpenPopUp(false);
    setOpenPopUpSettings(true);
  };

  openMenu ? rootElement.classList.add("scroll-lock") : rootElement.classList.remove("scroll-lock");

  const menuLinks: MenuItem[] = [
    { text: "Dashboard", url: "/", icon: AsideDashboardIcon },
    { text: "Boards", url: "/boards", icon: AsideBoardsIcon },
    { text: "Posts", url: "/posts", icon: AsidePostsIcon },
    { text: "Statuses", url: "/statuses", icon: AsideStatusesIcon },
    { text: "Users", url: "/users", icon: AsideUsersIcon },
    { text: "Changelog", url: "/changelog", icon: AsideChangelogIcon },
    {
      text: "Settings",
      url: "",
      icon: AsideSettingsIcon,
      submenu: [
        { text: "User Segments", url: "/segments" },
        { text: "Statuses", url: "/statuses" },
        { text: "Changelog Labels", url: "/changelog-labels" },
        { text: "Email settings", click: () => handleOpenPopup("email") },
      ],
    },
    { text: "Integrations", url: "/integrations", icon: AsideIntegrationsIcon },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      asideMenuRef.current &&
      !burgerRef.current.contains(event.target as Node) &&
      !asideMenuRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Tab" && !event.shiftKey && asideNavigationRef.current) {
      event.preventDefault();
      const children = asideNavigationRef.current.children;

      if (children && children.length > 0) {
        if (focusedItem === asideNavigationRef.current.children.length) {
          burgerRef.current.focus();
          setFocusedItem(1);
        } else {
          setFocusedItem(focusedItem + 1);
          (children[focusedItem].childNodes[0] as HTMLElement)?.focus();
        }
      }
    }
  };

  return (
    <>
      <div className="burger">
        <button
          className="burger__button"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
          ref={burgerRef}
          tabIndex={0}
        >
          <span className="burger__line" aria-hidden="true" />
        </button>
      </div>

      <aside className={`asideMenu ${openMenu ? "asideMenu_open" : ""}`} ref={asideMenuRef}>
        <nav className="asideMenu__navigation" ref={asideNavigationRef} onKeyDown={handleTabKeyDown}>
          {menuLinks.map((link, index) => (
            <AsideMenuItem
              key={index}
              item={link}
              active={link.url.toLowerCase() === location.pathname.toLowerCase() ? true : false}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default AsideMenu;
