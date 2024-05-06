import React, { FC, useContext, useEffect, useState } from "react";
import "./Registration.scss";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "../../buttons/Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import SocialBlock from "../SocialBlock/SocialBlock";
import Login from "../Login/Login";

interface formProps {
  formTitle: string;
}

const Registration: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUp, setOpenPopUp, popUpData, setPopUpData, authorized, setAuthorized } = useContext(GlobalContext);
  const [KeepLogged, setKeepLogged] = useState<boolean>(true);
  const [isPasswordsMatched, setPasswordsMatched] = useState<boolean>(false);

  const isPasswordsMatch = (value: string) => {
    const password = watch("password");
    setPasswordsMatched(value === password);
    return value === password;
  };

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

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  const handleBack = () => {
    setPopUpData(<Login formTitle="Login" />);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form registration-form">
      <h2 className="title form__title registration-form__title">{formTitle}</h2>

      <div className="registration-form__wrapper">
        <div className="registration-form__inputs">
          <Input
            label="Your name"
            name="name"
            register={register}
            messageType={errors.name ? "error" : ""}
            value=""
            required={false}
            placeholder="Enter your name"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 30, message: "Maximum length should be 30" },
            }}
            messageText={errors?.name?.message.toString() || "error!"}
          />

          <Input
            label="Your last name"
            name="lastName"
            register={register}
            messageType={errors.lastName ? "error" : ""}
            value=""
            required={false}
            placeholder="Enter your last name"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 30, message: "Maximum length should be 30" },
            }}
            messageText={errors?.lastName?.message.toString() || "error!"}
          />

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

          <div className="registration-form__logged-block">
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
          </div>
        </div>

        <Button type="primary" buttonType="submit" addClass="registration-form__submit-button">
          Submit
        </Button>

        <button type="button" className="login-form__link" onClick={handleBack}>
          Login to your account
        </button>
      </div>

      <SocialBlock />
    </form>
  );
};

export default Registration;
