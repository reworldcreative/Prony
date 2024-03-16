import React, { FC, ReactNode, useState, useEffect, createContext } from "react";

interface GlobalContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  isOpenPopUp: boolean;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

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
    <GlobalContext.Provider value={{ theme, setTheme, isOpenPopUp, setOpenPopUp }}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
