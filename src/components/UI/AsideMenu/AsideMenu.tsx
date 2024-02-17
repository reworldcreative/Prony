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

const AsideMenu: FC = () => {
  const menuLinks: MenuItem[] = [
    { text: "Dashboard", url: "#", icon: AsideDashboardIcon },
    { text: "Boards", url: "#", icon: AsideBoardsIcon },
    { text: "Posts", url: "#", icon: AsidePostsIcon },
    { text: "Statuses", url: "#", icon: AsideStatusesIcon },
    { text: "Users", url: "#", icon: AsideUsersIcon },
    { text: "Changelog", url: "#", icon: AsideChangelogIcon },
    {
      text: "Settings",
      url: "#",
      icon: AsideSettingsIcon,
      submenu: [
        { text: "Settings 1", url: "#" },
        { text: "Settings 2", url: "#" },
      ],
    },
    { text: "Integrations", url: "#", icon: AsideIntegrationsIcon },
  ];

  return (
    <aside className="asideMenu">
      <nav className="asideMenu__navigation">
        {menuLinks.map((link, index) => (
          <AsideMenuItem key={index} item={link} />
        ))}
      </nav>
    </aside>
  );
};

export default AsideMenu;
