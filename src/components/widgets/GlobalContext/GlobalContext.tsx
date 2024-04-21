import React, { FC, ReactNode, useState, useEffect, createContext } from "react";

interface GlobalContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  isOpenPopUp: boolean;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;

  isOpenPopUpSettings: boolean;
  setOpenPopUpSettings: React.Dispatch<React.SetStateAction<boolean>>;
  PopUpSettingsType: string;
  setPopUpSettingsType: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);
  const [isOpenPopUpSettings, setOpenPopUpSettings] = useState<boolean>(false);
  const [PopUpSettingsType, setPopUpSettingsType] = useState<string>("global");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--Primary",
      getComputedStyle(document.documentElement).getPropertyValue(`--Primary-${theme === "light" ? "Light" : "Dark"}`)
    );

    document.documentElement.style.setProperty(
      "--TextPrimary",
      getComputedStyle(document.documentElement).getPropertyValue(
        `--TextPrimary-${theme === "light" ? "Light" : "Dark"}`
      )
    );

    document.documentElement.style.setProperty(
      "--BG",
      getComputedStyle(document.documentElement).getPropertyValue(`--BG-${theme === "light" ? "Light" : "Dark"}`)
    );

    document.documentElement.style.setProperty(
      "--BGSecond",
      getComputedStyle(document.documentElement).getPropertyValue(`--BGSecond-${theme === "light" ? "Light" : "Dark"}`)
    );

    document.documentElement.style.setProperty(
      "--BGItem",
      getComputedStyle(document.documentElement).getPropertyValue(`--BGItem-${theme === "light" ? "Light" : "Dark"}`)
    );
  }, [theme]);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        isOpenPopUp,
        setOpenPopUp,
        PopUpSettingsType,
        setPopUpSettingsType,
        isOpenPopUpSettings,
        setOpenPopUpSettings,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
