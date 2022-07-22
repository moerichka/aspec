import React, { Fragment, useState } from "react";
import s from "./customSelector.module.css";
import "./customSelector.css";
import PropTypes from "prop-types";

import Select, {
  components,
  DropdownIndicatorProps,
  MenuProps,
} from "react-select";

function getLength(options) {
  return options.reduce((acc, curr) => {
    if ("options" in curr) return acc + getLength(curr.options);
    return acc + 1;
  }, 0);
}

const Menu = (props) => {
  // const optionsLength = getLength(props.options);
  return (
    <Fragment>
      {/* <div className={s.menu}>Custom Menu with {optionsLength} options</div> */}
      <components.Menu {...props} className={s.menucomponent}>{props.children}</components.Menu>
    </Fragment>
  );
};

function CustomSelector(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const customStyles = {
    control: (provided, isFocused, isSelected) => {
      return {
        ...provided,
        border: "none",
        maxWidth: props?.maxWidth,
        backgroundColor:
          props?.bgColor === "white"
            ? "white"
            : props?.bgColor === "gray"
            ? "hsla(0, 0%, 98%, 1)"
            : "inherit",
        padding: props?.padding,
        height: "100%",
        boxShadow:
          isFocused.isFocused && props?.outline ? "0 0 0 1px var(--green)" : "",
        color: props?.color === "blue" ? "hsla(222, 64%, 27%, 1)" : "",
        fontSize: props?.fontSize,
        fontFamily: props?.fontFamily,
        lineHeight: props?.lineHeight,
        cursor: "pointer",
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
        marginRight: "auto",
        position: "relative",
        right: props?.isHeader ? "10px" : "",
      };
    },
    menu: (provided, isFocused) => {
      return {
        ...provided,
        zIndex: "5",
        maxWidth: props?.maxWidth,
        width: props?.menuWidth ? props?.menuWidth : provided.width,
        transition: "0.3sec",
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
        color:
          isFocused.isFocused && !props.onlytel
            ? "white"
            : isFocused.isSelected && !props.onlytel
            ? "hsla(222, 64%, 27%, 1)"
            : isFocused.isSelected
            ? "black"
            : "black",
        fontSize: props?.fontSize,
        fontFamily: props?.optionFontFamily,
        lineHeight: props?.lineHeight,
        padding: props?.optionPadding,
        cursor: "pointer",
      };
    },
    singleValue: (provided, isFocused) => {
      return {
        ...provided,
        color: "inherit",
        margin: "0",
        padding: "5px 0",
        fontFamily: "Montserrat-Medium",
        fontSize: props?.isHeader ? "14px" : "",
      };
    },
    valueContainer: (provided) => {
      return {
        ...provided,
        padding: props?.isHeader ? "2px 0" : "2px 8px",
      };
    },
    menuList: (provided) => {
      return{
        ...provided,
        padding: 0
      }
    }
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

  const toggleOpen = () => {
     setMenuIsOpen(prev => !prev);
  };

  return (
    <Select
      components={{ DropdownIndicator, IndicatorSeparator, Menu }}
      // components={{ DropdownIndicator, IndicatorSeparator }}
      styles={customStyles}
      placeholder={props?.placeholder}
      options={props?.options}
      classNamePrefix="custom"
      // menuIsOpen={menuIsOpen}
      className={props?.isHeader ? s.headerselecter : s.selecter}
      defaultValue={props?.value}
      value={props?.value}
      isSearchable={props?.isSearchable}
      onChange={(selected) => {
        // toggleOpen()
        props?.setChosen(selected);
      }}
      onSelect
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
  placeholder: PropTypes.string,
  lineHeight: PropTypes.string,
  onlytel: PropTypes.bool, // телефонный размер экрана
  isSearchable: PropTypes.bool,
  isHeader: PropTypes.bool,
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
  placeholder: "Выберите",
  fontFamily: "Neris-Light",
  optionFontFamily: "Neris-Light",
  optionPadding: "8px 12px",
  onlytel: false,
  isSearchable: true,
  isHeader: false,
  outline: true,
  padding: "10px 0 10px 15px",
  indicatorSize: "22px",
  indicatorPadding: "0 16px 0 0",
  icon: "icon-arrow-down",
};

export default CustomSelector;
