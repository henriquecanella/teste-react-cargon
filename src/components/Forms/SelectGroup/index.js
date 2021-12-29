import React from "react";
import PropTypes from "prop-types";
import { Select } from "@rocketseat/unform";

export default function SelectWrapper({
  labelName,
  selectName,
  selectPlaceholder,
  selectOptions,
}) {
  return (
    <>
      <strong>{labelName}</strong>
      <Select
        name={selectName}
        placeholder={selectPlaceholder}
        options={selectOptions}
      />
    </>
  );
}

SelectWrapper.propTypes = {
  labelName: PropTypes.string.isRequired,
  selectName: PropTypes.string.isRequired,
  selectPlaceholder: PropTypes.string,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

SelectWrapper.defaultProps = {
  selectPlaceholder: "",
};
