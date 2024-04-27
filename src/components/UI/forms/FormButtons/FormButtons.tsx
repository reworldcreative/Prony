import React, { FC } from "react";
import "./FormButtons.scss";
import Button from "@/components/UI/buttons/Button/Button";

interface FormButtonsProps {
  onCancel: () => void;
  onSubmit?: () => void;
  isValid: boolean;
  type: "primary" | "default" | "danger";
}
const FormButtons: FC<FormButtonsProps> = ({ onCancel, onSubmit, isValid, type = "primary" }) => {
  return (
    <div className="form__buttons">
      <Button addClass="form__button" type="default" buttonType="button" click={onCancel}>
        Cancel
      </Button>

      <Button addClass="form__button" type={type} buttonType="submit" disabled={!isValid} click={onSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default FormButtons;
