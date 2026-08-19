const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let currentInput = "";

// Add number/operator to input
buttons.forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.value = currentInput;
  });
});

// Clear display
clearBtn.addEventListener("click", () => {
  currentInput = "";
  display.value = "";
});

// Calculate result
equalsBtn.addEventListener("click", () => {
  try {
    currentInput = eval(currentInput); // evaluate expression
    display.value = currentInput;
  } catch {
    display.value = "Error";
    currentInput = "";
  }
});
