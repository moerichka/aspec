import s from "./scroller.module.css"

function Scroller() {
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
