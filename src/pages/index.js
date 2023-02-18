import React from "react";

export const LandingPage = React.lazy(() =>
  import("./LandingPage/LandingPage")
);

export const SomeOtherPage = React.lazy(() =>
  import("./SomeOtherPage/SomeOtherPage")
);
