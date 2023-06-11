import React from "react";

import AnimatedCursor from "react-animated-cursor";

function AnimCursorComponent() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={8}
      color="255, 77, 109"
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={5}
      trailingSpeed={8}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'input[type="password"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        ".logo",
        ".search_bar",
        ".buttons",
        ".input",
        ".icon",
      ]}
    />
  );
}

export default AnimCursorComponent;
