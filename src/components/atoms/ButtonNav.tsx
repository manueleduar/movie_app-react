import React from "react";
import { Component } from "react";
import styled, { CSSProp } from "styled-components";


// buttonNav interface
interface ButtonNavProps {
  css?: CSSProp;
}


// buttonNav component
export const ButtonNav = styled.button<ButtonNavProps>`
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  margin: 3px 5px;
  ${({ css }) => css}
  &:hover {
    box-shadow: 6px 6px 13px 2px rgba(0, 0, 0, 0.1);
  }
`;



export default ButtonNav;