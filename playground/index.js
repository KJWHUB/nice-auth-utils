import { useNiceAuth } from "../dist/index.js";

const { goNice, getNiceResult } = useNiceAuth();
const openWindowButton = document.getElementById("openWindow");

console.log(openWindowButton);
openWindowButton.addEventListener("click", () => {
  const inputElement = document.getElementById("encodeInput");
  const encodeData = inputElement.value;
  goNice({ encodeData: encodeData });
});

const resultButtonElement = document.getElementById("resultButton");
resultButtonElement.addEventListener("click", () => {
  console.log("resultButtonElement", getNiceResult());

  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = JSON.stringify(getNiceResult(), null, 2);
});
