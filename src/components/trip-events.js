import {createTripSortTemplate} from "./trip-sort.js";
import {createTripDaysTemplate} from "./trip-days.js";

export const createTripEventsTemplate = (events) => {
  return `<section class="trip-events">
    <h2 class="visually-hidden">Trip events</h2>
   <!-- Сортировка -->
   ${createTripSortTemplate()}

    <!-- Контент -->
    ${createTripDaysTemplate(events)}
  </section>`;
};
