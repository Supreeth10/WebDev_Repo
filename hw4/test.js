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

// console.log(checkDate("December 1, 1995"));
// console.log(checkDate("2008-1-11"));
// console.log(checkDate(2020, 3, 16));
// console.log(checkDate(1635176171332));
// console.log(checkDate("birthdate"));

let da1 = new Date(2020, 3, 16);
let da2 = new Date(1635176171332);

// console.log(da1, da2);

let diff = da2 - da1;
console.log(Date.parse(diff));
console.log(diff.toString());
