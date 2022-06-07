import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
// eslint-disable-next-line import/first
import getNormalizeResults from "./helpers/normalizeResult";
// eslint-disable-next-line import/first
import { getData, getOptions } from "./dataOptions/dataOptions";

const getPlanValues = (
  startDate,
  deadlineDate,
  totalPages,
  normalizeResults,
  results
) => {
  // eslint-disable-next-line no-unused-expressions

  const sumWithInitial = results.map((el) => el.pointResult);
  const pagesOut = sumWithInitial.reduce((acc, elem) => acc + elem, 0);
  const days =
    (new Date(deadlineDate) - new Date(startDate)) / 1000 / 60 / 60 / 24; //5
  const dayOut = normalizeResults.filter((el) => el.date);
  const perDay = Math.ceil((totalPages - pagesOut) / (days - dayOut.length)); //40
  console.log(normalizeResults);
  const plan = new Array(normalizeResults.length).fill(perDay); //8*40
  console.log(plan);
  return plan;
};
const LineBoard = ({ response }) => {
  const { results, deadlineDate, startDate, totalPages } = response;

  const normalizeResults = getNormalizeResults(results);
  const plan = getPlanValues(
    startDate,
    deadlineDate,
    totalPages,
    normalizeResults,
    results
  );

  const points = normalizeResults.map((p) => p.pointResult);
  const maxPoint = Math.max(...points);
  const normalizeLabels = normalizeResults.map((p) => p.date);

  return (
    <div>
      <Line
        options={getOptions(normalizeResults, maxPoint)}
        data={getData(plan, points, normalizeLabels)}
        width={500}
        height={200}
      />
    </div>
  );
};

export default LineBoard;
