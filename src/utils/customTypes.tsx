export type Color = {
  hex: string;
  name: string;
};

export type LoaderData = {
  colorsInfo: Promise<Color[]>;
};

export type ColorInput = {
  hex: { value: string };
  name: { value: string };
};
