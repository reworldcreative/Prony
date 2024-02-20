import React, { createContext, useState, ReactNode } from "react";

interface StatisticContextType {
  statisticValue: "Users" | "Voters" | "Posts";
  handleGetStatisticValue: (
    newStatisticValue: "Users" | "Voters" | "Posts"
  ) => void;
}

const StatisticContext = createContext<StatisticContextType>({
  statisticValue: "Users",
  handleGetStatisticValue: () => {},
});

const StatisticProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [statisticValue, setStatisticValue] = useState<
    "Users" | "Voters" | "Posts"
  >("Users");

  const handleGetStatisticValue = (
    newStatisticValue: "Users" | "Voters" | "Posts"
  ) => {
    setStatisticValue(newStatisticValue);
  };

  return (
    <StatisticContext.Provider
      value={{ statisticValue, handleGetStatisticValue }}
    >
      {children}
    </StatisticContext.Provider>
  );
};

export { StatisticProvider, StatisticContext };
