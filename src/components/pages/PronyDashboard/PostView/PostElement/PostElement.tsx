import React, { FC } from "react";
import "./PostElement.scss";
import PostLogo from "../../Posts/PostsItem/PostLogo/PostLogo";
import PictureComponent from "@/../plugins/PictureComponent";

import like from "@/assets/img/icons/menu/like.svg";
import edit from "@/assets/img/icons/menu/pen.svg";
import message from "@/assets/img/icons/menu/message.svg";
import deleteIcon from "@/assets/img/icons/menu/cross.svg";
import lock from "@/assets/img/icons/lock.svg";

interface PostElementProps {
  avatar: string;
  name: string;
  text: string;
  data: string;
  likes: number;
  isActive?: boolean;
  children?: JSX.Element;
  image?: string;
  openPopupImage?: (image: string) => void;
}

const PostElement: FC<PostElementProps> = ({
  avatar,
  name,
  text,
  data,
  likes,
  image,
  isActive = false,
  children,
  openPopupImage,
}) => {
  return (
    <div className={`post-element ${isActive ? "active" : ""}`}>
      <PostLogo avatar={avatar} name={name} named={false} />

      <div className="post-element__container">
        <div className="post-element__top">
          <div className="post-element__statistic-item text">
            <img
              className="post-element__statistic-icon"
              src={like}
              alt="like icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            {likes} likes
          </div>

          <div className="post-element__time text">{data}</div>
        </div>

        <p className="post-element__name heading-h6">{name}</p>

        <p className="post-element__text text">{text}</p>

        {image && (
          <div
            onClick={() => {
              openPopupImage(image);
            }}
          >
            <PictureComponent src={image} alt="interior" className="post-element__image" height="170" width="245" />
          </div>
        )}

        <div className="post-element__menu">
          <button className="post-element__menu-element text">
            <img
              className="post-element__menu-icon"
              src={edit}
              alt="edit icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            Edit
          </button>

          <button className="post-element__menu-element text">
            <img
              className="post-element__menu-icon"
              src={message}
              alt="reply icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            Reply
          </button>

          <button className="post-element__menu-element text">
            <img
              className="post-element__menu-icon"
              src={deleteIcon}
              alt="delete icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            Delete
          </button>

          <button className="post-element__menu-element text">
            <img
              className="post-element__menu-icon"
              src={lock}
              alt="private icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
            Privat
          </button>
        </div>

        {children && <div className="post-element__sub-element">{children}</div>}
      </div>
    </div>
  );
};

export default PostElement;
