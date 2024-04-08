import React, { FC } from "react";
import "../Posts/Posts.scss";
import "./Activities.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";

const Activities: FC = () => {
  return (
    <section className="pageContainer-MainSection">
      <Breadcrumbs currentTitle={["Activities"]} currentLink={["/activities"]} />

      <div className="pageContainer-MainSection__top">
        <h1 className="title activities-MainSection__title">Activities</h1>
      </div>

      <section className="posts activities pageContainer-section"></section>
    </section>
  );
};

export default Activities;
