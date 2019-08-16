import {createTripInfoTemplate} from "./components/trip-info.js";
import {createTripControlsTemplate} from "./components/trip-controls.js";
import {createEventAddBtnTemplate} from "./components/event-add-btn.js";
import {createTripEventsTemplate} from "./components/trip-events";

import {getEvent} from "./data.js";

const events = new Array(30).fill(``).map(()=>getEvent());

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);
render(tripMainElement, createTripInfoTemplate(events), `beforeend`);
render(tripMainElement, createTripControlsTemplate(), `beforeend`);
render(tripMainElement, createEventAddBtnTemplate(), `beforeend`);

const tripEventsElement = document.querySelector(`.page-main .page-body__container`);
render(tripEventsElement, createTripEventsTemplate(events), `beforeend`);
