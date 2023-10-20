import arabic from "./locales/ar";
import english from "./locales/en";

const lang = {
  ar: arabic,
  en: english,
};

const defaultLanguage = "ar";

// Get the user's language from local storage or use the default language
const userLanguage = localStorage.getItem("userLanguage") || defaultLanguage;

export default lang[userLanguage];
