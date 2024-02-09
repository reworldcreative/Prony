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
    if (theme === "light") {
      document.documentElement.style.setProperty(
        "--Primary",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--Primary-Light"
        )
      );

      document.documentElement.style.setProperty(
        "--TextPrimary",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--TextPrimary-Light"
        )
      );

      document.documentElement.style.setProperty(
        "--BG",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--BG-Light"
        )
      );
    } else if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--Primary",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--Primary-Dark"
        )
      );

      document.documentElement.style.setProperty(
        "--TextPrimary",
        getComputedStyle(document.documentElement).getPropertyValue(
          "--TextPrimary-Dark"
        )
      );

      document.documentElement.style.setProperty(
        "--BG",
        getComputedStyle(document.documentElement).getPropertyValue("--BG-Dark")
      );
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
