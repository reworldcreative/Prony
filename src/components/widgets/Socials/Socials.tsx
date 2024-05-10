import React, { FC } from "react";
import "./Socials.scss";

const socialsIcons = [
  {
    icon: "./img/socials/Facebook.svg",
    link: "http://facebook.com",
    title: "facebook",
  },
  {
    icon: "./img/socials/Instagram.svg",
    link: "http://instagram.com",
    title: "instagram",
  },
  {
    icon: "./img/socials/Twitter.svg",
    link: "http://twitter.com",
    title: "twitter",
  },
  {
    icon: "./img/socials/Youtube.svg",
    link: "http://youtube.com",
    title: "youtube",
  },
];
const Socials: FC = () => {
  return (
    <ul className="socials">
      {socialsIcons.map((social, index) => (
        <li className="socials__item" key={index}>
          <a href={social.link} target="_blank">
            <img
              src={social.icon}
              alt={`${social.title} icon`}
              className="socials__icon"
              width="16"
              height="16"
              aria-hidden="true"
              loading="lazy"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
