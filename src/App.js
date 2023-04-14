import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import {
  LandingPage,
  SomeOtherPage,
  RegisterPage,
  LoginPage,
  TimeLinePage,
  MainPage,
  AddPostFormPage,
} from "./pages";

import LayoutA from "./layouts/LayoutA";
import LayoutB from "./layouts/LayoutB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutA />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/register",
    // element: <LayoutA />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <RegisterPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    // element: <LayoutA />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/timeline",
    // element: <LayoutA />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <TimeLinePage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/addpostformpage",
    // element: <LayoutA />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <AddPostFormPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/someotherpage",
    element: <LayoutB />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <SomeOtherPage />
          </React.Suspense>
        ),
      },
    ],
  },
  {
    path: "/mainpage",
    element: <LayoutB />,
    children: [
      {
        path: "",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <MainPage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
