let users = [
  {
    username: "Ahsan",
  },
  {
    username: "admin",
  },
  {
    username: "hussain",
  },
  {
    username: "taha",
  },
  {
    username: "asher",
  },
  {
    username: "ahmed",
  },
];

users.map((user) => {
  if (user.username === "admin") {
    return console.log("Hello admin, would you like to see a status report?");
  }
  console.log(`Welcome to the website ${user.username}`);
});
