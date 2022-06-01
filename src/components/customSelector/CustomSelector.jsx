import React from "react";
import s from "./customSelector.module.css";
import PropTypes from "prop-types";

import Select, { components, DropdownIndicatorProps } from "react-select";

function CustomSelector(props) {
  const customStyles = {
    control: (provided, isFocused, isSelected) => {
      return {
        ...provided,
        border: "none",
        backgroundColor:
          props?.bgColor === "white" ? "white" : "hsla(0, 0%, 98%, 1)",
        padding: "10px 0 10px 15px",
        height: "100%",
        boxShadow: isFocused.isFocused ? "0 0 0 1px var(--green)" : "",
      };
    },
    dropdownIndicator: (provided, isFocused) => {
      return {
        ...provided,
        color: isFocused.isFocused
          ? "hsla(175, 53%, 50%, 1)"
          : "hsla(175, 53%, 46%, 1)",
        fontSize: "22px",
        paddingRight: "16px",
      };
    },
    option: (provided, isFocused) => {
      return {
        ...provided,
        backgroundColor:
          isFocused.isFocused && !props.onlytel
            ? "hsla(175, 53%, 46%, 0.4)"
            : isFocused.isSelected && !props.onlytel
            ? "hsla(47, 100%, 56%, 0.4)"
            : isFocused.isSelected
            ? "hsla(175, 53%, 46%, 0.4)"
            : "",
        color: isFocused.isSelected && props.onlytel ? "black" : "",
      };
    },
    // menu: (provided) => ({
    //   ...provided,
    //   ":-webkit-scrollbar": {
    //     display: "block",
    //     width: "20px"
    //   },
    // }),
  };

  const DropdownIndicator = (props) => (
    <components.DropdownIndicator {...props}>
      <span className="icon-arrow-down" />
    </components.DropdownIndicator>
  );

  const IndicatorSeparator = () => {
    return <></>;
  };

  return (
    <Select
      components={{ DropdownIndicator, IndicatorSeparator }}
      styles={customStyles}
      placeholder="Выберите..."
      options={props?.options}
      classNamePrefix="custom"
      className={s.select}
      defaultValue={props?.value}
      value={props?.value}
      onChange={(selected) => {
        props?.setChosen(selected);
      }}
    />
  );
}

CustomSelector.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  setChosen: PropTypes.func,
  bgColor: PropTypes.string,
  onlytel: PropTypes.bool,
};

CustomSelector.defaultProps = {
  options: [{ label: "Без опция", value: 0 }],
  value: null,
  setChosen: () => {},
  bgColor: "gray",
  onlytel: false,
};

export default CustomSelector;
