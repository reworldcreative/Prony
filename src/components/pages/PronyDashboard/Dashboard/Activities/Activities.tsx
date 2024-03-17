import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Activities.scss";
import ActivitiesItem from "./ActivitiesItem";
import activities from "@/data/Activities.json";

const Activities: FC = () => {
  return (
    <section className="dashboard-Activities box-container">
      <h2 className="dashboard-Activities__title title-second">Activities</h2>

      <ul className="dashboard-Activities__list">
        {activities.slice(0, 5).map((activity, index) => (
          <ActivitiesItem
            key={index}
            picture={activity.picture}
            name={activity.name}
            status={activity.status}
            caption={activity.caption}
            time={activity.time}
            text={activity.text ? activity.text : ""}
          />
        ))}
      </ul>

      <Link to={"/"} className="dashboard-Activities__link subtitle-second">
        View all <span className="visibility-hidden">activities</span>
      </Link>
    </section>
  );
};

export default Activities;
