import { config } from "../configs/config"
import { ITheme } from "../interfaces/styled"

export const baseTheme: ITheme = {
  colors: {
    primary: config.colors.primary,
    secondary: config.colors.secondary,
    teriary: config.colors.teriary
  },
  duration: ".2s"
}