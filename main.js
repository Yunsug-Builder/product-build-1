
const generateButton = document.getElementById('generate-button');
const numbersDisplay = document.getElementById('numbers-display');

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

generateButton.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    numbersDisplay.innerHTML = ''; // Clear previous numbers
    newNumbers.forEach(number => {
        const numberCircle = document.createElement('div');
        numberCircle.classList.add('number-circle');
        numberCircle.textContent = number;
        numbersDisplay.appendChild(numberCircle);
    });
});
