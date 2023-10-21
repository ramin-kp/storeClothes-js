const shorten = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]}`;
  return newTitle;
};
export { shorten };
