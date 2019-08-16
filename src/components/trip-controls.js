import {createTripTabsTemplate} from "./trip-tabs";
import {createTripFiltersTemplate} from "./trip-filters.js";

const createTripControlsTemplate = () => {
  return `<div class="trip-main__trip-controls  trip-controls">
    ${createTripTabsTemplate()}
    ${createTripFiltersTemplate()}
  </div>`;
};

export {createTripControlsTemplate};
