const domString = (weathArr) =>
{
  let string = '';
  weathArr.forEach(info =>
  {
    string += `<div class="row">`;
    string +=  `<div class='col-md-4 col-md-offset-4 ${info.weather[0].main}'>`;
    string +=    `<h2>${info.name}</h2>`;
    string +=    `<p>${info.weather[0].main}: ${info.main.temp}&degF</p>`;
    string +=    `<p>Air Pressure: ${info.main.pressure}</p>`;
    string +=    `<p>Wind Speed: ${info.wind.speed}</p>`;
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
