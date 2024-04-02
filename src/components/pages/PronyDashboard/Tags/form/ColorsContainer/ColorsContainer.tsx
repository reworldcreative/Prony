import React, { FC, useEffect, useState } from "react";
import "./ColorsContainer.scss";
import ColorSelector from "@/components/UI/forms/ColorSelector/ColorSelector";
import { FieldValues, RegisterOptions } from "react-hook-form";

const colors: string[] = [
  "#B71C1C",
  "#F44336",
  "#FF6B62",
  "#43A047",
  "#62C966",
  "#ADF1B0",
  "#0F498C",
  "#1565C0",
  "#4A98F1",
  "#A4CEFF",
  "#FF9800",
  "#FFD600",
  "#FFED8D",
  "#474747",
  "#818181",
  "#C4C4C4",
  "#6D28AE",
  "#BB6BD9",
  "#CD98FF",
  "#E6CBFF",
];

interface ColorsContainerProps {
  getValue?: (value: string) => void;
  field?: RegisterOptions<FieldValues>;
  defaultColor: string;
}

const ColorsContainer: FC<ColorsContainerProps> = ({ getValue, field, defaultColor }) => {
  const [currentColor, setCurrentColor] = useState(defaultColor);

  const handleChangeColor = (value: string) => {
    setCurrentColor(value);
  };

  field &&
    useEffect(() => {
      setCurrentColor(field.value);
      getValue(field.value);
    }, [field.value]);

  useEffect(() => {
    setCurrentColor(defaultColor);
  }, [defaultColor]);

  return (
    <div className="colors">
      {colors.map((color, index) => (
        <ColorSelector
          key={index}
          group="color"
          size="big"
          selectedValue={currentColor}
          value={color}
          getRadioValue={field ? undefined : handleChangeColor}
          field={field ? field : undefined}
        />
      ))}
    </div>
  );
};

export default ColorsContainer;
