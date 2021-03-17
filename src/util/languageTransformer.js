const dict = {
  // lang - country
  ar: 'sa',
  be: 'bl',
  cs: 'sz',
  da: 'dk',
  de: 'de',
  el: 'gr',
  en: 'us',
  es: 'es',
  fa: 'ir',
  fr: 'fr',
  ja: 'jp',
  hi: 'in',
  hu: 'hu',
  hr: 'hr',
  hy: 'am',
  it: 'it',
  kk: 'kz',
  nl: 'nl',
  no: 'no',
  pl: 'pl',
  pt: 'pt',
  ru: 'ru',
  sk: 'sk',
  sl: 'sl',
  sv: 'se',
  tr: 'tr',
  uk: 'ua'
};

export const languageTransformer = listList => {
  let newList = [];
  listList.map(lang => {
    const item = Object.keys(dict).find(item => item === lang);
    if (item) {
      newList.push(dict[item].toUpperCase());
    }
  });
  return newList;
};
