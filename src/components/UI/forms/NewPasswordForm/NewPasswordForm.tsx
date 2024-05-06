import React, { FC, useContext } from "react";
import "./NewPasswordForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../../buttons/Button/Button";

interface formProps {
  formTitle: string;
}

const NewPasswordForm: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUp, setOpenPopUp, popUpData, setPopUpData, authorized, setAuthorized } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    setOpenPopUp(false);
  };

  const isPasswordsMatch = (value: string) => {
    const password = watch("password");
    return value === password;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form new-password-form">
      <h2 className="title form__title new-password-form__title">{formTitle}</h2>

      <div className="new-password-form__wrapper">
        <Input
          label="Your password"
          name="password"
          register={register}
          messageType={errors.password ? "error" : ""}
          value=""
          required={false}
          type="password"
          placeholder="Enter your password"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 30, message: "Maximum length should be 30" },
          }}
          messageText={errors?.password?.message.toString() || "error!"}
        />

        <Input
          label="Confirm password"
          name="confirmPassword"
          register={register}
          messageType={errors.confirmPassword ? "error" : ""}
          value=""
          required={false}
          type="password"
          placeholder="Confirm password"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 30, message: "Maximum length should be 30" },
            validate: { isMatch: (value) => isPasswordsMatch(value) || "Passwords must matched" },
          }}
          messageText={errors?.confirmPassword?.message.toString() || "error!"}
        />
      </div>

      <Button type="primary" buttonType="submit" addClass="form new-password-form__submit-button">
        Submit
      </Button>
    </form>
  );
};

export default NewPasswordForm;
