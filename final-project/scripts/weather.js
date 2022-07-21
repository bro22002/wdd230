const url = "https://api.openweathermap.org/data/2.5/onecall?lat=38.980671&lon=-77.100258&exclude=minutely,hourly&appid=6183f18a45c8b68fe516abd5831f3718&units=imperial";
const currentTemp = document.querySelector("#temp");
const caption = document.querySelector("#desc");
const currentHumidity = document.querySelector("#humidity");
const windspeed = document.querySelector("#windspeed");
const icon = document.querySelector("#currentIcon");

// function to fetch data from API
async function weatherAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.table(data); // test the data from the API fetch
            displayCurrentWeather(data);
            displayDay1Forecast(data);
            displayDay2Forecast(data);
            displayDay3Forecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// call the weatherAPI function
weatherAPI();

// function to display current weather info
function displayCurrentWeather(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;

    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", desc);
    caption.innerHTML = `<i>${desc}<i>`;

    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}&deg;F</strong>`;
    currentHumidity.innerHTML = `<strong>${weatherData.current.humidity}%`;

    windspeed.innerHTML = `<strong>${weatherData.current.wind_speed}mph</strong>`;
}

const temp = document.querySelector("#temp1");
const caption1 = document.querySelector("#desc1");
const humidity1 = document.querySelector("#humidity1");
const windspeed1 = document.querySelector("#windspeed1");
const icon1 = document.querySelector("#icon1");

function displayDay1Forecast(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    const desc = weatherData.daily[1].weather[0].description;

    icon1.setAttribute("src", iconsrc);
    icon1.setAttribute("alt", desc);
    caption1.innerHTML = `<i>${desc}<i>`;

    temp.innerHTML = `<strong>${weatherData.daily[1].temp.max.toFixed(0)}&deg;F</strong>`;
    humidity1.innerHTML = `<strong>${weatherData.daily[1].humidity}%`;

    windspeed1.innerHTML = `<strong>${weatherData.daily[1].wind_speed}mph</strong>`;
    document.querySelector("#day1").innerHTML = new Date(weatherData.daily[1].dt * 1000).toLocaleDateString("en", { weekday: "long" });
}

const temp2 = document.querySelector("#temp2");
const caption2 = document.querySelector("#desc2");
const humidity2 = document.querySelector("#humidity2");
const windspeed2 = document.querySelector("#windspeed2");
const icon2 = document.querySelector("#icon2");

function displayDay2Forecast(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    const desc = weatherData.daily[2].weather[0].description;

    icon2.setAttribute("src", iconsrc);
    icon2.setAttribute("alt", desc);
    caption2.innerHTML = `<i>${desc}<i>`;

    temp2.innerHTML = `<strong>${weatherData.daily[2].temp.max.toFixed(0)}&deg;F</strong>`;
    humidity2.innerHTML = `<strong>${weatherData.daily[2].humidity}%`;

    windspeed2.innerHTML = `<strong>${weatherData.daily[2].wind_speed}mph</strong>`;
    document.querySelector("#day2").innerHTML = new Date(weatherData.daily[2].dt * 1000).toLocaleDateString("en", { weekday: "long" });
}
const temp3 = document.querySelector("#temp3");
const caption3 = document.querySelector("#desc3");
const humidity3 = document.querySelector("#humidity3");
const windspeed3 = document.querySelector("#windspeed3");
const icon3 = document.querySelector("#icon3");

function displayDay3Forecast(weatherData) {
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[3].weather[0].icon}.png`;
    const desc = weatherData.daily[3].weather[0].description;

    icon3.setAttribute("src", iconsrc);
    icon3.setAttribute("alt", desc);
    caption3.innerHTML = `<i>${desc}<i>`;


    temp3.innerHTML = `<strong>${weatherData.daily[3].temp.max.toFixed(0)}&deg;F</strong>`;
    humidity3.innerHTML = `<strong>${weatherData.daily[3].humidity}%`;

    windspeed3.innerHTML = `<strong>${weatherData.daily[3].wind_speed}mph</strong>`;
    document.querySelector("#day3").innerHTML = new Date(weatherData.daily[3].dt * 1000).toLocaleDateString("en", { weekday: "long" });
}
