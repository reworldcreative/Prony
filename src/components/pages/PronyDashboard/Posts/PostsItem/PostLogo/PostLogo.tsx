import React, { FC } from "react";
import "./PostLogo.scss";
import PictureComponent from "@/../plugins/PictureComponent";

interface PostLogo {
  avatar: string;
  name: string;
  named?: boolean;
}

const PostLogo: FC<PostLogo> = ({ avatar, name, named = true }) => {
  return (
    <div className="posts-item__user">
      {avatar.length > 0 ? (
        <PictureComponent
          src={avatar}
          width="45"
          height="45"
          alt="avatar"
          ariaHidden={true}
          className="posts-item__user-avatar"
        />
      ) : (
        <div className="posts-item__user-avatar posts-item__user-avatar_skeleton text" aria-hidden="true">
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      {named && <p className="posts-item__user-name heading-h6">{name}</p>}
    </div>
  );
};

export default PostLogo;
