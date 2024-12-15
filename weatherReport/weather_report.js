function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = 'afdabce32796e8bd4e99f4da779c66cd'; // Замените 'YOUR_API_KEY' на ваш фактический API ключ
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            console.log(data);
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Ошибка при получении погоды:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Не удалось получить погоду. Пожалуйста, попробуйте снова.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
