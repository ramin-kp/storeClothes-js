const usernameValidate = (username) => {
  const regex = /[a-z0-9.-_]{4,20}/;
  const result = regex.test(username);
  return result;
};
const passwordValidate = (password) => {
  const regex = /^.*?\W/;
  const result = regex.test(password);
  return result;
};
const validators = (username, password) => {
  const usernameValue = usernameValidate(username);
  const passwordValue = passwordValidate(password);
  if (usernameValue && passwordValue) {
    return true;
  } else if (!usernameValue && !passwordValue) {
    return "نام کاربری و رمز ورود معتبر نمی باشد.";
  } else if (!usernameValue) {
    return "نام کاربری معتبر نمی باشد.";
  } else if (!passwordValue) {
    return "رمز ورود شما باید بین 4تا16 کاراکتر باشد.";
  }
};

export { validators };
