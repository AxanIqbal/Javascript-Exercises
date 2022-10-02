function car(manufacturer, model) {
  const extras = {};
  for (let index = 2; index < arguments.length; index++) {
    if (arguments[index]) {
      const element = arguments[index].split(":");
      extras[element[0]] = element[1];
    }
  }
  return {
    manufacturer: manufacturer,
    model: model,
    ...extras,
  };
}

console.log(car("nesan", "123", "color:test"));
