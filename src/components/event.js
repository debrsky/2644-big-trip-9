import {createElement} from "../utils.js";
import {createOffersSelectedListTemplate} from "./offers-selected-list.js";

class Event {
  constructor({
    eventType,
    destination,
    schedule,
    price,
    description,
    offers
  }) {
    // TODO клонирование вложенных объектов (schedule, offers)

    this._eventType = eventType;
    this._destination = destination;
    this._schedule = schedule;
    this._price = price;
    this._description = description;
    this._offers = offers;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  getTemplate() {
    return `<div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${this._eventType}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${this._eventType} to ${this._destination}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time"
          datetime="${new Date(this._schedule.start).toISOString()}">${new Date(this._schedule.start).toLocaleTimeString()}</time>
          &mdash;
          <time class="event__end-time" datetime="${new Date(this._schedule.start + this._schedule.duration).toISOString()}">${new Date(this._schedule.start + this._schedule.duration).toLocaleTimeString()}</time>
        </p>
        <p class="event__duration">${new Date(this._schedule.duration).toLocaleTimeString()}</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${this._price}</span>
      </p>

      <h4 class="visually-hidden">Offers:</h4>
      ${createOffersSelectedListTemplate(this._offers)}

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>`;
  }
}

export default Event;
