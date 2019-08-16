import {createOfferSelectorTemplate} from "./offer-selector.js";

const createOffersAvailableTemplate = (offers) => {
  return `<div class="event__available-offers">${offers.map((offer) => createOfferSelectorTemplate(offer)).join(``)}</div>`;
};

export {createOffersAvailableTemplate};
