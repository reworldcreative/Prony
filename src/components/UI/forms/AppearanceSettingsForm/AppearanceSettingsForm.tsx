import React, { FC, useContext, useState } from "react";
import "./AppearanceSettingsForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormButtons from "../FormButtons/FormButtons";
import FileLoader from "../FileLoader/FileLoader";

export interface AppearanceSettingsFormData {
  logo: string;
  icon: string;
}

interface formProps {
  formTitle: string;
}

const AppearanceSettingsForm: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUpSettings, setOpenPopUpSettings, setTheme, theme } = useContext(GlobalContext);
  const [logo, setLogo] = useState<string>("");
  const [icon, setIcon] = useState<string>("");
  const [currentTheme, setCurrentTheme] = useState<string>(theme);

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

  const onSubmit = (data: AppearanceSettingsFormData) => {
    setLogo(data.logo);
    setIcon(data.icon);
    setCurrentTheme(theme);
    setOpenPopUpSettings(false);
  };

  const onCancel = () => {
    setTheme(currentTheme === "light" ? "light" : "dark");
    setOpenPopUpSettings(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form appearance-settings-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="appearance-settings-form__wrapper">
        <div className="form__block">
          <div>
            <Controller
              name="logo"
              control={control}
              render={({ field: { onChange } }) => <FileLoader onSelect={onChange} type="image" label="Logo" />}
            />
          </div>

          <div>
            <Controller
              name="icon"
              control={control}
              render={({ field: { onChange } }) => <FileLoader onSelect={onChange} type="image" label="Favicon" />}
            />
          </div>
        </div>

        <div>
          <p className="form-label text">Theme</p>

          <div className="form__block">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`appearance-settings-form__theme-container ${theme === "light" ? "active" : ""}`}
            >
              <div className="appearance-settings-form__theme-main" style={{ backgroundColor: "#ffffff" }} />

              <div className="appearance-settings-form__theme-colors">
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#1565C0" }} />
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#757575" }} />
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#272557" }} />
              </div>
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`appearance-settings-form__theme-container ${theme === "dark" ? "active" : ""}`}
            >
              <div className="appearance-settings-form__theme-main" style={{ backgroundColor: "#1f1f1f" }} />

              <div className="appearance-settings-form__theme-colors">
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#1565C0" }} />
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#757575" }} />
                <span className="appearance-settings-form__theme-color" style={{ backgroundColor: "#ffffff" }} />
              </div>
            </button>
          </div>
        </div>

        <FormButtons isValid={true} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default AppearanceSettingsForm;
