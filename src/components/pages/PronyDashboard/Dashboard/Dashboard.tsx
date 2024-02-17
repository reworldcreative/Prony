import React, { FC } from "react";
import "./Dashboard.scss";
import Header from "@/components/widgets/Header/Header";
import AsideMenu from "@/components/widgets/AsideMenu/AsideMenu";
import Breadcrumbs from "@/components/widgets/Breadcrumbs/Breadcrumbs";
import StatisticList from "./StatisticList/StatisticList";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

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

            <div>
              <Line
                data={{
                  labels: ["January", "February", "March", "April"],
                  datasets: [
                    {
                      label: "Users",
                      data: [3000, 5000, 3500, 8000, 10000],
                      borderColor: "#1565c0",
                      backgroundColor: (context) => {
                        const bgColor = [
                          "rgba(3, 184, 253, 0.46)",
                          "rgba(3, 184, 253,  0.1)",
                        ];

                        if (!context.chart.chartArea) {
                          return;
                        }

                        const {
                          ctx,
                          data,
                          chartArea: { top, bottom },
                        } = context.chart;
                        const gradientBg = ctx.createLinearGradient(
                          0,
                          top,
                          0,
                          bottom
                        );
                        gradientBg.addColorStop(0.8, bgColor[0]);
                        gradientBg.addColorStop(1, bgColor[1]);
                        return gradientBg;
                      },
                      borderWidth: 2,
                      cubicInterpolationMode: "monotone",
                      fill: true,
                      pointBackgroundColor: "#1565c0",
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  scales: {
                    y: {
                      ticks: {
                        maxTicksLimit: 4,
                        stepSize: 5000,
                      },
                      suggestedMin: 0,
                      suggestedMax: 15000,
                    },
                  },
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Statistic",
                    },
                  },
                }}
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
