const domString = (weathArr) =>
{
  let string = '';
  weathArr.forEach(info =>
  {
    string += `<div class="row">`;
    string +=  `<div class='col-md-4 col-md-offset-4 ${info.weather[0].main}'>`;
    string +=    `<h2>${info.name}</h2>`;
    string +=    `<p><strong>Current Temperature:</strong> ${info.main.temp}&degF</p>`;
    string +=    `<p><strong>Weather Conditions:</strong> ${info.weather[0].main}</p>`;
    string +=    `<p><strong>Air Pressure:</strong> ${info.main.pressure}</p>`;
    string +=    `<p><strong>Wind Speed:</strong> ${info.wind.speed}</p>`;
    string +=    `<button id="5day">5 Day Forecast</button>`;
    string +=  `</div>`;
    string += `</div>`;
  });
  printToDom(string);
};

const printToDom = (string) =>
{
  $('#weather').html(string);
};

module.exports =
{
  domString,
};
