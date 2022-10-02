let person_names = ["Hussain", "Taha", "Asher"];

person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);

console.log(`${person_names[2]} wont able to make it!`);

person_names[2] = "Ahmed";

person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);

console.log("We Hve bigger dinner table now.");

// At the beginning
person_names.unshift("Aamir");

// At the mid
person_names.splice(3, 0, "Rohan");

// At the end
person_names.push("Ali");

person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);
