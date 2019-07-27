import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input({
  background: "#fff",
  borderRadius: "8px",
  border: "none",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1);",
  padding: "16px",
  width: "100%"
});

const Input = ({ value, placeholder, setValue }) => {
  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={setValue}
    />
  );
}

export default Input;