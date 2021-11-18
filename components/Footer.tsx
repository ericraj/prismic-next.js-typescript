import React from "react";
import { Footer as StyledFooter } from "../styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <span>&copy; {new Date().getFullYear()} Eric Rajaonarison. Tous droits réservés !</span>
    </StyledFooter>
  );
};

export default Footer;
