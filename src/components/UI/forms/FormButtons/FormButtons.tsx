import React, { FC } from "react";
import "./FormButtons.scss";
import Button from "@/components/UI/buttons/Button/Button";

interface FormButtonsProps {
  onCancel: () => void;
  isValid: boolean;
  type: "primary" | "default" | "danger";
}
const FormButtons: FC<FormButtonsProps> = ({
  onCancel,
  isValid,
  type = "primary",
}) => {
  return (
    <div className="form__buttons">
      <Button
        addClass="form__button"
        type="default"
        buttonType="button"
        click={onCancel}
      >
        Cancel
      </Button>

      <Button
        addClass="form__button"
        type={type}
        buttonType="submit"
        disabled={!isValid}
      >
        Submit
      </Button>
    </div>
  );
};

export default FormButtons;
