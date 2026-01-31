
class WeatherForecast extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const city = this.getAttribute('city') || 'City';
    const weatherData = this.generateRandomWeather(city);
    this.renderWeather(weatherData);
  }

  generateRandomWeather(city) {
    const weatherConditions = ['Sunny', 'Cloudy', 'Rainy', 'Snowy', 'Windy', 'Stormy'];
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomTemp = Math.floor(Math.random() * 45) - 10; // Temp between -10 and 34

    return {
      name: city,
      main: {
        temp: randomTemp,
      },
      weather: [
        {
          description: randomCondition,
        },
      ],
    };
  }

  renderWeather(data) {
    this.shadowRoot.innerHTML = ''; // Clear previous content
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .container {
          padding: 2rem;
          border-radius: 1rem;
          background: #fff;
          text-align: center;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          width: 300px;
        }
        .city {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .temperature {
          font-size: 3rem;
          font-weight: bold;
          margin: 0;
        }
        .description {
          font-size: 1.2rem;
          text-transform: capitalize;
        }
      </style>
      <div class="container">
        <div class="city">${data.name}</div>
        <div class="temperature">${Math.round(data.main.temp)}&deg;C</div>
        <div class="description">${data.weather[0].description}</div>
      </div>
    `;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('weather-forecast', WeatherForecast);

// Function to generate a single set of unique lottery numbers
function generateLottoNumbers() {
  const numbers = new Set();
  while (numbers.size < 6) {
    numbers.add(Math.floor(Math.random() * 45) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

// Generate 3 sets of lottery numbers
function generateMultipleLottoTickets(numTickets) {
  const lottoTickets = [];
  for (let i = 0; i < numTickets; i++) {
    lottoTickets.push(generateLottoNumbers());
  }
  return lottoTickets;
}

const myLottoTickets = generateMultipleLottoTickets(3);
console.log("Generated Lottery Numbers:");
myLottoTickets.forEach((ticket, index) => {
  console.log(`Ticket ${index + 1}: ${ticket.join(', ')}`);
});
