/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import s from "./scroller.module.css"

function Scroller() {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={s.scroller}
    >
      <span className="icon-dropdown" />
    </div>
  );
}

export default Scroller;
