import React, { FC } from "react";
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  currentTitle?: string[];
  currentLink?: string[];
  defaultTitle?: string;
  defaultLink?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  currentTitle,
  currentLink,
  defaultTitle = "Dashboard",
  defaultLink = "/",
}) => {
  return (
    <div className="breadcrumbs">
      <Link to={defaultLink} className="breadcrumbs__item caption">
        {defaultTitle}
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
              onClick={(event) => {
                if (index === currentLink.length - 1) {
                  event.preventDefault();
                }
              }}
            >
              {title}
            </Link>
          </React.Fragment>
        ))}
    </div>
  );
};

export default Breadcrumbs;
