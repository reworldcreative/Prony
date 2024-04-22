import React, { FC, useContext, useState } from "react";
import "./GeneralSettingsForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormButtons from "../FormButtons/FormButtons";
import Checkbox from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import RadioButtonLanguage from "../RadioButton/RadioButtonLanguage";

export interface GeneralSettingsFormData {
  name: string;
  language: string;
  showOnRoadmap: boolean;
  indexed: boolean;
}

interface formProps {
  formTitle: string;
}

const languages = [
  {
    icon: "./img/flags/flag-usa.svg",
    caption: `English`,
    text: `English, US`,
  },
  {
    icon: "./img/flags/flag-fr.svg",
    caption: `French`,
    text: `French, FR`,
  },
  {
    icon: "./img/flags/flag-sp.svg",
    caption: `Spanish`,
    text: `Spanish, SP`,
  },
  {
    icon: "./img/flags/flag-gr.svg",
    caption: `German`,
    text: `German, GR`,
  },
  {
    icon: "./img/flags/flag-ua.svg",
    caption: `Ukrainian`,
    text: `Ukrainian, UA`,
  },
  {
    icon: "./img/flags/flag-gb.svg",
    caption: `British`,
    text: `British, GB`,
  },
];

const GeneralSettingsForm: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUpSettings, setOpenPopUpSettings } = useContext(GlobalContext);
  const [name, setName] = useState<string>("");
  const [currentLanguage, setCurrentLanguage] = useState<string>("English");
  const [showOnRoadmap, setShowOnRoadmap] = useState<boolean>(true);
  const [indexed, setIndexed] = useState<boolean>(true);

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

  const onSubmit = (data: GeneralSettingsFormData) => {
    setName(data.name);
    setCurrentLanguage(data.language);
    setShowOnRoadmap(data.showOnRoadmap);
    setIndexed(data.indexed);
    setOpenPopUpSettings(false);
  };

  const onCancel = () => {
    setOpenPopUpSettings(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form general-settings-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="general-settings-form__wrapper">
        <Input
          label="Name"
          name="name"
          register={register}
          messageType={errors.name ? "error" : ""}
          value={name}
          required={false}
          placeholder="Enter status name"
          settings={{
            required: "must be filled",
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 50, message: "Maximum length should be 30" },
          }}
          messageText={errors?.name?.message.toString() || "error!"}
        />

        <div className="form__block">
          <p className="general-settings-form__label text">Language</p>

          <div className="general-settings-form__language-block">
            {languages.map((language, index) => (
              <Controller
                key={index}
                name="language"
                control={control}
                defaultValue={currentLanguage}
                render={({ field }) => (
                  <RadioButtonLanguage
                    group="language"
                    labelIcon={language.icon}
                    value={language.caption}
                    text={language.text}
                    selectedValue={field.value}
                    field={field}
                    size="big"
                    type="secondary"
                  />
                )}
              />
            ))}
          </div>
        </div>

        <div className="form__block">
          <Controller
            name="showOnRoadmap"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                labelText="Show on roadmap"
                name="showOnRoadmap"
                value="showOnRoadmap"
                type="secondary"
                size="big"
                field={field}
                defaultChecked={showOnRoadmap}
              />
            )}
          />

          <div>
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
                  defaultChecked={indexed}
                />
              )}
            />

            <p className="caption  radio-text">
              Changelog will be indexed by search engines like Google. Turn it off if you don’t want that.
            </p>
          </div>
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default GeneralSettingsForm;
