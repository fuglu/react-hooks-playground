import React, { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Spinner from "./Spinner";
const Gif = lazy(() => import("./Gif"));

const TAGS = ["simpsons", "futurama", "disenchantment"];

export function App() {
  return <div className="App">foo</div>;
}
