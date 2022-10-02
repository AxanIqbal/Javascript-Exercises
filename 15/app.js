let person_names = ["Hussain", "Taha", "Asher"];

person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);
console.log(`${person_names[2]} wont able to make it!`);
person_names[2] = "Ahmed";
person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);
