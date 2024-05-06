import React, { FC, useContext, useEffect, useState } from "react";
import "./Login.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../../buttons/Button/Button";
import SocialBlock from "../SocialBlock/SocialBlock";
import Registration from "../Registration/Registration";
import ResetPassword from "../ResetPassword/ResetPassword";

interface formProps {
  formTitle: string;
}

const Login: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUp, setOpenPopUp, popUpData, setPopUpData, authorized, setAuthorized } = useContext(GlobalContext);
  const [KeepLogged, setKeepLogged] = useState<boolean>(true);

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
    setKeepLogged(data.KeepLogged);
    setAuthorized(true);
    setOpenPopUp(false);
  };

  const handleOpenRegister = () => {
    setPopUpData(<Registration formTitle="User registration" />);
  };

  const handleResetForm = () => {
    setPopUpData(<ResetPassword formTitle="Reset password" />);
  };

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form login-form">
      <h2 className="title form__title login-form__title">{formTitle}</h2>

      <div className="login-form__wrapper">
        <div className="login-form__inputs">
          <Input
            label="Your login"
            name="login"
            register={register}
            messageType={errors.login ? "error" : ""}
            value=""
            required={false}
            placeholder="Enter your login"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 30, message: "Maximum length should be 30" },
            }}
            messageText={errors?.login?.message.toString() || "error!"}
          />

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

          <div className="login-form__logged-block">
            <Controller
              name="KeepLogged"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  labelText="Keep me logged in"
                  name="KeepLogged"
                  value="KeepLogged"
                  type="secondary"
                  size="big"
                  field={field}
                  defaultChecked={KeepLogged}
                />
              )}
            />

            <button type="button" className="login-form__link" onClick={handleResetForm}>
              Forgot password
            </button>
          </div>
        </div>

        <Button type="primary" buttonType="submit" addClass="login-form__submit-button">
          Submit
        </Button>

        <p className="login-form__create-block">
          Don’t have an account?{" "}
          <button type="button" className="login-form__link" onClick={handleOpenRegister}>
            Create a new account
          </button>
        </p>
      </div>

      <SocialBlock />
    </form>
  );
};

export default Login;
