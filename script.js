// Sélection des éléments HTML
const inputDisplay = document.querySelector(".input");
const outputDisplay = document.querySelector(".output");
const keys = document.querySelectorAll(".key");
let currentInput = "";

// Mise à jour des affichages
const updateDisplay = (input, output = "") => {
  inputDisplay.value = input;
  if (output) outputDisplay.value = output;
};

// Évaluation de l'expression
const evaluateExpression = () => {
  try {
    const result = eval(currentInput) || "0";
    updateDisplay(currentInput, result);
  } catch {
    updateDisplay(currentInput, "Error");
  }
};

// Gestion des clics sur les boutons
keys.forEach((key) =>
  key.addEventListener("click", () => {
    const keyValue = key.dataset.key;

    if (keyValue === "clear") currentInput = "";
    else if (keyValue === "backspace") currentInput = currentInput.slice(0, -1);
    else if (keyValue === "=") return evaluateExpression();
    else if (keyValue === "brackets")
      currentInput += currentInput.includes("(") ? ")" : "(";
    else currentInput += keyValue;

    updateDisplay(currentInput);
  })
);

// Support des touches clavier
document.addEventListener("keydown", (event) => {
  const { key } = event;
  if (!isNaN(key) || ["+", "-", "*", "/", "%", "."].includes(key))
    currentInput += key;
  else if (key === "Enter") return evaluateExpression();
  else if (key === "Backspace") currentInput = currentInput.slice(0, -1);
  else if (key === "Escape") currentInput = "";

  updateDisplay(currentInput);
});
