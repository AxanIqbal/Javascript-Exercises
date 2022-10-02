let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.map((number) => {
  if (number === 1) {
    return console.log("1st");
  } else if (number === 2) {
    return console.log("2nd");
  } else if (number === 3) {
    return console.log("3rd");
  } else {
    return console.log(number + "th");
  }
});
