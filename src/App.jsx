import React from "react";
import "./App.css";
import Root from "./components/Root/Root";
import HomePage from "./pages/Home";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./components/NotFound/NotFound";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  )
);

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
