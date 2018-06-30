const dom = require('./dom');

let weatherKey = '';

const setKey = (key) =>
{
  weatherKey = key;
};

const searchWeather = () =>
{
  const zipCode = $('#searchBar').val();
  return new Promise((resolve, reject) =>
  {
    $.ajax(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&APPID=${weatherKey}`)
      .done((data) =>
      {
        resolve(data);
      })
      .fail((error) =>
      {
        reject(error);
      });
  });
};

const showResults = () =>
{
  const weathInfo = [];
  searchWeather()
    .then((result) =>
    {
      weathInfo.push(result);
      dom.domString(weathInfo);
      $('#fiveDay').click(showForecastResults);
    })
    .catch((err) =>
    {
      console.error(err);
    });
};

const searchForecast = () =>
{
  const zipCode = $('#searchBar').val();
  return new Promise((resolve, reject) =>
  {
    $.ajax(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&APPID=${weatherKey}`)
      .done((data) =>
      {
        resolve(data);
      })
      .fail((error) =>
      {
        reject(error);
      });
  });
};

const showForecastResults = () =>
{
  const forecastInfo = [];
  searchForecast()
    .then((result) =>
    {
      for (let i = 0; i < 40; i++)
      {
        forecastInfo.push(result.list[i]);
        console.log(forecastInfo);
        dom.forecastDomString(forecastInfo);
        i = i + 7;
      };
    })
    .catch((err) =>
    {
      console.error(err);
    });
};

module.exports =
{
  showResults,
  setKey,
  showForecastResults,
};
