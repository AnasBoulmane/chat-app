import locale from "locales/en.json";

export type Translate = (resourcesKey: string, params?: any) => string;

export const translateWithSection = (resourcesSection: string): Translate => (
  resourcesKey: string,
  params?: any,
): string => {
  let value = (locale as any)[resourcesSection]?.[resourcesKey];
  if (!value) {
    console.log(resourcesKey); // tslint:disable-line
  } else if (params) {
    Object.entries(params).map(([key, paramValue]) => (value = value.replace(`__${key}__`, paramValue)));
  }
  return value || resourcesKey;
};
