import React from "react";
import "./App.scss";
import { Homepage } from "./components/Homepage";
import dataGeneral from "./data/dummyData-general.json";
import dataBusiness from "./data/dummyData-business.json";
import dataEntertainment from "./data/dummyData-business.json";
import dataHealth from "./data/dummyData-business.json";
import dataScience from "./data/dummyData-business.json";
import dataSports from "./data/dummyData-business.json";
import dataTechnology from "./data/dummyData-business.json";

function App() {
  const data = {
    general: dataGeneral,
    business: dataBusiness,
    entertainment: dataEntertainment,
    health: dataHealth,
    science: dataScience,
    sports: dataSports,
    technology: dataTechnology,
  };

  return <Homepage data={data} />;
}

export default App;
