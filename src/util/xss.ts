const xss = require("xss")

export const xssFilter = (str: string) => {
  const options = {};
  const myxss = new xss.FilterXSS(options);
  return myxss.process(str);
}