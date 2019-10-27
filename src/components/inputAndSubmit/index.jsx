import React from "react";
import styled from "styled-components";

const InputWrapper = styled.form({
  display: "flex",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1);",
  width: "100%",
  marginBottom: "8px",
});

const StyledInput = styled.input({
  flex: "3",
  padding: "16px",
  border: "none",
  borderRadius: "8px 0 0 8px",
});

const StyledSubmit = styled.button({
  flex: "1",
  padding: "16px",
  border: "none",
  borderRadius: "0 8px 8px 0",
  background: "#8E9FED",
  color: "#fff",
  transition: "0.2s",
  "&:hover": {
    cursor: "pointer",
    background: "#6881EC",
    color: "#fff",
  },
});

const InputAndSubmit = ({
  value,
  setValue,
  inputPlaceholder,
  submitValue,
  handleSubmit,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <InputWrapper onSubmit={onSubmit}>
      <StyledInput
        type="text"
        value={value}
        placeholder={inputPlaceholder}
        onChange={setValue}
      />
      <StyledSubmit type="submit">{submitValue || "Submit"}</StyledSubmit>
    </InputWrapper>
  );
};

export default InputAndSubmit;
