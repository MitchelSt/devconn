import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.main};
  outline: none;
  border: none;

  ${({ primary }) =>
    primary &&
    css`
      background: blue;
    `}

  &:hover {
    color: red;
    background: white;
  }
`;

export default function Button({ primary, children }) {
  return <StyledButton primary={primary}>{children}</StyledButton>;
}
