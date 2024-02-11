import React, { FC } from "react";
import "./HeaderUserMenu.scss";
import PictureComponent from "@/../plugins/PictureComponent";

import avatar from "@/assets/img/avatars/avatar_1.png";
import OptionButton from "@/components/UI/OptionButton/OptionButton";

type HeaderUserMenuProps = {
  useOption: boolean;
};
const HeaderUserMenu: FC<HeaderUserMenuProps> = ({ useOption = false }) => {
  return (
    <div className="headerUserMenu">
      <PictureComponent
        src={avatar}
        height="40"
        width="40"
        className="headerUserMenu__avatar"
        alt="a guy with glasses"
      />

      <div className="headerUserMenu__info">
        <p className="headerUserMenu__name subtitle-second">Lucy Lavender</p>
        <div className="headerUserMenu__status">
          <span
            className="headerUserMenu__status_label online"
            aria-hidden="true"
          />
          <p className="headerUserMenu__status caption">Online</p>
        </div>
      </div>

      {useOption ? <OptionButton /> : false}
    </div>
  );
};

export default HeaderUserMenu;
