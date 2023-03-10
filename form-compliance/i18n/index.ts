interface LangJson {
  [key: string]: string;
}

import pt from "./pt.json";
import en from "./en.json";

const getField = (field: string, lang: string): string => {
  return getJson(lang)[field];
};

const getJson = (lang: string): LangJson => {
  switch (lang) {
    case "pt":
      return pt;
    case "en":
      return en;
    default:
      return pt;
  }
};

const getLanguage = (): string => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("language") || "pt";
  }

  return "pt";
};

const setLanguage = (lang: string): void => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("language", lang);
  }
};

export { pt, getField, getJson, getLanguage, setLanguage };
