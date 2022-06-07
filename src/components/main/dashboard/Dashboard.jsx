import LineGraph from "./LineGraph";

const Dashboard = () => {
  const response = {
    startDate: "2022-06-20T01:42:27.042Z",
    deadlineDate: "2022-06-28T01:43:27.042Z",
    totalPages: 320,
    readedPages: 105,
    results: [
      {
        date: "2022-06-20T01:42:27.042Z",
        pointResult: 0,
      },
      {
        date: "2022-06-20T01:42:27.042Z",
        pointResult: 50,
      },
      {
        date: "2022-06-21T05:50:52.336Z",
        pointResult: 20,
      },
    ],
  };
  const db = [
    {
      date: "2022-06-21T05:50:52.336Z",
      pointResult: 20,
    },
    {
      date: "2022-06-21T09:42:11.411Z",
      pointResult: 15,
    },
    {
      date: "2022-06-21T09:42:11.411Z",
      pointResult: 2,
    },
    {
      date: "2022-06-22T09:42:11.411Z",
      pointResult: 30,
    },
    {
      date: "2022-06-23T09:42:11.411Z",
      pointResult: 50,
    },
    {
      date: "2022-06-24T09:42:11.411Z",
      pointResult: 20,
    },
    {
      date: "2022-06-25T09:42:11.411Z",
      pointResult: 40,
    },
    {
      date: "2022-06-27T09:42:11.411Z",
      pointResult: 10,
    },
    {
      date: "2022-06-29T09:42:11.411Z",
      pointResult: 20,
    },
  ];

  return (
    <div>
      <header>
        <h1>Dashboard</h1>
      </header>
      <LineGraph response={response} />
    </div>
  );
};

export default Dashboard;
