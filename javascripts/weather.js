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
};
