//capturing elements by id
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const desc = document.getElementById('description');
const weatherIcon = document.getElementById('icon');
const spinner = document.getElementById('spinner');
const errorText = document.getElementById('error-text');
const weatherStatus = document.getElementById('weather-status');
const inputText = document.getElementById('input-field');
// load data from api
const loadData = () => {
    const inputValue = inputText.value;
    inputText.value = '';
    if (inputValue.length > 0) {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e429d2bd34f1475b6ffebe63152f0d8c`)
            .then(res => res.json())
            .then(data => displayWeather(data));

        spinner.classList.remove('d-none');
        errorText.innerHTML = '';
        weatherStatus.style.display = 'block';
    }
    else {
        errorText.innerHTML = `
        <p class="p-3 w-25 bg-danger text-white text-center mx-auto">
            Please enter a valid city.
        </p>
        `;
        weatherStatus.style.display = 'none';
    };
}

// displaying weather data
const displayWeather = (data) => {
    spinner.classList.add('d-none');
    const { name, main, weather } = data;

    const temperature = Math.round(main.temp - 273.15);
    const description = weather[0].main;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    cityName.innerText = name;
    temp.innerText = temperature;
    desc.innerText = description;
    weatherIcon.src = iconUrl;

}