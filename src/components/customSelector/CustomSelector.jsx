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
        maxWidth: props?.maxWidth,
        backgroundColor:
          props?.bgColor === "white" ? "white" : props?.bgColor === "gray" ? "hsla(0, 0%, 98%, 1)" : "inherit",
        padding: props?.padding,
        height: "100%",
        boxShadow:
          isFocused.isFocused && props?.outline ? "0 0 0 1px var(--green)" : "",
        color: props?.color === "blue" ? "hsla(222, 64%, 27%, 1)" : "",
        fontSize: props?.fontSize,
        fontFamily: props?.fontFamily,
        lineHeight: props?.lineHeight,
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
        maxWidth: props?.maxWidth,
        width: props?.menuWidth ? props?.menuWidth : provided.width,
      };
    },
    option: (provided, isFocused) => {
      return {
        ...provided,
        backgroundColor:
          isFocused.isFocused && !props.onlytel
            ? "hsla(175, 53%, 46%, 1)"
            : isFocused.isSelected && !props.onlytel
            ? "hsla(47, 100%, 56%, 1)"
            : isFocused.isSelected
            ? "hsla(175, 53%, 46%, 0.4)"
            : "",
        color: isFocused.isFocused && !props.onlytel
        ? "white"
        : isFocused.isSelected && !props.onlytel
        ? "white"
        : isFocused.isSelected
        ? "black"
        : "black",
        fontSize: props?.fontSize,
        fontFamily: props?.optionFontFamily,
        lineHeight: props?.lineHeight,
        padding: props?.optionPadding,
      };
    },
    singleValue:(provided, isFocused) => {
      return {
        ...provided,
        color: "inherit",
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
  maxWidth: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  optionFontFamily: PropTypes.string,
  lineHeight: PropTypes.string,
  onlytel: PropTypes.bool,  // телефонный размер экрана
  optionPadding: PropTypes.string,
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
  maxWidth: "",
  bgColor: "gray",
  color: "unset",
  fontSize: "16px",
  lineHeight: "",
  fontFamily: "Neris-Light",
  optionFontFamily: "Neris-Light",
  optionPadding: "8px 12px",
  onlytel: false,
  outline: true,
  padding: "10px 0 10px 15px",
  indicatorSize: "22px",
  indicatorPadding: "0 16px 0 0",
  icon: "icon-arrow-down",
};

export default CustomSelector;
