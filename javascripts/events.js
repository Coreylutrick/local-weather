const weather = require('./weather');

const pressEnter = () =>
{
  $(document).keypress((e) =>
  {
    if (e.key === 'Enter')
    {
      weather.showResults();
    }
  });
};

const clickSubmit = () =>
{
  $('#submit').click((e) =>
  {
    weather.showResults();
  });
};

const initializer = () =>
{
  pressEnter();
  clickSubmit();
};

module.exports =
{
  initializer,
};
