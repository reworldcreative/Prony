import React, { FC, useContext, useEffect, useState } from "react";
import "./ClientChangePasswordForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import FormButtons from "../FormButtons/FormButtons";
import Input from "../Input/Input";

interface formProps {
  submitSuccess: (newPassword: string) => void;
  formTitle: string;
}

const ClientChangePasswordForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [currentPassword, setCurrentPassword] = useState<string>("12345");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isCurrentPasswordCorrect, setCurrentPasswordCorrect] = useState<boolean>(false);
  const [isPasswordsMatched, setPasswordsMatched] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = () => {
    isCurrentPasswordCorrect && isPasswordsMatch && (submitSuccess(newPassword), setCurrentPassword(newPassword));
    setOpenPopUp(false);
    reset();
  };

  const onCancel = () => {
    setOpenPopUp(false);
    reset();
  };

  const checkCurrentPassword = (value: string) => {
    setCurrentPasswordCorrect(value === currentPassword);
    return value === currentPassword;
  };

  const isPasswordsMatch = (value: string) => {
    const newPassword = watch("newPassword");
    value === newPassword && setNewPassword(value);
    setPasswordsMatched(value === newPassword);
    return value === newPassword;
  };

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-change-password-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="workspaces-form__wrapper workspaces-change-password-form__wrapper">
        <Input
          label="Current password"
          name="currentPassword"
          register={register}
          messageType={errors.currentPassword ? "error" : ""}
          value=""
          required={false}
          placeholder="Enter current password"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 20, message: "Maximum length should be 20" },
            validate: { isMatch: (value) => checkCurrentPassword(value) || "incorrect current password" },
          }}
          messageText={errors?.currentPassword?.message.toString() || "error!"}
        />

        <Input
          label="New Password"
          name="newPassword"
          register={register}
          messageType={errors.newPassword ? "error" : ""}
          value=""
          required={false}
          placeholder="Enter new password"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 20, message: "Maximum length should be 20" },
          }}
          messageText={errors?.newPassword?.message.toString() || "error!"}
        />

        <Input
          label="Repeat New Password"
          name="repeatPassword"
          register={register}
          messageType={errors.repeatPassword ? "error" : ""}
          value=""
          required={false}
          placeholder="Enter new password"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 20, message: "Maximum length should be 20" },
            validate: { isMatch: (value) => isPasswordsMatch(value) || "Passwords must matched" },
          }}
          messageText={errors?.repeatPassword?.message.toString() || "error!"}
        />
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default ClientChangePasswordForm;
