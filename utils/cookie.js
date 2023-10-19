const setCookie = (data) => {
  document.cookie = `token=${data}; max-age=${24 * 60 * 60}; path=/`;
};
const getCookie = () => {
  const cookie = document.cookie;
  if (cookie) {
  const token = cookie.split("=");
    return {
      [token[0]]: token[1],
    };
  } else {
    return false;
  }
};
export { setCookie, getCookie };
