import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Analys from "./slides/Tabs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(info) {
  const segmentTypeMob = info.data.filter(function (el) {
    return el["Segment Type"] === "Mobile";
  });
  const segmentTypeWeb = info.data.filter(function (el) {
    return el["Segment Type"] === "Web";
  });
  const femaleGend = info.data.filter(function (el) {
    return el["Segment Description"] === "Female respondents";
  });
  const maleGend = info.data.filter(function (el) {
    return el["Segment Description"] === "Male respondents";
  });
  const college = info.data.filter(function (el) {
    return el["Segment Description"] === "I'm in? College";
  });
  const collegePerc = college.map((el) => {
    return el["Percentage"];
  });
  const mobPerc = segmentTypeMob.map((el) => {
    return el["Percentage"];
  });
  const mobCount = segmentTypeMob.map((el) => {
    return el["Count"];
  });
  const webCount = segmentTypeWeb.map((el) => {
    return el["Count"];
  });
  const maleCount = maleGend.map((el) => {
    return el["Count"];
  });
  const femaleCount = femaleGend.map((el) => {
    return el["Count"];
  });
  const collegeCount = college.map((el) => {
    return el["Count"];
  });
  const webPerc = segmentTypeWeb.map((el) => {
    return el["Percentage"];
  });

  const mobSum = mobCount?.reduce(function (prev, curr) {
    return Number(prev) + Number(curr);
  }, 0);
  const webSum = webCount?.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0);
  const mobWebSum = webSum + mobSum;

  const maleSum = maleCount?.reduce(function (prev, curr) {
    return Number(prev) + Number(curr);
  }, 0);
  const femaleSum = femaleCount?.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0);
  const collegeSum = collegeCount?.reduce(function (prev, curr) {
    return (Number(prev) || 0) + (Number(curr) || 0);
  }, 0);
  const maleFemaleSum = maleSum + femaleSum + collegeSum;

  const femalePerc = femaleGend.map((el) => {
    return el["Percentage"];
  });
  const malePerc = maleGend.map((el) => {
    return el["Percentage"];
  });

  const label = segmentTypeMob.map((el) => {
    return el["Answer"];
  });
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };

  const gender = {
    labels: label,
    datasets: [
      {
        id: 1,
        label: "female Perc",
        data: femalePerc,
        borderColor: ["rgb(255, 99, 132)"],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
      {
        id: 2,
        label: "male Perc",
        data: malePerc,
        borderColor: ["rgb(75, 192, 192)"],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      },
    ],
    borderWidth: 1,
  };

  const tech = {
    labels: label,
    datasets: [
      {
        id: 3,
        label: "Mobile",
        data: mobPerc,
        borderColor: ["rgb(255, 99, 132)"],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
      {
        id: 4,
        label: "Web",
        data: webPerc,
        borderColor: ["rgb(75, 192, 192)"],
        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
      },
    ],
    borderWidth: 1,
  };
  const collegeData = {
    labels: label,
    datasets: [
      {
        id: 5,
        label: `college`,
        data: collegePerc,
        borderColor: ["rgb(255, 99, 132)"],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      },
    ],
    borderWidth: 1,
  };

  return (
    <>
      <Analys
        options={options}
        gender={gender}
        tech={tech}
        collegeData={collegeData}
        mobWebSum={mobWebSum}
        maleFemaleSum={maleFemaleSum}
      />
    </>
  );
}
