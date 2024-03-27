import React, { FC } from "react";
import "./PostViewPopUpForm.scss";
import { Controller, FieldValues, useForm } from "react-hook-form";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import Dropdown from "@/components/UI/forms/Dropdown/Dropdown";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import Input from "@/components/UI/forms/Input/Input";

interface PostViewPopUpFormProps {
  title: string;
  type: "change" | "add";
}

const PostViewPopUpForm: FC<PostViewPopUpFormProps> = ({ title, type }) => {
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

  return (
    <form className="form pop-up-form">
      <h2 className="form pop-up-form__title heading-h6">{title}</h2>

      {type === "change" && (
        <div className="form pop-up-form__container">
          <Controller
            control={control}
            name="changeStatus"
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => (
              <Dropdown
                onSelect={onChange}
                current="status1"
                options={["status1", "status2", "status3"]}
                type="bordered"
              />
            )}
          />

          <TextArea
            name="changeDetails"
            rows={4}
            register={register}
            messageType={errors.details ? "error" : ""}
            value=""
            placeholder="Enter details"
            settings={{
              required: false,
              minLength: { value: 10, message: "Minimum length should be 10" },
              maxLength: {
                value: 200,
                message: "Maximum length should be 200",
              },
            }}
            messageText={"must be longer than 10 and less than 200"}
          />
        </div>
      )}

      {type === "add" && (
        <div className="form pop-up-form__container">
          <Input
            name="voterName"
            register={register}
            messageType={errors.postTitle ? "error" : ""}
            value=""
            required={true}
            placeholder="Enter voter name"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.postTitle?.message.toString() || "error!"}
          />

          <Input
            name="voterEmail"
            register={register}
            messageType={errors.postTitle ? "error" : ""}
            value=""
            required={true}
            placeholder="E-mail"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.postTitle?.message.toString() || "error!"}
          />
        </div>
      )}

      <FormButtons type="primary" onCancel={() => reset()} isValid={isValid} />
    </form>
  );
};

export default PostViewPopUpForm;
