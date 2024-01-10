const inputEmail = document.getElementById("email-field");
const positionedLabel = document.getElementById("overlabel");
const inputEmailBottom = document.querySelector("#email-field-bottom");
const positionedLabelBottom = document.querySelector(".overlabelbottom")

inputEmail.addEventListener("focusin", () => {
  positionedLabel.classList.add("configure-label");
});

inputEmail.addEventListener("focusout", function () {
  if (inputEmail.value === "")
    positionedLabel.classList.remove("configure-label");
});

inputEmailBottom.addEventListener("focusin", () => {
    positionedLabelBottom.classList.add("configure-label");
  });
  
  inputEmailBottom.addEventListener("focusout", function () {
    if (inputEmailBottom.value === "")
      positionedLabelBottom.classList.remove("configure-label");
  });



//fyq
let buttons = document.querySelectorAll(".list-buttons");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let svg = button.querySelector("svg");
    displayDiv(this.classList[1]);
    svg.classList.toggle("rotate-svg");
  });
});

function displayDiv(buttonsClass) {
  const answerContainers = document.querySelectorAll(".answer-container");
  answerContainers.forEach(function (answerContainer) {
    if (answerContainer.classList.contains(buttonsClass)) {
      answerContainer.classList.toggle("display-answer");
    }
  });
}
