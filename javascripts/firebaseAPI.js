let fireBaseConfig = {};
let uid = '';

const setConfig = (fbConfig) =>
{
  fireBaseConfig = fbConfig;
};

const setUID = (newUID) => {
  uid = newUID;
};

module.exports =
{
  setConfig,
  setUID,
};
