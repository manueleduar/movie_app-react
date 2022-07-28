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


// PrimaryNavigation interface
interface PrimaryNavigationProps {
  css?: CSSProp;
}

const PrimaryNavigation = ({ css }: PrimaryNavigationProps) => {
  // COMPLETE CODE
};

export default PrimaryNavigation;

