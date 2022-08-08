import React, { useEffect } from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from "react-router";

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment, react/prop-types
  return <>{props.children}</>;
}

export default ScrollToTop;
