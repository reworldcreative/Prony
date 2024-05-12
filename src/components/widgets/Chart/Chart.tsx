import React, { FC, useContext, useState } from "react";
import "./Chart.scss";
import { StatisticContext } from "./StatisticProvider";
import StatisticChartTop from "./StatisticChartTop";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import statisticData from "@/data/Statistic.json";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const Chart: FC = () => {
  const { statisticValue, handleGetStatisticValue } = useContext(StatisticContext);

  const [statisticRange, setStatisticRange] = useState<string>("last 90 days");

  const getPastDayNumber = (n: number): string => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - n);
    return currentDate.getDate().toString().padStart(2, "0");
  };

  const getLastNDaysLabels = (period: string): string[] => {
    const [, daysStr] = period.split(" ");
    const days = parseInt(daysStr);
    if (isNaN(days)) return [];

    const currentDate = new Date();
    const labels: string[] = [];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (days === 7) {
      for (let i = 6; i >= 0; i--) {
        const pastDate = new Date();
        pastDate.setDate(currentDate.getDate() - i);
        labels.push(pastDate.getDate().toString().padStart(2, "0"));
      }
      return labels;
    }

    if (days === 30) {
      for (let i = 29; i >= 0; i--) {
        const pastDate = new Date();
        pastDate.setDate(currentDate.getDate() - i);
        labels.push(pastDate.getDate().toString().padStart(2, "0"));
      }
      return labels;
    }

    if (days === 90) {
      for (let i = 89; i >= 0; i--) {
        const pastDate = new Date();
        pastDate.setDate(currentDate.getDate() - i);
        const monthName = monthNames[pastDate.getMonth()];
        if (!labels.includes(monthName)) {
          labels.push(monthName);
        }
      }
      return labels;
    }

    // Заповнюємо масив місяців для останніх N днів, де N більше 90
    const monthsInLastNDays: string[] = [];
    for (let i = 0; i < days; i++) {
      const pastDate = new Date();
      pastDate.setDate(currentDate.getDate() - i);
      if (i >= 90) break;
      const monthName = monthNames[pastDate.getMonth()];
      if (!monthsInLastNDays.includes(monthName)) {
        monthsInLastNDays.push(monthName);
      }
    }

    // Перевіряємо, чи є місяці, що відповідають масиву monthsInLastNDays, і додаємо їх до масиву міток
    monthsInLastNDays.forEach((month) => {
      labels.push(month);
    });

    // Додаємо поточний місяць
    const currentMonthName = monthNames[currentDate.getMonth()];
    if (!labels.includes(currentMonthName)) {
      labels.push(currentMonthName);
    }

    return labels;
  };

  const getLastNDaysData = (data: number[], period: string): number[] => {
    const lastNDaysData: number[] = [];
    const [, daysStr] = period.split(" ");
    const days = parseInt(daysStr);
    if (isNaN(days)) return [];

    for (let i = 0; i < days; i++) {
      if (i < data.length) {
        lastNDaysData.push(data[i]);
      } else {
        lastNDaysData.push(0);
      }
    }

    if (days === 90) {
      const currentDate = new Date();
      const startDate = new Date(currentDate);
      startDate.setDate(currentDate.getDate() - days);

      const monthData: { [key: string]: number[] } = {};

      // Розподіл даних за кожний місяць
      for (let i = 0; i < lastNDaysData.length; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        const month = date.toLocaleString("default", { month: "long" });
        if (!monthData[month]) {
          monthData[month] = [];
        }
        monthData[month].push(lastNDaysData[i]);
      }

      const resultData: number[] = [];

      // Розрахунок середнього значення для кожного місяця
      Object.values(monthData).forEach((monthValues: number[]) => {
        const sum = monthValues.reduce((acc, curr) => acc + curr, 0);
        const average = sum / monthValues.length;
        resultData.push(average);
      });
      return resultData;
    } else {
      return lastNDaysData;
    }
  };

  const backgroundColors: Record<"Users" | "Voters" | "Posts", string> = {
    Users: "#1565C0",
    Voters: "#43A047",
    Posts: "#FF9800",
  };

  function modifyColor(color: string, transparency: number): string {
    const rgbaColor = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => {
      return "#" + r + r + g + g + b + b;
    });

    const rgbValues = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(rgbaColor);
    if (!rgbValues) {
      throw new Error("Invalid color format");
    }

    const [, red, green, blue] = rgbValues.map((val) => parseInt(val, 16));

    return `rgba(${red}, ${green}, ${blue}, ${transparency})`;
  }

  return (
    <section className="statisticChart box-container">
      <div className="statisticChart__header">
        <div className="statisticChart__header-container">
          <h2 className="statisticChart__title title-second">Statistic</h2>
          <StatisticChartTop />
        </div>
        <Dropdown
          options={["last 90 days", "last 30 days", "last 7 days"]}
          current={statisticRange}
          onSelect={setStatisticRange}
        />
      </div>

      <Line
        className="statisticChart__chart"
        data={{
          labels: getLastNDaysLabels(statisticRange).reverse(),
          datasets: [
            {
              label: statisticValue,
              data: getLastNDaysData(statisticData[statisticValue], statisticRange),
              borderColor: backgroundColors[statisticValue],
              backgroundColor: (context) => {
                const bgColor = [
                  modifyColor(backgroundColors[statisticValue], 0.46),
                  modifyColor(backgroundColors[statisticValue], 0.1),
                ];

                if (!context.chart.chartArea) {
                  return;
                }

                const {
                  ctx,
                  data,
                  chartArea: { top, bottom },
                } = context.chart;
                const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                gradientBg.addColorStop(0.9, bgColor[0]);
                gradientBg.addColorStop(1, bgColor[1]);
                return gradientBg;
              },
              borderWidth: 2,
              cubicInterpolationMode: "monotone",
              fill: true,
              pointBackgroundColor: backgroundColors[statisticValue],
            },
          ],
        }}
        options={{
          responsive: true,
          scales: {
            x: {
              reverse: true,
              ticks: {
                color: "#757575",
                font: {
                  size: 12,
                  weight: "normal",
                  family: "Nunito",
                },
              },
            },

            y: {
              ticks: {
                maxTicksLimit: 4,
                stepSize: 5000,
                color: "#757575",
                font: {
                  size: 12,
                  weight: "normal",
                  family: "Nunito",
                },
              },
              suggestedMin: 0,
              suggestedMax: 15000,
            },
          },
          plugins: {
            legend: {
              position: "top",
              display: false,
            },
            title: {
              display: false,
              text: "Statistic",
            },
          },
        }}
      />
    </section>
  );
};

export default Chart;
