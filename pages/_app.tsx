import { Global, ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles";
import theme from "../theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
