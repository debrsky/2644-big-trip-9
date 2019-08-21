import {createTripInfoTemplate} from "./components/trip-info.js";
import {createTripControlsTemplate} from "./components/trip-controls.js";
import {createEventAddBtnTemplate} from "./components/event-add-btn.js";
import {createTripEventsTemplate} from "./components/trip-events";

import Event from "./components/event";
import EventEdit from "./components/event-edit";

import {removeTime} from "./helpers.js";
import {Position, render as renderNew} from "./utils.js";

import {getEvent} from "./data.js";

const EVENT_COUNT = 30;

const eventMocks = new Array(EVENT_COUNT).fill(``).map(()=>getEvent());

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
render(tripMainElement, createTripInfoTemplate(eventMocks), `beforeend`);
render(tripMainElement, createTripControlsTemplate(), `beforeend`);
render(tripMainElement, createEventAddBtnTemplate(), `beforeend`);

const tripEventsElement = document.querySelector(`.page-main .page-body__container`);
render(tripEventsElement, createTripEventsTemplate(eventMocks), `beforeend`);

/* *************************************************************************** */
const renderEvent = (eventMock, eventsContainer) => {
  const event = new Event(eventMock);
  const eventEdit = new EventEdit(eventMock);

  event.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      event.getElement().replaceWith(eventEdit.getElement());
      // document.addEventListener(`keydown`, onEscKeyDown);
    });

  eventEdit.getElement()
    .addEventListener(`submit`, () => {
      eventsContainer.replaceChild(event.getElement(), eventEdit.getElement());
    });

  eventEdit.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      eventEdit.getElement().replaceWith(event.getElement());
      // document.addEventListener(`keydown`, onEscKeyDown);
    });


  renderNew(eventsContainer, event.getElement(), Position.BEFOREEND);
};

eventMocks.forEach((eventMock) => {
  const dayId = new Date(removeTime(eventMock.schedule.start)).toISOString().substr(0, 10);
  const dayElement = tripEventsElement.querySelector(`.day[data-day="${dayId}"]`);
  const tripEventsList = dayElement.querySelector(`.trip-events__list`);

  renderEvent(eventMock, tripEventsList);
});
