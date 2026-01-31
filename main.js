
const generateButton = document.getElementById('generate-button');
const numbersDisplay = document.getElementById('numbers-display');
const themeSwitcher = document.getElementById('theme-switcher');
const gameCountInput = document.getElementById('game-count');

// Theme switcher logic
themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

generateButton.addEventListener('click', () => {
    numbersDisplay.innerHTML = ''; // Clear previous numbers
    const gameCount = parseInt(gameCountInput.value, 10);

    for (let i = 0; i < gameCount; i++) {
        const newNumbers = generateLottoNumbers();
        const numberRow = document.createElement('div');
        numberRow.classList.add('number-row');
        
        newNumbers.forEach(number => {
            const numberCircle = document.createElement('div');
            numberCircle.classList.add('number-circle');
            numberCircle.textContent = number;
            numberRow.appendChild(numberCircle);
        });
        
        numbersDisplay.appendChild(numberRow);
    }
});
