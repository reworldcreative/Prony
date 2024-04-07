import React, { FC } from "react";
import "../Posts/Posts.scss";
import "./User.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import PostLogo from "../Posts/PostsItem/PostLogo/PostLogo";
import userStatistic from "../Users/userStatistic.json";
import usersListData from "@/data/Users.json";
import { userItemData } from "../Users/UsersItem/UsersItem";
import { useParams } from "react-router-dom";

const User: FC = () => {
  const { id } = useParams();
  const currentUser = usersListData.find((user) => user.id === Number(id));

  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["Users", "User"]} currentLink={["/users", "/user"]} />

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

                <a href="mailto:anna_w@gmail.com" className="user__mail subtitle">
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
      </section>
    </section>
  );
};

export default User;
