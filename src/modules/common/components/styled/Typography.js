import React from 'react';
import styled, { css } from "styled-components";

const textStyles = css`
  color: ${props => props.inverted ? props.theme.colors.white : props.theme.colors.black};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSize.text};
  font-weight: ${props => props.bold ? props.theme.fontWeight : 'normal'};
  line-height: ${props => props.theme.lineHeight };
`;

export const Body = styled.p`
  ${textStyles}
`;

export const Link = styled.a`
  ${textStyles};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

