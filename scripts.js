const targetWord = "kiyo";
const h1Element = document.querySelector("h1");

function animateText() {
  let currentWord = "";
  let index = 0;

  function loopLetters() {
    if (index < targetWord.length) {
      let currentLetter = targetWord[index];
      let letter = currentLetter.toUpperCase() === currentLetter ? "A" : "a";

      let letterInterval = setInterval(() => {
        h1Element.textContent = currentWord + letter;

        // Check if the current letter matches the target letter
        if (letter === currentLetter) {
          clearInterval(letterInterval);
          currentWord += letter;
          index++;
          loopLetters(); // Move to the next letter
        } else {
          // Increment through the alphabet
          letter = String.fromCharCode(letter.charCodeAt(0) + 1);
          if (letter === "[") letter = "a"; // Loop to lowercase after 'Z'
          if (letter === "{") letter = "A"; // Loop to uppercase after 'z'
        }
      }, 10); // Speed of letter changes
    } else {
      setTimeout(resetAnimation, 120000); // 2-minute delay
    }
  }

  loopLetters();
}

function resetAnimation() {
  h1Element.textContent = "";
  setTimeout(animateText, 1000); // Small delay before restarting animation
}

window.onload = () => {
  setTimeout(animateText, 1000); // Start the animation 1 second after page loads
};
