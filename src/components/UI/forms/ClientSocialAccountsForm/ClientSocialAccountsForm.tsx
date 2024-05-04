import React, { FC, useState } from "react";
import "./ClientSocialAccountsForm.scss";

interface formProps {
  submitSuccess: () => void;
  formTitle: string;
}

const socialLinks = [
  {
    text: "Google",
    icon: "./img/socials/google-full.svg",
  },
  {
    text: "Facebook",
    icon: "./img/socials/facebook-full.svg",
  },
  {
    text: "Twitter",
    icon: "./img/socials/twitter-full.svg",
  },
  {
    text: "Github",
    icon: "./img/socials/github-full.svg",
  },
  {
    text: "Discord",
    icon: "./img/socials/discord-full.svg",
  },
];

const ClientSocialAccountsForm: FC<formProps> = ({ submitSuccess, formTitle }) => {
  const [linkStatus, setLinkStatus] = useState<{ [key: string]: string }>({
    Google: "",
    Facebook: "",
    Twitter: "",
    Github: "",
    Discord: "",
  });

  const toggleLink = (platform: string) => {
    setLinkStatus((prevStatus) => ({
      ...prevStatus,
      [platform]: prevStatus[platform] === "" ? platform : "",
    }));
  };

  return (
    <div className="form workspaces-form social-accounts">
      <h2 className="title form__title workspaces-form__title">{formTitle}</h2>

      <div className="social-accounts__wrapper">
        {socialLinks.map((link, index) => (
          <div className="social-accounts__item" key={index}>
            <button
              onClick={() => toggleLink(link.text)}
              className={`social-accounts__button ${
                linkStatus[link.text] !== "" ? "social-accounts__button_active" : ""
              }`}
            >
              <img
                src={link.icon}
                className="social-accounts__icon"
                alt={`${link.text} icon`}
                width="24"
                height="24"
                aria-hidden="true"
              />
              {linkStatus[link.text] === "" ? "Add" : ""} {link.text} account
            </button>

            <button onClick={() => toggleLink(link.text)} className="social-accounts__link">
              {linkStatus[link.text] === "" ? "Connect" : "Disconnect"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSocialAccountsForm;
