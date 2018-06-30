const {setUID,} = require('./firebaseAPI');

const checkLoginStatus = () =>
{
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setUID(user.uid);
      $('#movie, #srch, #logout').removeClass('hide');
      $('#myMovies').removeClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
      $('#auth').addClass('hide');
    } else {
      $('#movie, #srch, #logout').addClass('hide');
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    }
  });
};

module.exports =
{
  checkLoginStatus,
};
