import ButtonNav from "../atoms/ButtonNav";
import React from "react";
import { CSSProp } from "styled-components";


// array of buttons that will be rendered in the PrimaryNavigation
const buttons = [
  {
    name: "Discover",
    href: "/discover",
  },
  {
    name: "Popular",
    href: "/popular",
  },
  {
    name: "Top rated",
    href: "/top-rated",
  },
  {
    name: "Upcoming",
    href: "/upcoming",
  },
  {
    name: "Now playing",
    href: "/now-playing",
  }
];

// do the css object for the buttonNav
const css: CSSProp = {
  display: "inline-block",
  marginRight: "1rem",
  marginLeft: "1rem",
  padding: "0.5rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "0.25rem",
  fontSize: "1rem",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#333",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#eee",
  }
};

  


// use ButtonNav to do Molecules
const PrimaryNavigation: React.FC = () => {
  return (
    <div className="primary-navigation">
      {buttons.map((button, index) => {
        return <ButtonNav key={index} name={button.name} href={button.href} css={css} />;
      })}
    </div>
  );
}


export default PrimaryNavigation;

