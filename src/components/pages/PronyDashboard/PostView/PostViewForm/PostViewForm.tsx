import React, { FC } from "react";
import "./PostViewForm.scss";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FileLoader from "@/components/UI/forms/FileLoader/FileLoader";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import Button from "@/components/UI/buttons/Button/Button";

const PostViewForm: FC = () => {
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
    <form className="form post-view__form">
      <TextArea
        name="commentText"
        rows={8}
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

      <div className="form post-view__form-row">
        <div className="form post-view__form-col">
          <Controller
            control={control}
            name="postImage"
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => <FileLoader onSelect={onChange} label="Image" />}
          />
        </div>

        <div className="post-view__radio-container">
          <div className="post-view__radio-group">
            <Controller
              name="postPrivacy"
              control={control}
              defaultValue="public"
              render={({ field }) => (
                <RadioButton
                  group="postPrivacy"
                  labelText="Public"
                  value="public"
                  selectedValue={field.value}
                  size="big"
                  type="secondary"
                  field={field}
                  defaultChecked={true}
                />
              )}
            />

            <Controller
              name="postPrivacy"
              control={control}
              defaultValue="public"
              render={({ field }) => (
                <RadioButton
                  group="postPrivacy"
                  labelText="Private"
                  value="private"
                  selectedValue={field.value}
                  size="big"
                  type="secondary"
                  field={field}
                  defaultChecked={false}
                />
              )}
            />
          </div>
          <Button type="primary" buttonType="submit" addClass="post-view__submit">
            Comment
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PostViewForm;
