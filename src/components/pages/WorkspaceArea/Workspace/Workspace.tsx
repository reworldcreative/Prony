import React, { FC } from "react";
import "./Workspace.scss";
import like from "@icons/menu/like.svg";

const Planned = [
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
];

const InProgress = [
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
];

const ComingSoon = [
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
  {
    likes: 23,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
    text: "Board title",
  },
];

const Workspace: FC = () => {
  return (
    <div className="workspace">
      <section className="workspace-feedback">
        <p className="workspace__title workspace-feedback__title">Give feedback</p>
        <ul className="workspace-feedback__list">
          <li className="workspace-feedback__item">
            <p className="workspace-feedback__text">Board title</p>
            <p className="workspace-feedback__count">23</p>
          </li>

          <li className="workspace-feedback__item">
            <p className="workspace-feedback__text">Board title</p>
            <p className="workspace-feedback__count">23</p>
          </li>

          <li className="workspace-feedback__item">
            <p className="workspace-feedback__text">Board title</p>
            <p className="workspace-feedback__count">23</p>
          </li>
        </ul>
      </section>

      <section className="workspace-roadmap">
        <p className="workspace__title workspace-feedback__title">Roadmap</p>

        <div className="workspace-roadmap__wrapper">
          <div className="workspace-roadmap__container">
            <div className="text-second workspace-roadmap__label" style={{ background: "#1565c0" }}>
              Planned
            </div>

            <ul className="workspace-roadmap__list">
              {Planned.map((item, index) => (
                <li className="workspace-roadmap__item" key={index}>
                  <div className="workspace-roadmap__likes-container">
                    <img
                      src={like}
                      className="workspace-roadmap__icon"
                      alt="like icon"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    />
                    <p className="workspace-roadmap__likes">{item.likes}</p>
                  </div>

                  <div>
                    <p className="workspace-roadmap__title">{item.title}</p>
                    <p className="workspace-roadmap__text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="workspace-roadmap__container">
            <div className="text-second workspace-roadmap__label" style={{ background: "#F43658" }}>
              In progress
            </div>

            <ul className="workspace-roadmap__list">
              {InProgress.map((item, index) => (
                <li className="workspace-roadmap__item" key={index}>
                  <div className="workspace-roadmap__likes-container">
                    <img
                      src={like}
                      className="workspace-roadmap__icon"
                      alt="like icon"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    />
                    <p className="workspace-roadmap__likes">{item.likes}</p>
                  </div>

                  <div>
                    <p className="workspace-roadmap__title">{item.title}</p>
                    <p className="workspace-roadmap__text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="workspace-roadmap__container">
            <div className="text-second workspace-roadmap__label" style={{ background: "#757575" }}>
              Coming soon
            </div>

            <ul className="workspace-roadmap__list">
              {ComingSoon.map((item, index) => (
                <li className="workspace-roadmap__item" key={index}>
                  <div className="workspace-roadmap__likes-container">
                    <img
                      src={like}
                      className="workspace-roadmap__icon"
                      alt="like icon"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    />
                    <p className="workspace-roadmap__likes">{item.likes}</p>
                  </div>

                  <div>
                    <p className="workspace-roadmap__title">{item.title}</p>
                    <p className="workspace-roadmap__text">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workspace;
