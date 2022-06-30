import Abstract from "./abstract.js";

const FeatureNames = [`Age`, `Inoculations`, `Diseases`, `Parasites`];

const createFeaturesTemplate = (features) => {
  return features.map((feature, i) => (
    feature &&
    `<li>
      <strong>${FeatureNames[i]}: </strong>${feature}
    </li>`
  )).join(``);
};

const createPetCardTemplate = (info) => {
  const {
    name,
    type,
    breed,
    description,
    age,
    inoculations,
    diseases,
    parasites,
    img
  } = info;
  const url = require(`../../images/pets/${img.split('/').pop()}`);

  return (
    `<div class="info-card">
        <div class="info-card__img">
            <img src="${url}" alt="${name}">
        </div>

        <div class="info-card__content pet-card">
            <h3 class="h3 pet-card__name">${name}</h3>
            <span class="h4 pet-card__sub">${type} - ${breed}</span>
            <p class="h5">${description}</p>

            <ul class="pet-card__descr h5">
              ${createFeaturesTemplate([
                age,
                inoculations,
                diseases,
                parasites
              ])}
            </ul>
        </div>
    </div>`
  );
};

export default class PetCard extends Abstract {
  constructor(data) {
    super();
    this._data = data;
  }

  getTemplate() {
    return createPetCardTemplate(this._data);
  }
}
