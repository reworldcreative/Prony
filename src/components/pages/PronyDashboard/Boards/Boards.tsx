import React, { FC, useState } from "react";
import "./Boards.scss";
import Header from "@/components/widgets/Header/Header";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import Button from "@/components/UI/buttons/Button/Button";
import eye from "@/assets/img/icons/eye.svg";
import lock from "@/assets/img/icons/lock.svg";
const Boards: FC = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <AsideMenu />
        <main className="pageContainer__main">
          <section className="board-MainSection">
            <Breadcrumbs />

            <div className="board-MainSection__top">
              <h1 className="title board-MainSection__title">Boards</h1>
              <Button type="primary">Create Board</Button>
            </div>

            <section className="boards">
              <div className="boards__header">
                <h2 className="boards__caption subtitle">Name</h2>
                <h2 className="boards__caption subtitle">Posts</h2>
              </div>

              <ul className="boards__list">
                <li className="boards__item">
                  <div className="boards__item_drag">
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
                  <p className="boards__title heading-h6">
                    Send status updates back through Intercom
                  </p>
                  <p className="boards__amount title-second">12</p>
                  <div className="boards__settings">
                    <button
                      className="boards__button"
                      aria-label="visibility change"
                    >
                      <img
                        className="boards__icon"
                        src={eye}
                        alt="visibility"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      />
                    </button>
                    <button className="boards__button" aria-label="lock change">
                      <img
                        className="boards__icon"
                        src={lock}
                        alt="lock"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      />
                    </button>

                    <button
                      className="boards__button boards__button-menu"
                      aria-label="menu"
                    >
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </button>
                  </div>
                </li>
              </ul>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Boards;
