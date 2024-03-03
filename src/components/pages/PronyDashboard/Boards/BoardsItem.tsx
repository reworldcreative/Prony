import React, { FC, useRef, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import eye from "@/assets/img/icons/eye.svg";
import lock from "@/assets/img/icons/lock.svg";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";
import OpenMenu from "@/components/UI/forms/OpenMenu/OpenMenu";
import { Link } from "react-router-dom";

interface BoardsItemProps {
  id: number;
  name: string;
  posts: number;
  locked: boolean;
  privacy: boolean;
}

interface Props {
  item: BoardsItemProps;
  lockItem: (lock: boolean) => void;
}

const BoardsItem: FC<Props> = ({ item, lockItem }) => {
  const controls = useDragControls();
  const [lockedMove, setLockedMove] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenuButtonRef = useRef<HTMLButtonElement>(null);

  const handleChangeLockedMove = () => {
    setLockedMove(!lockedMove);
    lockItem(lockedMove);
  };

  const openMenuLinks = [
    { icon: "./img/icons/eye.svg", text: "Public view", url: "/" },
    {
      icon: "./img/icons/menu/gear.svg",
      text: "Edit board settings",
      url: "/",
    },
    { icon: "./img/icons/menu/list.svg", text: "List board tags", url: "/" },
    { icon: "./img/icons/menu/pen.svg", text: "Edit board post", url: "/" },
    { icon: "./img/icons/menu/cross.svg", text: "Delete board", url: "/" },
    { icon: "./img/icons/menu/message.svg", text: "View posts", url: "/" },
  ];

  return (
    <Reorder.Item
      className="boards__item"
      value={item}
      dragListener={false}
      dragControls={controls}
    >
      <div
        className={`boards__item_drag ${
          !lockedMove ? "dragOn" : ""
        } reorder-handle`}
        onPointerDown={(e) => !lockedMove && controls.start(e)}
      >
        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="dot__col">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <p className="boards__title heading-h6">{item.name}</p>
      <p className="boards__amount title-second">
        {item.posts} <span className="visibility-hidden">posts</span>
      </p>
      <div className="boards__settings">
        <button className="boards__button" aria-label="visibility change">
          <img
            className="boards__icon"
            src={eye}
            alt="visibility"
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>

        <button
          className={`boards__button ${
            lockedMove ? "boards__button_active" : ""
          }`}
          aria-label={`${lockedMove ? "unlock" : "lock"} move`}
          onClick={handleChangeLockedMove}
        >
          <img
            className="boards__icon"
            src={lock}
            alt="lock"
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>

        <div aria-live="assertive">
          <OptionButton
            label={isOpenMenu ? "close" : "open"}
            addClass="boards__button boards__button-menu"
            click={() => setIsOpenMenu(!isOpenMenu)}
            buttonRef={openMenuButtonRef}
          />

          <OpenMenu
            isOpen={isOpenMenu}
            addClass={`boards__openMenu ${
              isOpenMenu ? "boards__openMenu_open" : ""
            }`}
            ariaHidden={!isOpenMenu}
            openButton={openMenuButtonRef}
          >
            {openMenuLinks.map((link, index) => (
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
            ))}
          </OpenMenu>
        </div>
      </div>
    </Reorder.Item>
  );
};

export default BoardsItem;
export { BoardsItemProps };
