import { css, SerializedStyles } from "@emotion/react";

export const globalStyles = (): SerializedStyles => css`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
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
`;
