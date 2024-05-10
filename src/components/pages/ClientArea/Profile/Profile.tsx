import React, { FC, useContext, useEffect, useState } from "react";
import "./Profile.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { FieldValues, useForm } from "react-hook-form";
import checkIcon from "@icons/check.svg";
import Input from "@/components/UI/forms/Input/Input";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

const Profile: FC = () => {
  const { breadcrumbsLinks, setBreadcrumbsLinks, breadcrumbsTitles, setBreadcrumbsTitles } = useContext(GlobalContext);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [infoStyle, setInfoStyle] = useState({
    display: "none",
  });

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

  useEffect(() => {
    setBreadcrumbsLinks(["/profile"]);
    setBreadcrumbsTitles(["Social accounts"]);
  }, []);

  const onSubmit = (data: FieldValues) => {
    setInfoStyle({ display: "flex" });
    setFirstName(data.FirstName);
    setLastName(data.LastName);
    setEmail(data.Email);
    setTimeout(() => {
      setInfoStyle({ display: "none" });
    }, 3000);
  };

  const onCancel = () => {
    reset();
  };

  return (
    <div className="profile">
      <h1 className="title clientPage__main-title profile__title">user information</h1>
      <div className="profile__container">
        <div className="text-second profile__info client-info" style={infoStyle}>
          <img
            src={checkIcon}
            alt="info icon"
            className="profile__icon client-info__icon"
            width="18"
            height="18"
            aria-hidden="true"
            loading="lazy"
          />
          Your settings have been updated successfully
        </div>

        <div className="clientPage__container profile__wrapper">
          <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form profile-form">
            <Input
              label="First name"
              name="FirstName"
              register={register}
              messageType={errors.FirstName ? "error" : ""}
              value={firstName}
              required={false}
              placeholder="Enter your first name"
              settings={{
                required: "must be filled",
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 20, message: "Maximum length should be 20" },
              }}
              messageText={errors?.FirstName?.message.toString() || "error!"}
            />

            <Input
              label="Last name"
              name="LastName"
              register={register}
              messageType={errors.LastName ? "error" : ""}
              value={lastName}
              required={false}
              placeholder="Enter your last name"
              settings={{
                required: "must be filled",
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 20, message: "Maximum length should be 20" },
              }}
              messageText={errors?.LastName?.message.toString() || "error!"}
            />

            <Input
              label="Email"
              name="Email"
              register={register}
              messageType={errors.Email ? "error" : ""}
              value={email}
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

            <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
