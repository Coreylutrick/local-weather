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

const clickForecast = () =>
{
  $('#fiveDay').click((e) =>
  {
    weather.showForecastResults();
  });
};

const authEvents = () =>
{
  $('#signin-btn').click((e) =>
  {
    e.preventDefault();
    const email = $('#inputEmail').val();
    const pass = $('#inputPassword').val();
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((user) =>
      {
      })
      .catch((err) =>
      {
        $('#signin-error-messaage').text(err.message);
        $('#signInErrorDiv').removeClass('hide');
        console.error(err.message);
      });
  });
  $('#register-btn').click(() =>
  {
    const email = $('#registerEmail').val();
    const pass = $('#registerPassword').val();
    firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
      $('#registerError').text(error.message);
      $('#registerErrorDiv').removeClass('hide');
      console.error(error.message);
    });
  });
  $('#registerLink').click(() =>
  {
    $('#login-form').addClass('hide');
    $('#registration-form').removeClass('hide');
  });
  $('#signin-link').click((e) =>
  {
    $('#login-form').removeClass('hide');
    $('#registration-form').addClass('hide');
  });
  $('#logout').click(() =>
  {
    firebase.auth().signOut().then(function () {
      $('#auth').removeClass('hide');
      $('#authScreen').removeClass('hide');
      $('#search').addClass('hide');
      $('#myMovies').addClass('hide');
      $('#movie, #srch, #logout').addClass('hide');
    }).catch(function (error) {
      console.error(error);
    });
  });
};

const initializer = () =>
{
  pressEnter();
  clickSubmit();
  authEvents();
};

module.exports =
{
  initializer,
  clickForecast,
};
