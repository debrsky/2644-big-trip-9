import {createOfferTemplate} from "./offer.js";

const createOffersSelectedListTemplate = (offers) => {
  return `<ul class="event__selected-offers">${offers.filter((offer) => offer.applied).map((offer) => createOfferTemplate(offer)).join(`\n`)}</ul>`;
};

export {createOffersSelectedListTemplate};
