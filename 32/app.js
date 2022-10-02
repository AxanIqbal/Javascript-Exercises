let current_users = [
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

const new_users = [
  {
    username: "ahmed",
  },
  {
    username: "ali",
  },
  {
    username: "aamir",
  },
];

new_users.map((new_user) => {
  if (current_users.indexOf(new_user) === -1) {
    return console.log("This username is already taken please try new one.")
  }
  console.log("Username is available")
});

// users.map((user) => {
//   if (user.username === "admin") {
//     return console.log("Hello admin, would you like to see a status report?");
//   }
//   console.log(`Welcome to the website ${user.username}`);
// });
