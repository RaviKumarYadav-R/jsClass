const number = Math.floor(Math.random() * 100) + 1;

document.querySelector(".guess-btn").addEventListener("click", () => {
  const inputVal = document.querySelector("#guess-input").value;
  if (number > inputVal) {
    alert("Too low");
  } else if (number < inputVal) {
    alert("Too High");
  } else {
    alert("Congratulation You guess the number");
  }
});
