import React, { FC, useContext, useState } from "react";
import "./ClientAddPaymentMethodForm.scss";
import { PaymentMethod } from "@/components/pages/ClientArea/Payment/Payment";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import FormButtons from "../FormButtons/FormButtons";
import Input from "../Input/Input";
import CreditCardInput from "./CreditCardInput/CreditCardInput";

interface formProps {
  submitSuccess: (data: PaymentMethod) => void;
  formTitle: string;
}

const ClientAddPaymentMethodForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  const onSubmit = (data: PaymentMethod) => {
    submitSuccess(data);
    setOpenPopUp(false);
    reset();
  };

  const onCancel = () => {
    setOpenPopUp(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-add-payment-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="clientPage__container">
        <div className="workspaces-form__wrapper workspaces-add-payment-form__wrapper">
          <Input
            label="Alias for credit card"
            name="alias"
            register={register}
            messageType={errors.alias ? "error" : ""}
            value=""
            required={false}
            placeholder="Enter your Alias"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 20, message: "Maximum length should be 20" },
            }}
            messageText={errors?.alias?.message.toString() || "error!"}
          />

          <div className=" workspaces-add-payment-form__row">
            <Input
              label="First name"
              name="firstName"
              register={register}
              messageType={errors.firstName ? "error" : ""}
              value=""
              required={false}
              placeholder="Enter your first name"
              settings={{
                required: "must be filled",
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 20, message: "Maximum length should be 20" },
              }}
              messageText={errors?.firstName?.message.toString() || "error!"}
            />

            <Input
              label="Last name"
              name="lastName"
              register={register}
              messageType={errors.lastName ? "error" : ""}
              value=""
              required={false}
              placeholder="Enter your last name"
              settings={{
                required: "must be filled",
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 20, message: "Maximum length should be 20" },
              }}
              messageText={errors?.lastName?.message.toString() || "error!"}
            />
          </div>

          <Controller
            name="cardNumber"
            control={control}
            defaultValue=""
            render={({ field: { onChange } }) => <CreditCardInput submitSuccess={onChange} />}
          />

          <div className="workspaces-add-payment-form__small-row">
            <Input
              label="CVV"
              name="CVV"
              register={register}
              messageType={errors.CVV ? "error" : ""}
              value=""
              required={false}
              placeholder=""
              settings={{
                required: "must be filled",
                minLength: { value: 3, message: "Minimum length should be 3" },
                maxLength: { value: 3, message: "Maximum length should be 3" },
                validate: {
                  correctFormat: (value) => /^\d{3}$/.test(value) || "only 3 numbers",
                },
              }}
              messageText={errors?.CVV?.message.toString() || "error!"}
            />

            <Input
              label="Expiration date"
              name="expirationDate"
              register={register}
              messageType={errors.expirationDate ? "error" : ""}
              value=""
              required={false}
              placeholder=""
              settings={{
                required: "must be filled",
                minLength: { value: 5, message: "Minimum length should be 3" },
                maxLength: { value: 5, message: "Maximum length should be 5" },
                validate: {
                  correctFormat: (value) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) || "Incorrect format. Use MM/YY",
                },
              }}
              messageText={errors?.expirationDate?.message.toString() || "error!"}
            />
          </div>
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default ClientAddPaymentMethodForm;
