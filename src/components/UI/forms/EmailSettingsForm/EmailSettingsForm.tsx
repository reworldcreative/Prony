import React, { FC, useContext, useEffect, useState } from "react";
import "./EmailSettingsForm.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import { Controller, FieldValues, useForm } from "react-hook-form";
import FormButtons from "../FormButtons/FormButtons";
import Checkbox from "../Checkbox/Checkbox";
import DropdownSelect from "../DropdownSelect/DropdownSelect";

export interface EmailSettingsFormData {
  emailStatusChange: boolean;
  adminResponses: boolean;
  mentionEmail: boolean;
  weeklyReport: boolean;
  adminReport: boolean;
  adminReportTime: string;
}

interface formProps {
  formTitle: string;
}

const EmailSettingsForm: FC<formProps> = ({ formTitle }) => {
  const { isOpenPopUpSettings, setOpenPopUpSettings } = useContext(GlobalContext);
  const [settingsPerson, setSettingsPerson] = useState<"user" | "admin">("user");
  const [emailStatusChange, setEmailStatusChange] = useState<boolean>(true);
  const [adminResponses, setAdminResponses] = useState<boolean>(false);
  const [mentionEmail, setMentionEmail] = useState<boolean>(false);
  const [weeklyReport, setWeeklyReport] = useState<boolean>(false);
  const [adminReport, setAdminReport] = useState<boolean>(false);
  const [adminReportTime, setAdminReportTime] = useState<string[]>(["Daily"]);

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

  const onSubmit = (data: EmailSettingsFormData) => {
    // submitSuccess(data);
    setEmailStatusChange(data.emailStatusChange);
    setAdminResponses(data.adminResponses);
    setMentionEmail(data.mentionEmail);
    setWeeklyReport(data.weeklyReport);
    setAdminReport(data.adminReport);
    setAdminReportTime([data.adminReportTime]);
    setOpenPopUpSettings(false);
  };

  const onCancel = () => {
    // reset();
    setOpenPopUpSettings(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form email-settings-form">
      <h2 className="title form__title">{formTitle}</h2>

      <div className="email-settings-form__wrapper">
        <div className="email-settings-form__container">
          <div className="email-settings-form__top">
            <button
              type="button"
              className={`email-settings-form__button ${settingsPerson === "user" ? "active" : ""} heading-h6`}
              onClick={() => setSettingsPerson("user")}
              aria-label={settingsPerson === "user" ? "is active" : "is not active"}
            >
              User email settings
            </button>

            <button
              type="button"
              className={`email-settings-form__button ${settingsPerson === "admin" ? "active" : ""} heading-h6`}
              onClick={() => setSettingsPerson("admin")}
              aria-label={settingsPerson === "admin" ? "is active" : "is not active"}
            >
              Admin email settings
            </button>
          </div>

          <div className="email-settings-form__settings">
            {settingsPerson === "user" && (
              <>
                <div className="form__block email-settings-form__block">
                  <div>
                    <Controller
                      name="emailStatusChange"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Status Change Email"
                          name="emailStatusChange"
                          value="emailStatusChange"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={emailStatusChange}
                        />
                      )}
                    />

                    <p className="caption  radio-text">
                      We'll email voters when your team changes the status of a Post. When you update the status of a
                      Post, you'll see this option to "Notify all voters"
                    </p>
                  </div>

                  <div>
                    <Controller
                      name="adminResponses"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Admin Responses in Post Comments"
                          name="adminResponses"
                          value="adminResponses"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={adminResponses}
                        />
                      )}
                    />

                    <p className="caption  radio-text">We'll email voters when your team responds to a Post</p>
                  </div>

                  <div>
                    <Controller
                      name="mentionEmail"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Mention Email"
                          name="mentionEmail"
                          value="mentionEmail"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={mentionEmail}
                        />
                      )}
                    />

                    <p className="caption  radio-text">Emails we send when anyone gets @mentioned in a Post</p>
                  </div>

                  <div>
                    <Controller
                      name="weeklyReport"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Weekly User Report"
                          name="weeklyReport"
                          value="weeklyReport"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={weeklyReport}
                        />
                      )}
                    />

                    <p className="caption  radio-text">Prony regular user updates regarding new Posts.</p>
                  </div>
                </div>

                <div className="form__block email-settings-form__block">
                  <div>
                    <Controller
                      name="adminReport"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Admin Report email"
                          name="adminReport"
                          value="adminReport"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={adminReport}
                        />
                      )}
                    />

                    <div className="caption radio-text">
                      <Controller
                        name="adminReportTime"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <DropdownSelect
                            getValue={setAdminReportTime}
                            defaultValue={adminReportTime}
                            selectType="radio"
                            marked={false}
                            title={adminReportTime[0]}
                            options={[
                              {
                                name: "Daily",
                                labelText: "Daily",
                              },
                              {
                                name: "Weekly",
                                labelText: "Weekly",
                              },
                              {
                                name: "Monthly",
                                labelText: "Monthly",
                              },
                            ]}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {settingsPerson === "admin" && (
              <>
                <div className="form__block email-settings-form__block">
                  <div>
                    <Controller
                      name="emailStatusChange"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Status Change Email"
                          name="emailStatusChange"
                          value="emailStatusChange"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={emailStatusChange}
                        />
                      )}
                    />

                    <p className="caption  radio-text">
                      We'll email voters when your team changes the status of a Post. When you update the status of a
                      Post, you'll see this option to "Notify all voters"
                    </p>
                  </div>

                  <div>
                    <Controller
                      name="mentionEmail"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Mention Email"
                          name="mentionEmail"
                          value="mentionEmail"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={mentionEmail}
                        />
                      )}
                    />

                    <p className="caption  radio-text">Emails we send when anyone gets @mentioned in a Post</p>
                  </div>
                </div>

                <div className="form__block email-settings-form__block">
                  <div>
                    <Controller
                      name="adminReport"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <Checkbox
                          labelText="Admin Report email"
                          name="adminReport"
                          value="adminReport"
                          type="secondary"
                          size="big"
                          field={field}
                          defaultChecked={adminReport}
                        />
                      )}
                    />

                    <div className="caption radio-text">
                      <Controller
                        name="adminReportTime"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                          <DropdownSelect
                            getValue={setAdminReportTime}
                            defaultValue={adminReportTime}
                            selectType="radio"
                            marked={false}
                            title={adminReportTime[0]}
                            options={[
                              {
                                name: "Daily",
                                labelText: "Daily",
                              },
                              {
                                name: "Weekly",
                                labelText: "Weekly",
                              },
                              {
                                name: "Monthly",
                                labelText: "Monthly",
                              },
                            ]}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <FormButtons isValid={isValid} onCancel={onCancel} type="primary" />
      </div>
    </form>
  );
};

export default EmailSettingsForm;
