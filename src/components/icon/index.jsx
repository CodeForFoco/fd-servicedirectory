import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import Icons from "./icons";

const SVGWrapper = styled.svg.attrs({
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
})(({ color = "currentColor", size }) => ({
  color,
  display: "block",
  height: rem(size),
  width: rem(size),
}));

const Icon = ({ className, color, icon, size = 24 }) => (
  <SVGWrapper className={className} color={color} size={size}>
    <Icons icon={icon} />
  </SVGWrapper>
);

export default Icon;
