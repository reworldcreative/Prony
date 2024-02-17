import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  createContext,
} from "react";
interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--Primary",
      getComputedStyle(document.documentElement).getPropertyValue(
        `--Primary-${theme === "light" ? "Light" : "Dark"}`
      )
    );

    document.documentElement.style.setProperty(
      "--TextPrimary",
      getComputedStyle(document.documentElement).getPropertyValue(
        `--TextPrimary-${theme === "light" ? "Light" : "Dark"}`
      )
    );

    document.documentElement.style.setProperty(
      "--BG",
      getComputedStyle(document.documentElement).getPropertyValue(
        `--BG-${theme === "light" ? "Light" : "Dark"}`
      )
    );

    document.documentElement.style.setProperty(
      "--BGSecond",
      getComputedStyle(document.documentElement).getPropertyValue(
        `--BGSecond-${theme === "light" ? "Light" : "Dark"}`
      )
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
