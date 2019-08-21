const createDayTemplate = ({
  day,
  dayCounter,
  // events
}) => {

  const dateFormat = (timestamp) => {
    const date = new Date(timestamp);

    return `${`jan feb mar apr may jun jul aug sep oct nov dec`
      .split(` `)[date.getMonth()].toUpperCase()} ${date.getDate()}`;
  };

  return `<li class="trip-days__item  day" data-day="${new Date(day).toISOString().substr(0, 10)}">
    <div class="day__info">
      <span class="day__counter">${dayCounter}</span>
      <time class="day__date" datetime="${new Date(day).toISOString()}">${dateFormat(day)}</time>
    </div>
    <ul class="trip-events__list"></ul>
  </li>`;
};

export {createDayTemplate};
