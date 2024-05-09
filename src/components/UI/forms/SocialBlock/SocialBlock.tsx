import React, { FC } from "react";
import "./SocialBlock.scss";

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

const SocialBlock: FC = () => {
  return (
    <div className="social-login">
      <p className="social-login__title">Or login with social:</p>

      <div className="social-login__wrapper">
        {socialLinks.map((link, index) => (
          <button type="button" onClick={() => {}} key={index} className={`social-login__button`}>
            <img
              src={link.icon}
              className="social-login__icon"
              alt={`${link.text} icon`}
              width="24"
              height="24"
              aria-hidden="true"
            />
            Login with {link.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialBlock;
