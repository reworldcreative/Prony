import React, { FC, useState } from "react";
import "../Posts/Posts.scss";
import "./User.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import PostLogo from "../Posts/PostsItem/PostLogo/PostLogo";
import userStatistic from "../Users/userStatistic.json";
import usersListData from "@/data/Users.json";
import { userItemData } from "../Users/UsersItem/UsersItem";
import { useParams } from "react-router-dom";

import LastPosts from "@/data/LastPosts.json";
import LastVotes from "@/data/LastVotes.json";

const User: FC = () => {
  const { id } = useParams();
  const currentUser = usersListData.find((user) => user.id === Number(id));
  const [lastStatistic, setLastStatistic] = useState<"posts" | "votes">("posts");

  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["Users", "User"]} currentLink={["/users", `/user/${id}`]} />

      <div className="pageContainer-MainSection__top  pageContainerUser-MainSection__top">
        <h1 className="title user-MainSection__title">User Details</h1>
      </div>

      <section className="posts user pageContainer-section">
        <div className="user__info">
          <div>
            <div className="user__personal">
              <PostLogo avatar={currentUser.avatar} name={currentUser.name} named={false} />

              <div className="user__details">
                <h2 className="user__name title">{currentUser.name}</h2>

                <a href="mailto:anna_w@gmail.com" className="user__mail heading-h5">
                  {currentUser.mail}
                </a>

                <p className="user__time text">{currentUser.date}</p>
              </div>
            </div>

            <p className="user__role heading-h6">{currentUser.role}</p>
          </div>

          <div className="user__statistic">
            {userStatistic.map((statistic, index) => (
              <div className="user__statistic-item" key={index}>
                <img
                  src={statistic.icon}
                  alt="posts"
                  width="24"
                  height="24"
                  className="user__statistic-icon"
                  aria-hidden="true"
                />

                <p className="user__statistic-text subtitle">{statistic.text}</p>

                <p className="user__statistic-value title">
                  {currentUser[statistic.data as keyof userItemData].toString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="user__last" aria-live="assertive">
          <div className="user__last-top">
            <button
              className={`user__last-button ${lastStatistic === "posts" ? "active" : ""} heading-h6`}
              onClick={() => setLastStatistic("posts")}
              aria-label={lastStatistic === "posts" ? "is active" : "is not active"}
            >
              10 last posts
            </button>

            <button
              className={`user__last-button ${lastStatistic === "votes" ? "active" : ""} heading-h6`}
              onClick={() => setLastStatistic("votes")}
              aria-label={lastStatistic === "votes" ? "is active" : "is not active"}
            >
              10 last Votes
            </button>
          </div>

          <ul className="user__last-list">
            {lastStatistic === "posts"
              ? LastPosts.map((post) => (
                  <li className="user__last-item" key={post.id}>
                    <p className="user__last-value heading-h6">{post.value}</p>
                    <p className="user__last-title subtitle">{post.title}</p>
                    <p className="user__last-data text">{post.data}</p>
                  </li>
                ))
              : LastVotes.map((votes) => (
                  <li className="user__last-item" key={votes.id}>
                    <p className="user__last-title subtitle">{votes.title}</p>
                    <p className="user__last-data text">{votes.data}</p>
                  </li>
                ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default User;
