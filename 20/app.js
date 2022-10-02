const my_list = [
  {
    name: "mountains",
    values: [
      "The snow-mantled rock face of the colossal Mont Blanc Massif, located between France and Italy, dwarfs a pale twilight moonrise in the background.",
      "Fog obscures the summit of Malaysia's Mount Kinabalu, a 13,455-foot (4,101-meter) peak in northwestern East Malaysia.",
      "A towering trail of steam and smoke issues from Mount Semeru in the distance while gaping Mount Bromo (middle left) quietly simmers in East Java, Indonesia.",
      "Clouds encircle the summit of Nanga Parbat, a steep-walled mountain in the western Himalaya.",
    ],
  },
  {
    name: "rivers",
    values: [
      "In some places, the river flows into the ground and gets dry before meeting another water body.",
      "Water in the river comes through various sources.",
      "Rivers contain only 0.0001% of fresh water on earth.",
      "A river is a naturally flowing water body containing freshwater.",
    ],
  },
  {
    name: "countries",
    values: ["America", "Pakistan", "India", "Sri Lanka"],
  },
  {
    name: "cities",
    values: ["Karachi", "Lahore", "Hyderabad", "Islamabad"],
  },
  {
    name: "languages",
    values: ["Urdu", "Hindi", "Bengali", "Punjabi"],
  },
];

const my_value = my_list.find((value) => {
  return value.name === "languages";
});

console.log(my_value);
