let userInput = prompt("you want to close tab");

while (userInput !== "yes" && userInput !== "no") {
  userInput = prompt("you want to close tab");
}

if (userInput === "yes") {
  window.close();
}
