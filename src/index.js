import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import Help from "./Pages/Help";
import Restaurant from "./Pages/Restaurant";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
