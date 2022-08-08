/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import s from "./share.module.css";

function Share() {
  const [isVariantsVisible, setIsVariantsVisible] = useState(false);
  console.log('isVariantsVisible: ', isVariantsVisible);

  return (
    <div className={s.share}>
      <div
        className={s.shareLogo}
        onClick={() => setIsVariantsVisible(prev=>!prev)}
      >
        <span className="icon-share" />
      </div>
      <div
        className={s.shareContainer}
        data-is-shown={isVariantsVisible}
        onMouseLeave={() => setIsVariantsVisible(false)}
      >
        <div className={s.shareVariants}>
          <div className={s.shareVariant}>
            <span className="icon-instagram" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-vkontacte" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-viber" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-whatsapp" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-telegramm" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-facebook" />
          </div>
          <div className={s.shareVariant}>
            <span className="icon-copy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
