import React from "react";
import Papa from "papaparse";

import BarChart from "./Charts";

function ExcelToJson() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("/assets/WhatsgoodlyData-10.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true });
      const rows = results.data;
      setRows(rows);
    }
    getData();
  }, []);
  return (
    <div className="converter">
      <BarChart data={rows} />
    </div>
  );
}

export default ExcelToJson;
