/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types"

import { Range, getTrackBackground } from "react-range";

import { separator } from "../../helpers/stringsFun"

import s from "./customRange.module.css";

function CustomRange(propsCustom) {
  const { STEP, MIN, MAX, rangeValues: values } = propsCustom;
  // const [myValues, setMyValues] = React.useState()

  return (
    <div
      className={`${s.wrapper} ${
        propsCustom.isWhite ? "customRange-white" : ""
      }`} data-color={propsCustom?.BGColor}
    >
      <div className={s.info}>
        <div className={s.from}>
          {propsCustom.withText ? `от` : ``}
          <span className={s.price}>
            {separator(propsCustom?.oneThumb ? MIN : values[0])}
          </span>
        </div>
        <div className={s.to}>
        {propsCustom.withText ? `до` : ``}
          <span className={s.price}>
            {separator(propsCustom?.oneThumb ? MAX : values[1])}
          </span>
        </div>
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        // onChange={values => propsCustom.onChange(values)}
        onChange={(thisValues) => propsCustom.onChange(thisValues)}
        renderTrack={({ props, children }) => (
          <div
            style={{
              ...props?.style,
              height: "1px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props?.ref}
              style={{
                height: "2px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: propsCustom.oneThumb
                    ? ["hsla(175, 53%, 46%, 1)", "hsla(0, 0%, 91%, 1)"]
                    : [
                        "hsla(0, 0%, 91%, 1)",
                        "hsla(175, 53%, 46%, 1)",
                        "hsla(0, 0%, 91%, 1)",
                      ],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            style={{
              ...props?.style,
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              backgroundColor: isDragged
                ? "hsla(175, 53%, 46%, 0.2)"
                : "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "8px",
                width: "8px",
                borderRadius: "50%",
                backgroundColor: "hsla(175, 53%, 46%, 1)",
              }}
            />
          </div>
        )}
      />
    </div>
  );
}

CustomRange.propTypes = {
  withText: PropTypes.bool,
  style: PropTypes.any,
  ref: PropTypes.any,
};

CustomRange.defaultProps = {
  withText: true,
  style: {},
  ref: {},
};


export default CustomRange;
