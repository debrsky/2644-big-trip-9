const createOfferSelectorTemplate = ({
  offerType,
  title,
  price,
  applied
}) => {
  return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerType}-1" type="checkbox" name="event-offer-${offerType}" ${applied ? `checked` : ``}>
    <label class="event__offer-label" for="event-offer-${offerType}-1">
      <span class="event__offer-title">${title}</span>
      &plus;
      &euro;&nbsp;<span class="event__offer-price">${price}</span>
    </label>
  </div>`;

};

export {createOfferSelectorTemplate};
