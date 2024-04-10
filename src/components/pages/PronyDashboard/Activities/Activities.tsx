import React, { FC, useState } from "react";
import "../Posts/Posts.scss";
import "./Activities.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import PostLogo from "../Posts/PostsItem/PostLogo/PostLogo";
import ActivitiesList from "@/data/Activities.json";
import Pagination from "@/components/UI/Pagination/Pagination";

const Activities: FC = () => {
  const ActivitiesData = [...ActivitiesList];
  const [perPage, setPerPage] = useState<string>("10");

  const activitiesPerPage: number = parseInt(perPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastActivity: number = currentPage * activitiesPerPage;
  const indexOfFirstActivity: number = indexOfLastActivity - activitiesPerPage;
  const currentActivities = ActivitiesData.slice(indexOfFirstActivity, indexOfLastActivity);

  const paginate = (pageNumber: number) => {
    pageNumber > 0 && pageNumber <= Math.ceil(ActivitiesData.length / activitiesPerPage) && setCurrentPage(pageNumber);
  };

  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["Activities"]} currentLink={["/activities"]} />

      <div className="pageContainer-MainSection__top">
        <h1 className="title activities-MainSection__title">Activities</h1>
      </div>

      <section className="posts activities pageContainer-section">
        <div className="activities__list">
          {currentActivities.map((item) => (
            <div className="activities__item" key={item.id}>
              <PostLogo avatar={item.picture} name={item.name} named={false} />

              <div>
                <p className="activities__item-name heading-h6">{item.name}</p>
                <p className="activities__item-status text">{item.status}</p>
              </div>

              <p className="activities__item-time text">{item.time}</p>

              <div className="activities__item-container">
                <p className="activities__item-caption subtitle-second">{item.caption}</p>
                <p className="activities__item-test text-second">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          totalPages={Math.ceil(ActivitiesData.length / activitiesPerPage)}
        />
      </section>
    </section>
  );
};

export default Activities;
