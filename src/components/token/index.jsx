import styled from "styled-components";
import { B2 } from "~/components/typography";
import { getLightVariant } from "~/core/theme";

const Token = styled(B2)(({ color = "water", theme }) => ({
  background: theme.colors[getLightVariant(color)],
  borderRadius: "4px",
  color: theme.colors[color],
  padding: "4px 12px",
  flexShrink: 0,
}));

export default Token;
