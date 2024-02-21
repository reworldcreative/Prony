import React, { FC } from "react";
import "./Activities.scss";
import PictureComponent from "@/../plugins/PictureComponent";

interface ActivitiesItemProps {
  picture: string;
  name: string;
  status: string;
  caption: string;
  text?: string;
  time: string;
}
const ActivitiesItem: FC<ActivitiesItemProps> = ({
  picture,
  name,
  status,
  caption,
  text,
  time,
}) => {
  return (
    <li className="dashboard-Activities__item">
      <PictureComponent
        src={picture}
        width="45"
        height="45"
        alt="avatar"
        className="dashboard-Activities__avatar"
        ariaHidden={true}
      />
      <div className="dashboard-Activities__wrapper">
        <div className="dashboard-Activities__block">
          <div className="dashboard-Activities__container">
            <h3 className="dashboard-Activities__name heading-h6">{name}</h3>
            <p className="dashboard-Activities__status text">{status}</p>
            <h3 className="dashboard-Activities__subtitle subtitle-second">
              {caption}
            </h3>
          </div>
          <div className="dashboard-Activities__time text">{time}</div>
        </div>
        {text !== "" && (
          <p className="dashboard-Activities__text text-second">{text}</p>
        )}
      </div>
    </li>
  );
};

export default ActivitiesItem;
