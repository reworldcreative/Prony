import React, { FC } from "react";
import "./Activities.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import { useInView } from "react-intersection-observer";

interface ActivitiesItemProps {
  picture: string;
  name: string;
  status: string;
  caption: string;
  text?: string;
  time: string;
}
const ActivitiesItem: FC<ActivitiesItemProps> = ({ picture, name, status, caption, text, time }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <li className="dashboard-Activities__item" ref={ref}>
      {inView ? (
        <>
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
                <h3 className="dashboard-Activities__subtitle subtitle-second">{caption}</h3>
              </div>
              <div className="dashboard-Activities__time text">{time}</div>
            </div>
            {text !== "" && <p className="dashboard-Activities__text text-second">{text}</p>}
          </div>
        </>
      ) : (
        <div className="skeleton" />
      )}
    </li>
  );
};

export default ActivitiesItem;
