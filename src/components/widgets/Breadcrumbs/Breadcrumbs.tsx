import React, { FC } from "react";
import "./Breadcrumbs.scss";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  currentTitle?: string;
  currentLink?: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ currentTitle, currentLink }) => {
  return (
    <div className="breadcrumbs">
      <Link to={"/"} className="breadcrumbs__item caption">
        Dashboard
      </Link>
      {currentTitle && (
        <>
          <span className="breadcrumbs__divider" aria-hidden="true">
            /
          </span>
          <Link to={currentLink} className="breadcrumbs__item breadcrumbs__item_active caption">
            {currentTitle}
          </Link>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
