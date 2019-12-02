export const getProp = (prop?: string | number) => {
  return prop !== undefined ? (isNaN(+prop) ? prop : `${prop}px`) : prop;
};
