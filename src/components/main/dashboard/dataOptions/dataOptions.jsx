export const getOptions = (normalizeResults, maxPoint) => ({
  responsive: false,
  plugins: {
    title: {
      display: true,
      color: "black",
      text: `AMOUNT OF PAGES / DAY `,
      align: "start",
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    legend: {
      align: "start",
      position: "top",
      labels: {
        padding: 20,
        usePointStyle: true,
        generateLabels: (chart) => {
          const data = chart.data;
          return data.datasets.map((dataset) => ({
            text: dataset.label,
            fillStyle: dataset.borderColor,
            fontColor: "#242A37",
          }));
        },
      },
    },
  },
  layout: {
    autoPadding: true,
    padding: 0,
  },
  scales: {
    x: {
      min: normalizeResults.length < 0 ? 7 : normalizeResults.length - 7,
      max: normalizeResults.length - 1,
      grid: {
        borderColor: "#B1B5C2",
        borderWidth: 1,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        color: "#B1B5C2",
      },
      ticks: {
        display: false,
        color: "#000000",
      },
    },
    y: {
      min: 0,
      max: maxPoint + 10,
      grid: {
        display: false,
        borderColor: "#B1B5C2",
      },
      ticks: {
        display: false,
        color: "#000000",
      },
    },
  },
  elements: {
    point: {
      radius: 5,
      hoverRadius: 8,
      borderWidth: 0,
      hoverBorderWidth: 0,
    },
    line: {
      tension: 0.3,
      borderCapStyle: "round",
    },
  },
});
export const getData = (plan, points, labels) => ({
  labels,
  datasets: [
    {
      label: "План",
      data: plan,
      borderColor: "#091E3F",
      backgroundColor: "#091E3F",
    },
    {
      label: "Факт",
      data: points,
      borderColor: "#FF6B08",
      backgroundColor: "#FF6B08",
    },
  ],
});
