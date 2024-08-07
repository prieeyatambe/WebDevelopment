const cityInput = document.getElementById("cityname");
const searchButton = document.getElementById("searchbtn");
const cityElement = document.getElementById("city");
const timeElement = document.getElementById("datetime");
const tempElement = document.getElementById("temp");
const descriptElement = document.getElementById("weatherCondition");
const windElement = document.getElementById("windPre");
const humiElement = document.getElementById("humidity");
const iconElement = document.getElementById("weather-icon");

searchButton.addEventListener("click", function () {
  const apiKey = "687f5652c22b154f43c362fdbc507178";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const url = `${apiUrl}?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var name = data.name;
      var weatherDate = new Date(data.dt * 1000);
      var temp = data.main.temp;
      var des = data.weather[0].description;
      var wind = data.wind.speed;
      var humi = data.main.humidity;
      var iconCode = data.weather[0].icon;
      
      var iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;// open weeather map api provides icon image

      cityElement.innerText = `Weather of ${name}`;

      timeElement.innerText = `${weatherDate}`;

      tempElement.innerText = `${Math.round(temp)}℃`;

      descriptElement.innerText = `${des}`;

      windElement.innerText = `${wind}m/s`;

      humiElement.innerText = `${humi}%`;

      iconElement.src = iconUrl;

      const para1 = document.getElementById("windPre");
      para1.insertAdjacentHTML(
        "afterbegin",
        "<i class='bi bi-wind'></i>&nbsp;"
      );

      const para2 = document.getElementById("humidity");
      para2.insertAdjacentHTML(
        "afterbegin",
        "<i class='bi bi-moisture'></i>&nbsp;"
      );
    });
});
