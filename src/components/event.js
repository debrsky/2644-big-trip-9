import {createOffersSelectedListTemplate} from "./offers-selected-list.js";

export const createEventTemplate = ({
  eventType,
  destination,
  schedule,
  price,
  description,
  offers
}) => {

  return `<div class="event">
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${eventType} to ${destination}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time"
        datetime="${new Date(schedule.start).toISOString()}">${new Date(schedule.start).toLocaleTimeString()}</time>
        &mdash;
        <time class="event__end-time" datetime="${new Date(schedule.start + schedule.duration).toISOString()}">${new Date(schedule.start + schedule.duration).toLocaleTimeString()}</time>
      </p>
      <p class="event__duration">${new Date(schedule.duration).toLocaleTimeString()}</p>
    </div>

    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    ${createOffersSelectedListTemplate(offers)}

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`;
};
