export interface ITheme {
  colors: {
    primary: string;
    secondary: string;
    teriary: string;
  };

  duration: string;
  fontWeight: {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
}
