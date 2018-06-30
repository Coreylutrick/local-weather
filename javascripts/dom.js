const domString = (weathArr) =>
{
  let string = '';
  weathArr.forEach(info =>
  {
    string += `<div class="row">`;
    string +=  `<div id='weatherCard' class='cardStyle col-md-4 col-md-offset-4 ${info.weather[0].main} text-center'>`;
    string +=    `<img class='weathPic' data-icon="${info.weather[0].icon}" src="https://openweathermap.org/img/w/${info.weather[0].icon}.png">`;
    string +=    `<h2>${info.name}</h2>`;
    string +=    `<p><strong>Current Temperature:</strong> ${info.main.temp}&degF</p>`;
    string +=    `<p><strong>Weather Conditions:</strong> ${info.weather[0].main}</p>`;
    string +=    `<p><strong>Air Pressure:</strong> ${info.main.pressure} hpa</p>`;
    string +=    `<p><strong>Wind Speed:</strong> ${info.wind.speed} m/s</p>`;
    string +=    `<button id="fiveDay" class='btn btn-info'>5 Day Forecast</button>`;
    string +=  `</div>`;
    string += `</div>`;
    string += `<div class='row'>`;
    string +=   `<div id='forecastContainer'>`;
    string +=   `</div>`;
    string += `</div>`;
  });
  printToDom(string);
};

const forecastDomString = (weathArr) =>
{
  let string = '';
  weathArr.forEach(info =>
  {
    string += `<div class="row">`;
    string +=  `<div id='forecastCard' class='cardStyle col-sm-2 text-center'>`;
    string +=    `<img class='weathPic' data-icon="${info.weather[0].icon}" src="https://openweathermap.org/img/w/${info.weather[0].icon}.png">`;
    string +=    `<h2>${info.name}</h2>`;
    string +=    `<p><strong>Current Temperature:</strong> ${info.main.temp}&degF</p>`;
    string +=    `<p><strong>Weather Conditions:</strong> ${info.weather[0].main}</p>`;
    string +=    `<p><strong>Air Pressure:</strong> ${info.main.pressure} hpa</p>`;
    string +=    `<p><strong>Wind Speed:</strong> ${info.wind.speed} m/s</p>`;
    string +=    `<button id="saveForecastBtn" class='btn btn-info'>Save Forecast</button>`;
    string +=  `</div>`;
    string += `</div>`;
  });
  forecastPrint(string);
};

const printToDom = (string) =>
{
  $('#weather').html(string);
};

const forecastPrint = (string) =>
{
  $('#forecastContainer').html(string);
};

module.exports =
{
  domString,
  forecastDomString,
};
