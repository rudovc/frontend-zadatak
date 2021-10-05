import React from "react";
import "./App.scss";
import { Homepage } from "./components/Homepage";
import dataGeneral from "./dummyData-general.json";
import dataBusiness from "./dummyData-business.json";
import dataEntertainment from "./dummyData-business.json";
import dataHealth from "./dummyData-business.json";
import dataScience from "./dummyData-business.json";
import dataSports from "./dummyData-business.json";
import dataTechnology from "./dummyData-business.json";

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
