// Fisher–Yates Shuffle
// https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


const eventTypes = `taxi bus train ship transport drive flight check-in sightseeing restaurant`.split(` `);

const destinations = `airport, Geneva, Chamonix, hotel, Natural History Museum, Amsterdam, Saint Petersburg`
  .split(`, `);

const getDescription = () => {
  const statements = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`
    .split(`. `).map((statement) => `${statement}.`);

  shuffle(statements);

  return statements.slice(0, 1 + Math.floor(Math.random() * 3)).join(` `);
};

const getOffers = () => {
  const offerTypes = `luggage comfort meal seats train`.split(` `);

  const titles = {
    luggage: `Add luggage`,
    comfort: `Switch to comfort class`,
    meal: `Add meal`,
    seats: `Choose seats`,
    train: `Travel by train`
  };

  const offerTypesApplied = shuffle(Array.from(offerTypes)).slice(0, Math.floor(Math.random() * 3));

  const offers = offerTypes.map((offerType) => {
    return {
      offerType,
      title: titles[offerType],
      price: Math.floor(Math.random() * 300) + 10,
      applied: offerTypesApplied.includes(offerType)
    };
  });

  return offers;
};

const getEvent = () => {
  const event = {
    eventType: eventTypes[Math.floor(Math.random() * eventTypes.length)],
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    schedule: {
      start: Date.now() + (Math.random() * 5) * 24 * 60 * 60 * 1000,
      duration: (Math.random() * 1) * 24 * 60 * 60 * 1000
    },

    price: Math.floor(Math.random() * 4000),
    description: getDescription(),
    offers: getOffers(),

    photos: new Array(5).fill(``).map(() => ` http://picsum.photos/300/150?r=${Math.random()}`)
  };

  return event;
};


export { getEvent };
