import React, { FC, useContext, useState } from "react";
import "./AddForm.scss";
import { WorkspaceItemData } from "../../WorkspaceItem/WorkspaceItem";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import Input from "@/components/UI/forms/Input/Input";
import FormButtons from "@/components/UI/forms/FormButtons/FormButtons";
import RadioButtonLanguage from "@/components/UI/forms/RadioButton/RadioButtonLanguage";
import ThemeSelector from "@/components/UI/forms/ThemeSelector/ThemeSelector";

interface formProps {
  submitSuccess: (data: WorkspaceItemData) => void;
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

const themes = [
  {
    name: "custom",
    mainColor: "#E5ECF9",
    additionalColors: [],
  },
  {
    name: "blue",
    mainColor: "#1565C0",
    additionalColors: ["#272557", "#7791C2", "#1565C0", "#E5ECF9"],
  },
  {
    name: "green",
    mainColor: "#46EBA8",
    additionalColors: ["#46EBA8", "#333", "#46EBA8", "#D8D8D8"],
  },
  {
    name: "grey",
    mainColor: "#E5ECF9",
    additionalColors: ["#272557", "#7791C2", "#1565C0", "#E5ECF9"],
  },
];

const AddForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [currentLanguage, setCurrentLanguage] = useState<string>("English");
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const [currentPlan, setCurrentPlan] = useState<string>("pubic");
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

  const onSubmit = (data: WorkspaceItemData) => {
    submitSuccess({...data, plan:currentPlan});
    setOpenPopUp(false);
    reset();
  };

  const onCancel = () => {
    setOpenPopUp(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form workspaces-form workspaces-add-form">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="workspaces-form__wrapper workspaces-add-form__wrapper">
        <div className="workspaces-form__row workspaces-add-form__row">
          <Input
            label="Name"
            name="name"
            register={register}
            messageType={errors.name ? "error" : ""}
            value=""
            required={false}
            placeholder="Name of workspace"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.name?.message.toString() || "error!"}
          />

          <Input
            label="Subdomain"
            name="domain"
            register={register}
            messageType={errors.domain ? "error" : ""}
            value=""
            required={false}
            placeholder="Subdomain"
            settings={{
              required: "must be filled",
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 50, message: "Maximum length should be 30" },
            }}
            messageText={errors?.domain?.message.toString() || "error!"}
          />
        </div>

        <div className="form__block">
          <p className="workspaces-add-form__label text">Language</p>

          <div className="workspaces-add-form__language-block">
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
          <p className="workspaces-add-form__label text">Theme</p>

          <Controller
            control={control}
            name="theme"
            defaultValue={currentTheme}
            rules={{
              required: false,
            }}
            render={({ field: { onChange } }) => <ThemeSelector themes={themes} onThemeChange={onChange} />}
          />
        </div>

        <div className="form__block">
          <p className="workspaces-add-form__label text">How do you plan to use Prony?</p>

          <div className="workspaces-add-form__plan">
            <button
              type="button"
              className={`workspaces-add-form__plan-button ${
                currentPlan === "pubic" ? "workspaces-add-form__plan-button_active" : ""
              }`}
              onClick={() => setCurrentPlan("pubic")}
            >
              Public feedback
            </button>
            <button
              type="button"
              className={`workspaces-add-form__plan-button ${
                currentPlan === "private" ? "workspaces-add-form__plan-button_active" : ""
              }`}
              onClick={() => setCurrentPlan("private")}
            >
              Private feedback
            </button>
            <button
              type="button"
              className={`workspaces-add-form__plan-button ${
                currentPlan === "employee" ? "workspaces-add-form__plan-button_active" : ""
              }`}
              onClick={() => setCurrentPlan("employee")}
            >
              Employee feedback
            </button>
          </div>
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default AddForm;
