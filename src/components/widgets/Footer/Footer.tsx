import React, { FC, useState } from "react";
import "./Footer.scss";
import Logo from "@/components/UI/Logo/Logo";
import Socials from "../Socials/Socials";

// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordion = React.lazy(() => import("@mui/material/Accordion"));
const AccordionDetails = React.lazy(() => import("@mui/material/AccordionDetails"));
const AccordionSummary = React.lazy(() => import("@mui/material/AccordionSummary"));
const Typography = React.lazy(() => import("@mui/material/Typography"));
const ExpandMoreIcon = React.lazy(() => import("@mui/icons-material/ExpandMore"));

interface FooterProps {
  addClass?: string;
}

const footerLinks = [
  {
    title: "Product",
    links: [
      {
        name: "Features",
        link: "",
      },
      {
        name: "Integrations",
        link: "",
      },
      {
        name: "Case studies",
        link: "",
      },
      {
        name: "Documentation",
        link: "",
      },
    ],
  },
  {
    title: "Use cases",
    links: [
      {
        name: "Feature requests",
        link: "",
      },
      {
        name: "Share roadmap",
        link: "",
      },
      {
        name: "Manage ideas",
        link: "",
      },
    ],
  },
  {
    title: "Alternatives",
    links: [
      {
        name: "Prony vs Uservoice",
        link: "",
      },
      {
        name: "Prony vs Aha ideas",
        link: "",
      },
      {
        name: "Prony vs Canny",
        link: "",
      },
      {
        name: "Prony vs Trello",
        link: "",
      },
      {
        name: "Prony vs Nolt",
        link: "",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About us",
        link: "",
      },
      {
        name: "Why Prony?",
        link: "",
      },
      {
        name: "Team",
        link: "",
      },
      {
        name: "Culture",
        link: "",
      },
      {
        name: "Manifesto",
        link: "",
      },
    ],
  },
];

const Footer: FC<FooterProps> = ({ addClass = "" }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <footer className={`footer ${addClass}`}>
      <div className="footer__wrapper">
        <Logo color="dark" />

        <nav className="footer__navigation">
          {footerLinks.map((link, index) => (
            <div className="footer__navigation-item" key={index}>
              <p className="footer__navigation-caption heading-h6">{link.title}</p>
              <ul className="footer__navigation-list">
                {link.links.map((link, index) => (
                  <li className="footer__navigation-link" key={index}>
                    <a href={link.link} className="text-second">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav className="footer__navigation_mobile">
          {footerLinks.map((link, index) => (
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography className="footer__navigation-caption">{link.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="footer__navigation-list">
                  {link.links.map((link, index) => (
                    <li className="footer__navigation-link" key={index}>
                      <a href={link.link} className="text-second">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-wrapper">
          <p className="footer__copyright text">© 2020 Prony | All rights reserved</p>

          <div className="footer__block">
            <p className="footer__copyright text">Privacy policy | Terms of service</p>

            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
