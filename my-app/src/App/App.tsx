import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Main } from "./Main";
import "../styles/styles.scss";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}
