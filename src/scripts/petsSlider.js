import {
  shuffle
} from "./petsList";
import {
  createElement,
  render
} from "./utils/render";
import Modal from "./views/modal";
import PetCard from "./views/petCard";


const petsSlider = (petsData) => {
  let perPage = 3;
  let slides = [];

  const arrayOfIndexes = shuffle([...Array(petsData.length).keys()]);
  const sliderContent = document.querySelector('.slider__content');

  const btnNext = document.querySelector('.sl-next');
  btnNext.addEventListener('click', () => {
    sliderContent.classList.add('a-left');
  });

  const btnPrev = document.querySelector('.sl-prev');
  btnPrev.addEventListener('click', () => {
    sliderContent.classList.add('a-right');
  });

  let idx = 0;

  sliderContent.ontransitionend = (e) => {
    if (e.target.classList.contains('slider__cards-container')) {
      idx++;

      if (idx === 3) {
        currentSlides.remove();
        righSlides.remove();
        sliderContent.classList.remove('a-left');
        sliderContent.classList.remove('a-right');
        renderSlides(true);

        idx = 0;
      }
    }
  }

  const mqMobile = window.matchMedia('screen and (max-width: 767px)');
  const mqTablet = window.matchMedia('screen and (min-width: 768px) and (max-width: 1279px)');
  const mqDesktop = window.matchMedia('screen and (min-width: 1280px)');

  if (mqMobile.matches) {
    perPage = 1;
  } else if (mqTablet.matches) {
    perPage = 2;
  } else if (mqDesktop.matches) {
    perPage = 3;
  }

  let currentSlides, leftSlides, righSlides, savedSlides;

  const renderSlides = (isAction = false) => {
    currentSlides = isAction ? savedSlides : generateSlides();

    leftSlides = generateSlides();
    righSlides = generateSlides(true);
    savedSlides = leftSlides;

    if (isAction) {
      currentSlides.before(leftSlides);
      currentSlides.after(righSlides);
    } else {
      sliderContent.append(leftSlides, currentSlides, righSlides);
    }
  }

  const generateSlides = (isPair = false) => {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('slider__cards-container');

    let prevSlides = slides;
    let shuffled;
    let isUnique = true;

    do {
      shuffled = shuffle(arrayOfIndexes).slice(0, perPage);
      isUnique = !shuffled.every(el => !prevSlides.includes(el));
    } while (isUnique);

    if (!isPair) {
      slides = shuffled;
    }

    slides.forEach(position => {
      const petData = petsData[position];
      const petCardComponent = new PetCard(petData).getElement();
      const url = require(`../images/pets/${petData.img.split('/').pop()}`);

      const card = createElement(
        `<div class="card">
              <div class="card__img">
                  <img src="${url}" alt="${petData.name}">
              </div>
              <div class="card__title">${petData.name}</div>
              <div>
                  <button class="button button--outline" type="button">Learn more</button>
              </div>
          </div>`
      );


      cardsContainer.append(card);

      card.addEventListener('click', () => {
        const modal = new Modal(petCardComponent);
        render(document.body, modal, 'beforeend');
      })
    });

    return cardsContainer;
  }

  const checkScreen = () => {
    mqDesktop.onchange = (e) => {
      if ((e.matches)) {
        perPage = 3;

        if (sliderContent) {
          sliderContent.innerHTML = '';
        }

        renderSlides()
      }
    };
    mqTablet.onchange = (e) => {
      if ((e.matches)) {

        if (sliderContent) {
          sliderContent.innerHTML = '';
        }
        perPage = 2;
        renderSlides()
      }
    };
    mqMobile.onchange = (e) => {
      if ((e.matches)) {

        if (sliderContent) {
          sliderContent.innerHTML = '';
        }
        perPage = 1;
        renderSlides()
      }
    };
  }

  if (sliderContent) {
    renderSlides();
    checkScreen();
  }
}

export default petsSlider;
