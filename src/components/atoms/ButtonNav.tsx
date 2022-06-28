import React from "react";
import { Component } from "react";
import styled, { CSSProp } from "styled-components";


// buttonNav interface
interface ButtonNavProps {
  name: string;
  href: string;
  active?: boolean;
  css?: CSSProp;
}


// buttonNav component
const ButtonNav = React.memo(({ name, href, active, css }: ButtonNavProps) => {
  return (
    <a className={`nav-link ${active ? "active" : ""}`} aria-current="page" href={href}>
      {name}
    </a>
  );
}
);



export default ButtonNav;