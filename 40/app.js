function make_album(city, country = "Pakistan") {
  return city + ", " + country;
}

console.log(city_country("Karachi"));
console.log(city_country("Lahore"));
console.log(city_country("London", "England"));
