import React, { FC } from "react";
import "./Dashboard.scss";
import Header from "@/components/UI/Header/Header";
import AsideMenu from "@/components/UI/AsideMenu/AsideMenu";

const Dashboard: FC = () => {
  return (
    <>
      <Header />
      <AsideMenu />
      <main></main>
    </>
  );
};

export default Dashboard;
