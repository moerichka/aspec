import { useEffect } from "react";
import { useLocation } from "react-router";
import s from "./scroller.module.css"

function Scroller() {
  console.log("anie");
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={s.scroller}
    >
      <span className="icon-dropdown"></span>
    </div>
  );
}

export default Scroller;
