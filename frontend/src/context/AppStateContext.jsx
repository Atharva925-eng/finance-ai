import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppStateContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  user: { name: "", email: "" },
});

export function AppStateProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const user = useMemo(
    () => ({
      name: "Aarav Shah",
      email: "aarav@example.com",
    }),
    []
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
      user,
    }),
    [theme, user]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  return useContext(AppStateContext);
}
