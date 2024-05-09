import React, { FC, useContext } from "react";
import "./ResetPassword.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Button from "../../buttons/Button/Button";
import NewPasswordForm from "../NewPasswordForm/NewPasswordForm";
import Login from "../Login/Login";

interface formProps {
  formTitle: string;
}

const ResetPassword: FC<formProps> = ({ formTitle }) => {
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
    setPopUpData(<NewPasswordForm formTitle="New password" />);
  };

  const handleBack = () => {
    setPopUpData(<Login formTitle="Login" />);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form reset-form">
      <h2 className="title form__title reset-form__title">{formTitle}</h2>

      <div className="reset-form__wrapper">
        <p className="reset-form__text">
          Forgot your password? Enter your email address below, and we'll email you instructions to set a new one.
        </p>

        <Input
          label="Your email"
          name="Email"
          register={register}
          messageType={errors.Email ? "error" : ""}
          value=""
          required={false}
          placeholder="Enter your email"
          settings={{
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Please enter a valid email address",
            },
          }}
          messageText={errors?.Email?.message.toString() || "error!"}
        />

        <div className="reset-form__buttons">
          <Button type="primary" buttonType="submit" addClass="reset-form__submit-button">
            Submit
          </Button>

          <button type="button" className="login-form__link" onClick={handleBack}>
            Login to your account
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPassword;
