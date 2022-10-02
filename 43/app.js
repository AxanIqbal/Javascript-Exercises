const magicians = [
  "Penn and Teller",
  "David Copperfield",
  "David Blaine",
  "Derren Brown",
  "Harry Houdini",
  "Lance Burton",
  "Paul Daniels",
  "Criss Angel",
  "Siegfried & Roy",
];
function show_magicians() {
  magicians.forEach((magician) => console.log(magician));
}

function make_great() {
  return magicians.map((m) => {
    return "Great " + m;
  });
}

const great_magicians = make_great();
great_magicians.forEach((magician) => console.log(magician));
show_magicians();
