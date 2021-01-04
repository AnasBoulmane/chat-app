import { resources as en } from "locales/en.json";

export type Translate = (resourcesKey: string, params?: any) => string;
export interface Locale {
  [sectionKey: string]: { [key: string]: string };
}

export const translateWithSection = (resourcesSection: string, selectedLocale = (en as any) as Locale): Translate => (
  resourcesKey: string,
  params?: any,
): string => {
  let value = selectedLocale[resourcesSection]?.[resourcesKey];
  if (!value) console.log(resourcesKey);
  // tslint:disable-line
  else if (params) {
    Object.entries(params).map(([key, paramValue]: any) => (value = value.replace(`__${key}__`, paramValue)));
  }
  return value || resourcesKey;
};
