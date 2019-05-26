import { rem } from "polished";
import React from "react";
import styled from "styled-components";

const Container = styled.figure({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: "96px 0",
});

const SVGWrapper = styled.svg.attrs({
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 38 38",
})({
  color: "#6881EC",
  height: rem("57px"),
  width: rem("57px"),
});

const Loader = ({ className }) => (
  <Container>
    <SVGWrapper className={className}>
      <defs>
        <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
          <stop stopColor="currentColor" stopOpacity="0" offset="0%" />
          <stop stopColor="currentColor" stopOpacity=".631" offset="63.146%" />
          <stop stopColor="currentColor" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
        <path
          d="M36 18c0-9.94-8.06-18-18-18"
          id="Oval-2"
          stroke="url(#a)"
          strokeWidth="2"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </path>
        <circle fill="currentColor" cx="36" cy="18" r="1">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="0.9s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </SVGWrapper>
  </Container>
);

export default Loader;
