import React from "react";
import { Footer as StyledFooter } from "../styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        {new Date().getFullYear()} Permettez-moi de construire. Tous droits
        réservés.
      </span>
    </StyledFooter>
  );
};

export default Footer;
