import { config } from "../configs/config";
import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary,
    teriary: config.colors.teriary,
  },

  duration: ".2s",
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};
