let users = [];

if (users.length === 0) {
  console.log("We need to find some users!");
} else {
  users.map((user) => {
    if (user.username === "admin") {
      return console.log("Hello admin, would you like to see a status report?");
    }
    console.log(`Welcome to the website ${user.username}`);
  });
}
