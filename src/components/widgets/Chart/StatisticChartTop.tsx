import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import React, { FC, useContext } from "react";
import { StatisticContext } from "./StatisticProvider";
const StatisticChartTop: FC = () => {
  const { statisticValue, handleGetStatisticValue } =
    useContext(StatisticContext);
  return (
    <div className="statisticChart__radio-group">
      <RadioButton
        labelText="Users"
        value="Users"
        group="statistics"
        getRadioValue={handleGetStatisticValue}
        selectedValue={statisticValue}
      />
      <RadioButton
        labelText="Voters"
        value="Voters"
        group="statistics"
        getRadioValue={handleGetStatisticValue}
        selectedValue={statisticValue}
      />
      <RadioButton
        labelText="Posts"
        value="Posts"
        group="statistics"
        getRadioValue={handleGetStatisticValue}
        selectedValue={statisticValue}
      />
    </div>
  );
};

export default StatisticChartTop;
