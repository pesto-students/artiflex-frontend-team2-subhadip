import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { LandingPage, SomeOtherPage } from "./pages";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
