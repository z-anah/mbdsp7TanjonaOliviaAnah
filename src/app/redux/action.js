export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const changeLang = (lang) => {
  return {
    type: "SET_LANG",
    value: lang,
  };
};
