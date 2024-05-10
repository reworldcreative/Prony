import React, { FC, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "./UsersItem.scss";
import PostLogo from "../../Posts/PostsItem/PostLogo/PostLogo";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
import userStatistic from "../userStatistic.json";

export interface userItemData {
  id: number;
  avatar: string;
  name: string;
  mail: string;
  date: string;
  role: string;
  posts: number;
  votes: number;
  comments: number;
}

interface userItemProps {
  itemData: userItemData;
  deleteUser?: (id: number) => void;
}

const UsersItem: FC<userItemProps> = ({ itemData, deleteUser }) => {
  const openMenuLinks = [
    {
      icon: "./img/icons/menu/change.svg",
      text: `Change user role`,
      onClick: () => {},
    },
    {
      icon: "./img/icons/menu/cross.svg",
      text: `Delete user`,
      onClick: () => {
        deleteUser(itemData.id);
      },
    },
    {
      icon: "./img/icons/menu/info.svg",
      text: `Ban user`,
      onClick: () => {},
    },
    {
      icon: "./img/icons/menu/star.svg",
      text: `User roles`,
      url: "",
    },
  ];

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="users-item">
      <PostLogo avatar={itemData.avatar} name={itemData.name} named={false} />

      <div className="users-item__info">
        <Link to={`/user/${itemData.id}`} className="users-item__name heading-h6" aria-label="go po personal user page">
          {itemData.name}
        </Link>
        <a href="mailto:anna_w@gmail.com" className="users-item__mail subtitle">
          {itemData.mail}
        </a>
        <p className="users-item__time text">{itemData.date}</p>
      </div>

      <div className="users-item__statistic">
        {userStatistic.map((statistic, index) => (
          <div className="users-item__statistic-item" key={index}>
            <img
              src={statistic.icon}
              alt={statistic.text}
              width="16"
              height="16"
              className="users-item__statistic-icon"
              aria-hidden="true"
            />

            <p className="users-item__statistic-data heading-h6">
              {itemData[statistic.data as keyof userItemData].toString()}
            </p>
          </div>
        ))}
      </div>

      <p className={`users-item__role ${itemData.role} heading-h6`}>{itemData.role}</p>

      <div className="users-item__menu">
        <div aria-live="assertive">
          <OptionButton
            title="open options menu"
            label={isOpenMenu ? "close" : "open"}
            click={(e) => {
              e.preventDefault();
              setIsOpenMenu(!isOpenMenu);
            }}
            buttonRef={openMenuButtonRef}
          />

          <OpenMenu
            isOpen={isOpenMenu}
            addClass={`users-item__openMenu ${isOpenMenu ? "openMenu_open" : ""}`}
            ariaHidden={!isOpenMenu}
            openButton={openMenuButtonRef}
          >
            {openMenuLinks.map((link, index) =>
              link.url ? (
                <Link to={link.url} className="openMenu__item" key={index}>
                  <img
                    src={link.icon}
                    className="openMenu__icon"
                    alt={link.text}
                    aria-hidden="true"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <span className="text openMenu__text">{link.text}</span>
                </Link>
              ) : (
                <button onClick={link.onClick} className="openMenu__item" key={index}>
                  <img
                    src={link.icon}
                    className="openMenu__icon"
                    alt={link.text}
                    aria-hidden="true"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <span className="text openMenu__text">{link.text}</span>
                </button>
              )
            )}
          </OpenMenu>
        </div>
      </div>
    </div>
  );
};

export default UsersItem;
