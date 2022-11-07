const calculateTime = (date1, date2) => {
  // Given two dates, calculate and return the amount of time elapsed in years and months
  if (checkDate(date1) && checkDate(date2)) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    var difTime = Math.abs(date2 - date1);
    var difDays = Math.ceil(difTime / (1000 * 60 * 60 * 24));
    let yearsDiff = date1.getFullYear() - date2.getFullYear();
    var months = difDays - yearsDiff * 365;
    months = Math.floor(months / 31);
    return `Time elapsed: ${yearsDiff} years, ${months} months`;
  } else {
    return "Error: Invalid input provided.";
  }
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateTime(1635176171332, "May 1, 1995"));
// Time elapsed: 26 years, 5 months
console.log(calculateTime(1635176171332, "1975-8-11"));
// Time elapsed: 46 years, 2 months
console.log(calculateTime(1635176171332, [2021, 5, 23]));
// Time elapsed: 5 months
console.log(calculateTime(1635176171332, 1031814000000));
// Time elapsed: 19 years, 1 month
console.log(calculateTime(1635176171332, "birthdate"));
// Error: Invalid input provided.

function checkDate(date) {
  if (Number.isInteger(date)) {
    return true;
  } else {
    let isValidDate = Date.parse(date);
    if (isNaN(isValidDate)) {
      return false;
    } else {
      return true;
    }
  }
}
