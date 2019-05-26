import styled from "styled-components";

const Button = styled.button(({ theme }) => ({
  background: theme.colors.water,
  border: 0,
  borderRadius: "4px",
  color: "#fff",
  display: "block",
  outline: 0,
  padding: "12px",
  width: "100%",
}));

export default Button;
