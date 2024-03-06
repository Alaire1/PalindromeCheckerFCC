const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkForPalindrome = (input) => {
  if (input === "") {
    alert("Please input a value");
    resultDiv.textContent = "Please enter at least 1 character.";
    resultDiv.style.color = "red";
    resultDiv.style.display = "block";
    checkPalindromeBtn.style.color = "red";
    return;
  }
  resultDiv.textContent = "";
  resultDiv.style.display = "none";
  checkPalindromeBtn.style.color = "black";
  resultDiv.replaceChildren();

  const cleanStr = input.replace(/[^a-zA-Z\d]/g, "").toLowerCase();
  console.log(cleanStr);
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right && left < cleanStr.length - 1) {
    console.log(cleanStr[left], cleanStr[right]);

    if (cleanStr[left] != cleanStr[right]) {
      const result = input + " is not a palindrome.";
      resultDiv.textContent = result;
      resultDiv.style.color = "red";
      resultDiv.style.display = "block";
      return;
    }
    left++;
    right--;
  }
  const resultText = input + " is a palindrome.";
  resultDiv.textContent = resultText;
  resultDiv.style.color = "green";
  resultDiv.style.display = "block";
  console.log(resultText);

  resultDiv.classList.remove("hidden");
};

checkPalindromeBtn.addEventListener("click", () => {
  checkForPalindrome(userInput.value);
  userInput.value = "";
});
