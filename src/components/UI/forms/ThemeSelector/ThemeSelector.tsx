import React, { FC, useState } from "react";
import "./ThemeSelector.scss";
import gearIcon from "@icons/gear.svg";

interface Theme {
  name: string;
  mainColor: string;
  additionalColors: string[];
}

interface ThemeSelectorProps {
  themes: Theme[];
  onThemeChange: (theme: string) => void;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ themes, onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0].name);

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    onThemeChange(themeName);
  };

  return (
    <div className="theme-selectors">
      {themes.map((theme, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleThemeChange(theme.name)}
          className={`theme-selectors__container ${selectedTheme === theme.name ? "active" : ""}`}
        >
          <div className="theme-selectors__theme-main" style={{ backgroundColor: theme.mainColor }} />

          {theme.additionalColors && theme.additionalColors.length > 0 ? (
            <div className="theme-selectors__theme-colors">
              {theme.additionalColors.map((color, index) => (
                <span key={index} className="theme-selectors__theme-color" style={{ backgroundColor: color }} />
              ))}
            </div>
          ) : (
            <div className="theme-selectors__no-colors">
              <img
                src={gearIcon}
                alt="custom colors icon"
                className="theme-selectors__icon"
                width="12"
                height="12"
                aria-hidden="true"
                loading="lazy"
              />

              <p className="theme-selectors__color-text ">Custom</p>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
