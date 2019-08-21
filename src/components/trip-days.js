import {createDayTemplate} from "./day.js";
import {removeTime} from "../helpers.js";


const createTripDaysTemplate = (eventsOriginal) => {
  const events = Array.from(eventsOriginal);

  events.sort((a, b) => a.schedule.start - b.schedule.start);

  let currentDay;
  let eventsByDay;
  let eventListsByDay = new Map();

  events.forEach((event, index) => {
    let eventDay = removeTime(event.schedule.start);

    if (index === 0) {
      currentDay = eventDay;
      eventsByDay = [];
    }

    if (eventDay !== currentDay) {
      eventListsByDay.set(currentDay, eventsByDay);
      eventsByDay = [];

      currentDay = eventDay;
    }

    eventsByDay.push(event);

    if (index === events.length - 1) {
      eventListsByDay.set(currentDay, eventsByDay);
    }
  });

  return `<ul class="trip-days">
    ${ Array.from(eventListsByDay.entries()).map((el, index) => (createDayTemplate({day: el[0], dayCounter: index + 1, events: el[1]}))).join(`\n`) }
  </ul>`;
};

export {createTripDaysTemplate};
