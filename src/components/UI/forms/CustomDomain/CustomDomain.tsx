import React, { FC, useContext, useState } from "react";
import "./CustomDomain.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import FormButtons from "../FormButtons/FormButtons";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../Input/Input";
import infoIcon from "@icons/info.svg";

interface formProps {
  formTitle: string;
}

const CustomDomain: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUpSettings, setOpenPopUpSettings } = useContext(GlobalContext);
  const [domain, setDomain] = useState<string>("");

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
    setDomain(data.domain);
    setOpenPopUpSettings(false);
  };

  const onCancel = () => {
    setOpenPopUpSettings(false);
  };

  return (
    <div className="custom-domain">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="custom-domain__wrapper">
        <div className="custom-domain__text-wrapper">
          <p className="subtitle">
            We've created prony.canny.io for you. Instead, you can use your own website (feedback.yoursite.com). Just
            add the domain below then follow{" "}
            <a href="#" className="custom-domain__link">
              these instructions
            </a>
            .
          </p>

          <p className="subtitle">Set your primary domain to update the links we use in our product/emails.</p>
        </div>

        {domain === "" && <p className="custom-domain__label text">You have not set up any custom domains</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="custom-domain__form">
          <Input
            label="Domain"
            name="domain"
            register={register}
            messageType={errors.domain ? "error" : ""}
            value={domain}
            required={false}
            placeholder="Enter domain"
            settings={{
              required: false,
            }}
          />

          <div className="custom-domain__info">
            <img
              src={infoIcon}
              className="custom-domain__info-icon"
              alt="info icon"
              aria-hidden="true"
              width="24"
              height="24"
              loading="lazy"
            />

            <p className="custom-domain__info-text text">Make sure you point to cname.prony.io in your DNS settings</p>
          </div>

          <FormButtons isValid={true} onCancel={onCancel} type="primary" />
        </form>
      </div>
    </div>
  );
};

export default CustomDomain;
