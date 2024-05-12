import React, { FC, Suspense } from "react";
import "./Dashboard.scss";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import StatisticList from "./StatisticList/StatisticList";
// import Chart from "@/components/widgets/Chart/Chart";
import { StatisticProvider } from "@/components/widgets/Chart/StatisticProvider";
// import Activities from "./Activities/Activities";
const Chart = React.lazy(() => import("@/components/widgets/Chart/Chart"));
const Activities = React.lazy(() => import("./Activities/Activities"));

const Dashboard: FC = () => {
  return (
    <>
      <section className="dashboard-MainSection">
        <Breadcrumbs />

        <h1 className="title dashboard-MainSection__title">Dashboard</h1>

        <StatisticList />

        <StatisticProvider>
          <Suspense fallback={<></>}>
            <Chart />
          </Suspense>
        </StatisticProvider>
      </section>

      <Suspense fallback={<></>}>
        <Activities />
      </Suspense>
    </>
  );
};

export default Dashboard;
