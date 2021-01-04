import { useContext } from "react";
import { LocalizationContext } from "contexts/LocalizationContext";
import { Translate, translateWithSection } from "helpers/translate";

export function useTranslate (section: string): Translate {
  const { selectedLocale } = useContext(LocalizationContext);
  return translateWithSection(section, selectedLocale);
}
