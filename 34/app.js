const pizzas = ["BBQ", "fajita", "pepperoni"];

pizzas.map((pizza) => {
  console.log(`I like ${pizza} pizza`);
});

console.log(
  `I like all pizzas but my favorites are ${pizzas.join(
    " pizza, "
  )} pizza, i really love them`
);
