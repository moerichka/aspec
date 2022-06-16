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
          props?.bgColor === "white" ? "white" : props?.bgColor === "gray" ? "hsla(0, 0%, 98%, 1)" : "inherit",
        padding: props?.padding,
        height: "100%",
        boxShadow:
          isFocused.isFocused && props?.outline ? "0 0 0 1px var(--green)" : "",
        color: props?.color === "blue" ? "hsla(222, 64%, 27%, 1)" : "",
      };
    },
    dropdownIndicator: (provided, isFocused) => {
      return {
        ...provided,
        color: isFocused.isFocused
          ? "hsla(175, 53%, 50%, 1)"
          : "hsla(175, 53%, 46%, 1)",
        fontSize: props?.indicatorSize,
        padding: props?.indicatorPadding,
      };
    },
    menu: (provided, isFocused) => {
      return {
        ...provided,
        zIndex: "5",
        width: props?.menuWidth ? props?.menuWidth : provided.width,
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
    singleValue:(provided, isFocused) => {
      return {
        ...provided,
        color: "inherit"
      }
    },
    // menu: (provided) => ({
    //   ...provided,
    //   ":-webkit-scrollbar": {
    //     display: "block",
    //     width: "20px"
    //   },
    // }),
  };

  const DropdownIndicator = (propsInd) => (
    <components.DropdownIndicator {...propsInd}>
        <span className={props.icon} />
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
  color: PropTypes.string,
  onlytel: PropTypes.bool,  // телефонный размер экрана
  outline: PropTypes.bool,
  padding: PropTypes.string,
  indicatorSize: PropTypes.string,
  indicatorPadding: PropTypes.string,
  icon: PropTypes.string,
};

CustomSelector.defaultProps = {
  options: [{ label: "Без опций", value: 0 }],
  value: null,
  setChosen: () => {},
  bgColor: "gray",
  color: "unset",
  onlytel: false,
  outline: true,
  padding: "10px 0 10px 15px",
  indicatorSize: "22px",
  indicatorPadding: "0 16px 0 0",
  icon: "icon-arrow-down",
};

export default CustomSelector;
