import React from "react";

export const LandingPage = React.lazy(() =>
  import("./LandingPage/LandingPage")
);

export const SomeOtherPage = React.lazy(() =>
  import("./SomeOtherPage/SomeOtherPage")
);

export const RegisterPage = React.lazy(() =>
  import("./RegisterPage/RegisterPage")
);
export const MainPage = React.lazy(() =>
  import("./MainPage/MainPage")
);

export const profilePage = React.lazy(() => import("./ProfilePage/profilePage"));

export const LoginPage = React.lazy(() => import("./LoginPage/LoginPage"));
export const TimeLinePage = React.lazy(() =>
  import("./TimeLinePage/TimeLinePage")
);


