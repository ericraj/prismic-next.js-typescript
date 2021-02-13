import Link from "next/link";
import React, { FC } from "react";
import { Brand, Header, Nav } from "../styled-components";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavbarLink[];
}

const defaultLinks: NavbarLink[] = [
  { label: "Voir les catégories", href: "/" },
];

const Navbar: FC<NavbarProps> = ({
  brand = "Le Blog",
  links: linksFromProps,
}) => {
  const links = linksFromProps
    ? [...defaultLinks, ...linksFromProps]
    : defaultLinks;

  return (
    <Header>
      <div>
        <Link href="/">
          <Brand>{brand}</Brand>
        </Link>
        <Nav>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <a>{link.label}</a>
            </Link>
          ))}
        </Nav>
      </div>
    </Header>
  );
};

export default Navbar;
