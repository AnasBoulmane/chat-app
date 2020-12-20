import { Translate, translateWithSection } from "../helpers/translate";

export default function useTranslate (section: string): Translate {
  return translateWithSection(section);
}
