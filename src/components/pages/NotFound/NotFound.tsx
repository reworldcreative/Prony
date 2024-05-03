import React, { FC, useContext } from "react";
import "./NotFound.scss";
import Header from "@/components/widgets/Header/Header";
import Footer from "@/components/widgets/Footer/Footer";
import { Link } from "react-router-dom";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

const NotFound: FC = () => {
  const { mainRoot } = useContext(GlobalContext);

  return (
    <div className="notFound">
      <div className="notFound__wrapper">
        <Header useOption={false} />

        <div className="notFound__container">
          <h1 className="notFound__title">SOMETHING wrong</h1>

          <div className="notFound__code">
            4<span className="notFound__mobile-text">0</span>
            <div className="donut">
              <div className="bite"></div>
            </div>
            4
          </div>

          <p className="notFound__text">This page is missing or you assembled the link incorrectly</p>

          <Link to={mainRoot} className="heading-h6 notFound__link">
            To home page
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
