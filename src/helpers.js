const removeTime = (timestamp) => {
  const date = new Date(timestamp);
  date.setSeconds(0, 0);
  date.setMinutes(0);
  date.setHours(0);

  return date.getTime();
};

export {removeTime};
