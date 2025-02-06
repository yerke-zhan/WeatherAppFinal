


// async function searchWeather() {

//     let city = document.getElementById('searchInput').value;
//     try {
//         let apiUrl;
//         if (city) {
//             let apiKey = 'e3ad77404dc88bee59f4a50942c3dbc6';
//             apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//             console.log(apiUrl);
//         }
//         let response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
        

//         document.getElementById('cityName').textContent = `${city}, город ${city}`;
//         document.getElementById('title').textContent = `${city} ауа райы`;

//         console.log(data);

//         const weatherInfoDiv = document.getElementById('weatherInfo');
//         weatherInfoDiv.innerHTML = `
//             <p> Температура: ${data.main.temp}°C </p>
//             <p> Максимальная температура: ${data.main.temp_max}°C </p>
//             <p> Минимальная температура: ${data.main.temp_min}°C </p>
//             <p> Ылғалдылық: ${data.main.humidity}% </p>
//             <p> Бұлт: ${data.clouds.all}% </p>
//             <p> Жел: ${data.wind.speed} км/с </p>
//             <p> Описание: ${data.weather[0].description} </p>
//         `;

//         console.log(weatherInfoDiv);

//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         alert('Не удалось получить данные о погоде. Пожалуйста, проверьте название города и API ключ.');
//     }
        
// }
const weatherDiv = document.querySelector('.city');

async function displayWeather(city) {
    try {
        let apiKey = 'e3ad77404dc88bee59f4a50942c3dbc6';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log(apiUrl);
        let response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        document.getElementById('cityName').textContent = `${city} қаласы`;

        console.log(data)

        let div = document.createElement('div');
        div.className = "weather-card"
        div.innerHTML = `
            <h2 id="title">${data.name}</h2>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAatJREFUaN7tmdGNhSAQRS3BEijhlUAJlmAJljAlWIIlbAmW8H79swQ7YCEZEuIKDjiIbiC5Pz6i98B4mfgapVTzZr3afAWoABWgAjwMIGYsyyJRn6bQiAbQZlutSWvTUo5WLXg0gDYo0KgKaHoywPfEvBU8DkCb6onmrcxudVojajDXSgL8RALcsjsxADMTgNH4doAJ02zcpZkJiI4VAB8EB7GZqi8hEHoWAHNAMRq36giBYJ7ZXgLIZF4llKPxMKQAfLnN48q3ifceyAC4zTnMfwgnuXcnYgCA2fyMK78eXO+dprAnltdmX3QfwJRp9WfnvbLl1OOCwe4a5b7yjh2AfaJgm+ErpxV/o0CAD2BgXHmxK4sN7x96F1bciTkVQGSs+xh46ZTXkUQoRkeGA+vKTgJLK3FlMITBdtZWZAMg1jBVsgQA50kOHO30aV06sSkW3nMkHcBJApssQJnDLHEFAI46ytg5uUaWEmpuHDEAEEoD6pxiAE8dwWaOsNrFif8AoLHZiUTpMR+cUxLgNINLfkr8/yWE5iQhMmXJlfcC1L+YKkAFqAAVIFa/mfArO5CvUjAAAAAASUVORK5CYII=" alt="">
            <div class="weather" id="weatherInfo"> 
                <p> Температура: ${data.main.temp}°C </p>
                <p> Ылғалдылық: ${data.main.humidity}% </p>
                <p> Бұлт: ${data.clouds.all}% </p>
                <p> Жел: ${data.wind.speed} м/с </p>
            </div>
        `;

        console.log(weatherDiv);
        weatherDiv.appendChild(div)

        } catch (error) {
            console.error('Error fetching weather data:', error);
            alert('Не удалось получить данные о погоде. Пожалуйста, проверьте название города и API ключ.');
        }
}



function showAlmatyWeather() {
    weatherDiv.innerHTML = '';
    displayWeather('Almaty');
}

showAlmatyWeather()

function showKazakhstanWeather() {
    weatherDiv.innerHTML = '';
    const cities = ['Astana', 'Pavlodar', 'Shymkent'];
if (cities){
    cities.forEach(city => {
        displayWeather(city);
    });
}

    displayWeather(cities);
}

async function searchWeather() {
    weatherDiv.innerHTML = '';
    const city = document.getElementById('searchInput').value;
    if (city) {
        displayWeather(city);
    } else {
        alert('Қаланың атын енгізіңіз!');
    }
}
