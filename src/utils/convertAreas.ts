const replacer = (str: string) => {
  switch (str) {
    case 'camera':
      return 'a';
    case 'units':
      return 'b';
    default:
      return 'c';
  }
};

export const convertAreas = (areas: string[]) =>
  areas.map(area => area.replace(/\w+/g, replacer));
