import React from "react";
import styled from "styled-components";
import Icons from "./icons";

// Containing SVG tag. Icon paths are returned from <Icons />
const SVGWrapper = styled.svg.attrs({
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
})(props => ({
  color: "currentColor",
  height: `${props.size}px`,
  width: `${props.size}px`,
}));

const Icon = ({ className, icon, size = "24" }) => (
  <SVGWrapper className={className} size={size}>
    <Icons icon={icon} />
  </SVGWrapper>
);

export default Icon;
