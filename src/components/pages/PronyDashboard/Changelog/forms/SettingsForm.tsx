import React, { FC, useContext, useEffect } from "react";
import "./SettingsForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import RadioButton from "@/components/UI/forms/RadioButton/RadioButton";
import Checkbox from "@/components/UI/forms/Checkbox/Checkbox";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";

export interface ChangelogSettingsData {
  privacy: string;
  indexed: boolean;
}

interface formProps {
  submitSuccess: (data: ChangelogSettingsData) => void;
  formTitle: string;
  formData: ChangelogSettingsData;
}

const SettingsForm: FC<formProps> = ({ formData, formTitle, submitSuccess }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: "onChange",
  });

  useEffect(() => {
    reset();
  }, [isOpenPopUp]);

  useEffect(() => {
    setValue("privacy", formData.privacy);
    setValue("indexed", formData.indexed);
  }, [formData]);

  const onSubmit = (data: ChangelogSettingsData) => {
    submitSuccess(data);
    reset();
    setOpenPopUp(false);
  };

  const onCancel = () => {
    reset();
    setOpenPopUp(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form changelogForm changelogSettingsForm">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="changelogForm__wrapper">
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
                  field={field}
                  defaultChecked={formData && formData.privacy === "public" ? true : false}
                />
              )}
            />
            <p className="caption  radio-text">
              Show this changelog on the public view so all users can find and access it.
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
                  field={field}
                  defaultChecked={formData && formData.privacy === "private" ? true : false}
                />
              )}
            />
            <p className="caption radio-text">The changelog will not be shown to your users anymore.</p>
          </div>
        </div>

        <div className="form__block">
          <Controller
            name="indexed"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                labelText="Indexed"
                name="indexed"
                value="indexed"
                type="secondary"
                size="big"
                field={field}
                defaultChecked={formData ? formData.indexed : false}
              />
            )}
          />
          <p className="caption  radio-text">
            Changelog will be indexed by search engines like Google. Turn it off if you don’t want that.
          </p>
        </div>
      </div>

      <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
    </form>
  );
};

export default SettingsForm;
