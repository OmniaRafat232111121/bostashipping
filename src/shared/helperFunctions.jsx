import Language from "./Language";

export const getDay = (date) => Language.DAYS[date.getDay()];

export const getDate_DD_MM_YY = (date) => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

export const getDate_DD_Month_YY = (date) =>`${date.getDate()} ${Language.MONTHS[date.getMonth()]} ${date.getFullYear()}`;

export const getTime = (date) =>
  `${Math.abs(12 - date.getHours())}:${date.getMinutes()} ${
    date.getHours() < 12 ? Language.TIME_PERIOD.AM : Language.TIME_PERIOD.PM
  }`;