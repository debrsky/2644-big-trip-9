import {createTripInfoMainTemplate} from "./components/trip-info-main.js";
import {createTripTabsTemplate} from "./components/trip-tabs.js";
import {createTripFiltersTemplate} from "./components/trip-filters.js";
import {createTripSortTemplate} from "./components/trip-sort.js";
import {createTripDaysTemplate} from "./components/trip-days.js";


const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainTripInfoElement = document.querySelector(`.trip-main .trip-main__trip-info`);
render(tripMainTripInfoElement, createTripInfoMainTemplate(), `afterbegin`);

const tripMainTripControlsElement = document.querySelector(`.trip-main .trip-controls`);
const tripMainTripControlsHeaderElements = tripMainTripControlsElement.querySelectorAll(`h2`);

render(tripMainTripControlsHeaderElements[0], createTripTabsTemplate(), `afterend`);
render(tripMainTripControlsHeaderElements[1], createTripFiltersTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.page-main .trip-events`);

render(tripEventsElement, createTripSortTemplate(), `beforeend`);
render(tripEventsElement, createTripDaysTemplate(), `beforeend`);
