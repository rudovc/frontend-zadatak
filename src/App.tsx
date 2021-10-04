import React from "react";
import "./App.scss";
import { Homepage } from "./components/Homepage";
import * as data from "./dummyData.json";

function App() {
  return <Homepage articles={data.articles} />;
}

export default App;
