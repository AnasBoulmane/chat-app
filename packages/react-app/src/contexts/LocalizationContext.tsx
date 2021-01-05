import React, { useRef, useState, useEffect } from "react";
import en from "locales/en.json";
import { Locale } from "helpers/translate";

export interface ILocalizationContext {
  localeCode: string;
  selectedLocale: Locale;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
}

export const initContext: ILocalizationContext = {
  localeCode: "en",
  selectedLocale: en.resources as any,
  setLocale: () => {},
};

export const LocalizationContext = React.createContext<ILocalizationContext>(initContext);

export const LocalizationProvider = ({ children }: any) => {
  const [localeCode, setLocale] = useState(initContext.localeCode);
  const selectedLocale = useRef<Locale>(initContext.selectedLocale);

  useEffect(() => {
    (async function loadAndUpdateLocale () {
      const { resources } = localeCode === "en" ? (en as any) : await import(`locales/${localeCode}.json`);
      selectedLocale.current = resources;
    })();
  }, [localeCode]);

  return (
    <LocalizationContext.Provider value={{ localeCode, setLocale, selectedLocale: selectedLocale.current }}>
      {children}
    </LocalizationContext.Provider>
  );
};
