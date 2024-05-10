import React, { FC } from "react";
import "./PostVotersItem.scss";
import PostLogo from "../../Posts/PostsItem/PostLogo/PostLogo";

import logo from "@/assets/img/avatars/avatar_2.jpg";
import cancelIcon from "@/assets/img/icons/cancel.svg";

interface PostVotersItemProps {
  onDelete: (id: number) => void;
  id: number;
  name: string;
  time: string;
  icon: string;
}

const PostVotersItem: FC<PostVotersItemProps> = ({ onDelete, name, time, icon, id }) => {
  return (
    <div className="postVoters__item">
      <div className="postVoters__item-main">
        <div className="postVoters__user">
          <PostLogo avatar={icon} name={name} named={false} />

          <p className="postVoters__name heading-h6">{name}</p>
        </div>

        <p className="postVoters__time text">{time}</p>
      </div>

      <button
        className="postVoters__remove"
        type="button"
        aria-label="remove field"
        onClick={() => {
          onDelete(id);
        }}
      >
        <img src={cancelIcon} alt="remove" width="20" height="20" aria-hidden="true" loading="lazy" />
      </button>
    </div>
  );
};

export default PostVotersItem;
