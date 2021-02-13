import { css, Global } from "@emotion/react";
import Head from "next/head";
import React, { FC, Fragment, ReactNode } from "react";
import { Container } from "../styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children?: ReactNode;
  title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title = "Le Blog" }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          *,
          *::after,
          *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Montserrat";
            font-weight: 500;
            font-size: 16px;
          }
          body {
            width: 100%;
            min-height: 100vh;
          }
          #__next {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,300&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@700&display=swap"
        />
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </Fragment>
  );
};

export default Layout;
