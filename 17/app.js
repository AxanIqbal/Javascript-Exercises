const person_names = ["Hussain", "Taha", "Asher"];

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
person_names.splice(person_names.length / 2, 0, "Rohan");

// At the end
person_names.push("Ali");

person_names.forEach((name) =>
  console.log(`Hey there ${name}, would you like to come have dinner with me?`)
);

console.log("Looks like i can only have space or two guests");

const length = person_names.length;

for (let index = 0; index < length; index++) {
  if (person_names.length > 2) {
    const person = person_names.pop();
    console.log(`I am terribly sorry ${person}, i cant invite you to dinner.`);
  }
}

person_names.forEach((name) =>
  console.log(
    `Hey there ${name}, i would like to tell you that you're still invited!`
  )
);
