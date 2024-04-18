import React, { FC } from "react";
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  currentTitle?: string[];
  currentLink?: string[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ currentTitle, currentLink }) => {
  return (
    <div className="breadcrumbs">
      <Link to={"/"} className="breadcrumbs__item caption">
        Dashboard
      </Link>
      {currentTitle &&
        currentTitle.map((title, index) => (
          <React.Fragment key={index}>
            <span className="breadcrumbs__divider" aria-hidden="true">
              /
            </span>
            <Link
              to={currentLink[index]}
              className={`breadcrumbs__item breadcrumbs__item_active caption ${
                index === currentLink.length - 1 ? "breadcrumbs__item_last" : ""
              }`}
            >
              {title}
            </Link>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Breadcrumbs;
