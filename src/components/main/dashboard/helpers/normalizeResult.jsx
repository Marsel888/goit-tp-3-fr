const getNormalizeResults = (results) => {
  const allDatePoints = results.map((p) =>
    new Date(p.date).toLocaleDateString()
  );
  console.log(allDatePoints);
  const normalizeResults = [];
  allDatePoints.reduce((acc, label, idx, arr) => {
    const isIn = acc.includes(label);
    if (isIn) {
      normalizeResults[normalizeResults.length - 1].pointResult +=
        results[idx].pointResult;
    } else {
      normalizeResults.push({
        date: new Date(results[idx].date).toLocaleDateString(),
        pointResult: results[idx].pointResult,
      });
    }
    return isIn ? acc : [...acc, label];
  }, []);
  return normalizeResults;
};
export default getNormalizeResults;
