import React from "react";
import "./App.scss";
import { Homepage } from "./components/Homepage";
import * as dataGeneral from "./dummyData-general.json";
import * as dataBusiness from "./dummyData-business.json";
import * as dataEntertainment from "./dummyData-business.json";
import * as dataHealth from "./dummyData-business.json";
import * as dataScience from "./dummyData-business.json";
import * as dataSports from "./dummyData-business.json";
import * as dataTechnology from "./dummyData-business.json";

function App() {
  return <Homepage articles={data.articles} />;
}

export default App;
