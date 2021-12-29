import React from "react";
import PropTypes from "prop-types";
import { Input } from "@rocketseat/unform";

export default function InputWrapper({
  labelName,
  inputName,
  inputType,
  inputPlaceholder,
}) {
  return (
    <>
      <strong>{labelName}</strong>
      <Input name={inputName} type={inputType} placeholder={inputPlaceholder} />
    </>
  );
}

InputWrapper.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};

InputWrapper.defaultProps = {
  inputType: "text",
  inputPlaceholder: "",
};
