import React, { FC } from "react";
import "./Dashboard.scss";
import Header from "@/components/widgets/Header/Header";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import StatisticList from "./StatisticList/StatisticList";
import Chart from "@/components/widgets/Chart/Chart";
import { StatisticProvider } from "@/components/widgets/Chart/StatisticProvider";

const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <AsideMenu />
        <main className="pageContainer__main">
          <Breadcrumbs />
          <section className="dashboard-MainSection">
            <h1 className="title dashboard-MainSection__title">Dashboard</h1>
            <StatisticList />
            <StatisticProvider>
              <Chart />
            </StatisticProvider>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
