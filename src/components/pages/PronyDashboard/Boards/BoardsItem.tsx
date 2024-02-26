import React, { FC, useState } from "react";
import { Reorder, useDragControls } from "framer-motion";
import eye from "@/assets/img/icons/eye.svg";
import lock from "@/assets/img/icons/lock.svg";
import OptionButton from "@/components/UI/buttons/OptionButton/OptionButton";

interface BoardsItemProps {
  id: number;
  name: string;
  posts: number;
  draggable: boolean;
}

interface Props {
  item: BoardsItemProps;
  lockItem: (lock: boolean) => void;
}

const BoardsItem: FC<Props> = ({ item, lockItem }) => {
  const controls = useDragControls();
  const [lockedMove, setLockedMove] = useState(false);

  const handleChangeLockedMove = () => {
    setLockedMove(!lockedMove);
    lockItem(lockedMove);
  };
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
      <p className="boards__amount title-second">{item.posts}</p>
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
          aria-label="lock change"
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

        <OptionButton
          label="menu"
          addClass="boards__button boards__button-menu"
        />
      </div>
    </Reorder.Item>
  );
};

export default BoardsItem;
export { BoardsItemProps };
