const createPhotosTapeTemplate = (photos) => {
  return `<div class="event__photos-tape">
    ${photos.map((photoUrl) => `<img class="event__photo" src="${photoUrl}" alt="Event photo">`).join(`\n`)}
  </div>`;
};

export {createPhotosTapeTemplate};
