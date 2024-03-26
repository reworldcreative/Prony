import React, { FC, useRef, useState } from "react";
import "./PostsItem.scss";
import Marker from "../Marker";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";

import like from "@/assets/img/icons/menu/like.svg";
import message from "@/assets/img/icons/menu/message.svg";
import { Link } from "react-router-dom";
import PostLogo from "./PostLogo/PostLogo";
import Tags from "./Tags/Tags";

interface PostsItemProps {
  id: number;
  avatar: string;
  name: string;
  title: string;
  time: string;
  text: string;
  tags: { name: string; color: "info" | "success" | "danger"; type: "standard" | "remove" }[];
  likes: number;
  posts: number;
  postImage?: string;
  deletePost?: (id: number) => void;
  editPost?: (id: number) => void;
  setFormType?: (value: "create" | "edit") => void;
}

export { PostsItemProps };

const PostsItem: FC<PostsItemProps> = ({
  id,
  avatar,
  name,
  title,
  time,
  text,
  tags,
  likes,
  posts,
  deletePost,
  editPost,
  setFormType,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const openMenuButtonRef = useRef<HTMLButtonElement>(null);

  const openMenuLinks = [
    {
      icon: "./img/icons/menu/pen.svg",
      text: `Edit post`,
      onClick: () => {
        setIsOpenMenu(false);
        setFormType("edit");
        editPost(id);
      },
    },
    {
      icon: "./img/icons/menu/cross.svg",
      text: `Delete post`,
      onClick: () => {
        setIsOpenMenu(false);
        deletePost(id);
      },
    },
    {
      icon: "./img/icons/menu/message.svg",
      text: `View post`,
      url: "/post-view",
    },
    {
      icon: "./img/icons/menu/merge.svg",
      text: `Merge post`,
      onClick: () => {},
    },
  ];

  return (
    <div className="posts-item">
      <PostLogo avatar={avatar} name={name} />

      <div className="posts-item__content">
        <div className="posts-item__top">
          <h3 className="posts-item__title heading-h6">{title}</h3>
          <p className="posts-item__time text">{time}</p>
        </div>

        <p className="posts-item__text text">{text}</p>

        <Tags tags={tags} />
      </div>

      <div className="posts-item__statistic">
        <div className="container">
          <div className="posts-item__statistic-item heading-h6" tabIndex={0}>
            <img
              className="posts-item__statistic-icon"
              src={like}
              alt="like icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            {likes.toString()} <span className="visibility-hidden">likes</span>
          </div>

          <div className="posts-item__statistic-item heading-h6" tabIndex={0}>
            <img
              className="posts-item__statistic-icon"
              src={message}
              alt="message icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            {posts.toString()} <span className="visibility-hidden">posts</span>
          </div>
        </div>
      </div>

      <div className="posts-item__menu">
        <div aria-live="assertive">
          <OptionButton
            title="open options menu"
            label={isOpenMenu ? "close" : "open"}
            click={() => setIsOpenMenu(!isOpenMenu)}
            buttonRef={openMenuButtonRef}
          />

          <OpenMenu
            isOpen={isOpenMenu}
            addClass={`posts-item__openMenu ${isOpenMenu ? "openMenu_open" : ""}`}
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

export default PostsItem;
