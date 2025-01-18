document.getElementById('search-btn').addEventListener('click', async () => {
  const city = document.getElementById('city-input').value;
  if (!city) {
      alert('Please enter a city name!');
      return;
  }

  const apiKey = '40df32b8888dd97120c165fbf4aad065'; // Replace with your OpenWeather API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.cod === 200) {
          document.getElementById('city-name').textContent = `City: ${data.name}`;
          document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
          document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
          document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
      } else {
          alert('City not found!');
      }
  } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Something went wrong. Please try again later.');
  }
});
