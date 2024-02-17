import React, { FC } from "react";
import "./StatisticList.scss";

interface StatisticListData {
  text: string;
  element: number;
}

const statisticList: StatisticListData[] = [
  { text: "Boards", element: 123 },
  { text: "Users", element: 1623 },
  { text: "Posts", element: 1623 },
  { text: "Votes", element: 1623 },
];

const StatisticList: FC = () => {
  return (
    <ul className="statisticList">
      {statisticList.map((item, index) => (
        <li className="statisticList__item" key={index}>
          <p className="statisticList__caption subtitle">{item.text}</p>
          <p className="statisticList__element title">
            <span className="visibility-hidden">{item.element}</span>
            <span aria-hidden="true">{item.element.toLocaleString()}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StatisticList;
