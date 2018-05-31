const weather = require('./weather');

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('./db/apiKeys.json')
      .done((data) =>
      {
        resolve(data.apiKeys);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};

const retrieveKeys = () =>
{
  apiKeys()
    .then((result) =>
    {
      weather.setKey(result.weather.apiKey);
    }).catch((err) =>
    {
      console.error('No keys', err);
    });
};

module.exports =
{
  retrieveKeys,
};
