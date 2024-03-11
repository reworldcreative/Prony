import React, { FC, useState, useRef } from "react";
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

const AsideMenu: FC = () => {
  const location = useLocation();
  const menuLinks: MenuItem[] = [
    { text: "Dashboard", url: "/", icon: AsideDashboardIcon },
    { text: "Boards", url: "/boards", icon: AsideBoardsIcon },
    { text: "Posts", url: "/posts", icon: AsidePostsIcon },
    { text: "Statuses", url: "/statuses", icon: AsideStatusesIcon },
    { text: "Users", url: "/users", icon: AsideUsersIcon },
    { text: "Changelog", url: "/changelog", icon: AsideChangelogIcon },
    {
      text: "Settings",
      url: "/settings",
      icon: AsideSettingsIcon,
      submenu: [
        { text: "Settings 1", url: "/settings1" },
        { text: "Settings 2", url: "/settings2" },
      ],
    },
    { text: "Integrations", url: "/integrations", icon: AsideIntegrationsIcon },
  ];

  return (
    <aside className="asideMenu">
      <nav className="asideMenu__navigation">
        {menuLinks.map((link, index) => (
          <AsideMenuItem
            key={index}
            item={link}
            active={link.url.toLowerCase() === location.pathname.toLowerCase() ? true : false}
          />
        ))}
      </nav>
    </aside>
  );
};

export default AsideMenu;
