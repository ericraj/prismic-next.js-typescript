import "@emotion/react";
import { Theme } from "@emotion/react";

const colors = {
  primary: "#29B394",
  secondary: "#F2495E",
  white: "#ffffff"
};

export interface AppTheme {
  colors: typeof colors;
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends AppTheme {}
}

export interface ThemeProps {
  theme: Theme;
}

const theme: Theme = {
  colors
};

export default theme;
