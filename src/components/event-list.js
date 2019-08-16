import {createEventTemplate} from "./event.js";
import {createEventEditTemplate} from "./event-edit.js";

let createFormFlag = true;

const createEventListTemplate = (events) => {
  return `<ul class="trip-events__list">

  ${events.map((event) => {
    const result = `<li class="trip-events__item"> ${createFormFlag ? createEventEditTemplate(event) : createEventTemplate(event)}</li>`;
    createFormFlag = false;
    return result;
  }).join(`\n`)}

  </ul>`;
};

export {createEventListTemplate};
