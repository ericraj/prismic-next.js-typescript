import Link from "next/link";
import React, { FC } from "react";
import { Brand, Header, Nav } from "../styled-components";
import { useRouter } from "next/router";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavbarLink[];
}

const defaultLinks: NavbarLink[] = [
  { label: "Voir les catégories", href: "/categories" },
];

const Navbar: FC<NavbarProps> = ({
  brand = "Le Blog",
  links: linksFromProps,
}) => {
  const router = useRouter();

  const links = linksFromProps
    ? [...defaultLinks, ...linksFromProps]
    : defaultLinks;

  const goToHome = () => router.push("/");

  return (
    <Header>
      <div>
        <Brand onClick={goToHome}>{brand}</Brand>
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
