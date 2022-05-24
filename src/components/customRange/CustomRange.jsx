import React from "react";
import "./customRange.css";
import PropsTypes from "prop-types"
import { Range, getTrackBackground } from "react-range";

function CustomRange(propsCustom) {
  const { STEP, MIN, MAX, rangeValues: values } = propsCustom;
  // const [myValues, setMyValues] = React.useState()

  return (
    <div
      className={`customRange__wrapper ${
        propsCustom.isWhite ? "customRange-white" : ""
      }`}
    >
      <div className="customRange__info">
        <div className="customRange__from">
          {propsCustom.withText ? `от` : ``}
          <span className="customRange__price">
            {propsCustom?.oneThumb ? MIN : values[0]}
          </span>
        </div>
        <div className="customRange__to">
        {propsCustom.withText ? `до` : ``}
          <span className="customRange__price">
            {propsCustom?.oneThumb ? MAX : values[1]}
          </span>
        </div>
      </div>
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        // onChange={values => propsCustom.onChange(values)}
        onChange={(values) => propsCustom.onChange(values)}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            // onMouseDown={props.onMouseDown}
            // onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "1px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
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
            {...props}
            style={{
              ...props.style,
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

CustomRange.defaultProps = {
  withText: true
}

export default CustomRange;
