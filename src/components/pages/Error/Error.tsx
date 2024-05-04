import React, { FC, useContext } from "react";
import "./Error.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Footer from "@/components/widgets/Footer/Footer";
import Header from "@/components/widgets/Header/Header";
import { Link } from "react-router-dom";

const Error: FC = () => {
  const { mainRoot } = useContext(GlobalContext);
  return (
    <div className="error">
      <div className="error__wrapper">
        <Header useOption={false} />

        <div className="error__container">
          <h1 className="error__title">unexpected error</h1>

          <div className="error__code">500</div>

          <p className="error__text">An error ocurred and your request couldn’t be completed.</p>

          <div className="error__buttons">
            <Link to={mainRoot} className="heading-h6 error__link">
              To home page
            </Link>

            <button className="error__button">Report this issue</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Error;
