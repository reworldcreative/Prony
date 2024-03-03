import React, { FC, useContext } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import "./CreateForm.scss";
import Input from "@/components/UI/forms/Input/Input";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Button from "@/components/UI/buttons/Button/Button";
import TextArea from "@/components/UI/forms/TextArea/TextArea";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";

interface formProps {
  submitSuccess: (data: FieldValues) => void;
}

const CreateForm: FC<formProps> = ({ submitSuccess }) => {
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

  const onSubmit = (data: FieldValues) => {
    submitSuccess(data);
    reset();
    setOpenPopUp(false);
    console.log(data);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__wrapper">
        <fieldset className="form__fieldset">
          <legend className="visibility-hidden">main information</legend>
          <Input
            label="Board name"
            name="boardName"
            register={register}
            messageType={errors.boardName ? "error" : ""}
            settings={{
              required: "Board name should be unique",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 30, message: "Maximum length should be 30" },
            }}
            messageText={errors?.boardName?.message.toString() || "error!"}
          />
          <Input
            label="URL"
            name="URL"
            register={register}
            messageType={errors.URL ? "error" : ""}
            settings={{
              required: "Invalid URL format",
              pattern: {
                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
                message: "Invalid URL format",
              },
            }}
            messageText={errors?.URL?.message.toString() || "error!"}
          />

          <TextArea
            label="Description"
            name="description"
            rows={4}
            register={register}
            messageType={errors.description ? "error" : ""}
            settings={{
              required: "Invalid description",
              minLength: { value: 10, message: "Minimum length should be 10" },
              maxLength: {
                value: 200,
                message: "Maximum length should be 200",
              },
            }}
            messageText={errors?.description?.message.toString() || "error!"}
          />
        </fieldset>

        <section className="form__section">
          <fieldset className="form__fieldset">
            <legend className="text form__legend">Privacy</legend>
            <div className="form__block">
              <div>
                <Controller
                  name="privacy"
                  control={control}
                  defaultValue="public"
                  render={({ field }) => (
                    <RadioButton
                      group="privacy"
                      labelText="Public"
                      value="public"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      // register={register}
                      field={field}
                    />
                  )}
                />
                <p className="caption  radio-text">
                  The board is visible to anyone. Search engines like Google
                  will index it.
                </p>
              </div>

              <div>
                <Controller
                  name="privacy"
                  control={control}
                  defaultValue="public"
                  render={({ field }) => (
                    <RadioButton
                      group="privacy"
                      labelText="Private"
                      value="private"
                      selectedValue={field.value}
                      size="big"
                      type="secondary"
                      // register={register}
                      field={field}
                    />
                  )}
                />
                <p className="caption radio-text">
                  Only people added to the board can access it
                </p>
              </div>
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <legend className="text form__legend">Status</legend>
          </fieldset>
        </section>
      </div>
      <div className="form__buttons">
        <Button
          addClass="form__button"
          type="default"
          buttonType="button"
          click={onCancel}
        >
          Cancel
        </Button>

        <Button
          addClass="form__button"
          type="primary"
          buttonType="submit"
          disabled={!isValid}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;
