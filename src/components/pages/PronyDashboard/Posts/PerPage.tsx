import React, { FC } from "react";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";

interface PerPageProps {
  current: string;
  onSelect: (value: string) => void;
}

const PerPage: FC<PerPageProps> = ({ current, onSelect }) => {
  return (
    <div className="container">
      <p className="text-second">Show:</p>
      <Dropdown type="bordered" current={current} options={["10", "20", "30"]} onSelect={onSelect} />
      <p className="text-second">per page</p>
    </div>
  );
};

export default PerPage;
