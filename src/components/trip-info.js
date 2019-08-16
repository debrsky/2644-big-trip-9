const createTripInfoTemplate = (eventsOriginal) => {
  const events = Array.from(eventsOriginal);

  // временно
  console.assert(events.length > 0);

  events.sort((a, b) => a.schedule.start - b.schedule.start);

  const totalCost = events.reduce((acc, cur) => acc + cur.price, 0);

  const dateFormat = (timestamp) => {
    const date = new Date(timestamp);

    return `${`jan feb mar apr may jun jul aug sep oct nov dec`
      .split(` `)[date.getMonth()].toUpperCase()} ${date.getDate()}`;
  };

  const dateStart = dateFormat(events[0].schedule.start);
  const dateFinish = dateFormat(events[events.length - 1].schedule.start);

  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${events[0].destination} &mdash; ... &mdash; ${events[events.length - 1].destination}</h1>
      <p class="trip-info__dates">${dateStart}&nbsp;&mdash;&nbsp;${dateFinish}</p>
    </div>

    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
</section>`;
};

export {createTripInfoTemplate};
