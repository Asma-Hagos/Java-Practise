const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// expected outcome: [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

const sortedYears = years.sort((a, b) => b - a);

console.log(sortedYears);
