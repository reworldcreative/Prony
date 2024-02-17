import React, { FC, useRef, useState } from "react";
import "./HeaderUserMenu.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import avatar from "@/assets/img/avatars/avatar_1.png";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import HeaderDropDownMenu from "./HeaderDropDownMenu";

type HeaderUserMenuProps = {
  useOption: boolean;
};
const HeaderUserMenu: FC<HeaderUserMenuProps> = ({ useOption = false }) => {
  const [openHeaderMenu, setOpenHeaderMenu] = useState(false);
  const handleChangeOpenHeaderMenu = () => {
    setOpenHeaderMenu(!openHeaderMenu);
  };
  const dropDownMenuButtonRef = useRef<HTMLButtonElement>(null);
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

      {useOption ? (
        <OptionButton
          click={handleChangeOpenHeaderMenu}
          buttonRef={dropDownMenuButtonRef}
          label={!openHeaderMenu ? "open" : "close"}
        />
      ) : (
        false
      )}

      <div aria-live="assertive">
        <div aria-label={`menu is ${openHeaderMenu ? "open" : "close"}`}>
          {openHeaderMenu ? (
            <HeaderDropDownMenu openButton={dropDownMenuButtonRef} />
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUserMenu;
