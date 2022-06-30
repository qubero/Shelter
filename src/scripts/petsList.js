import { createElement, remove, render, RenderPosition } from "./utils/render";
import Pagination from "./views/pagination";
import Modal from "./views/modal";
import PetCard from "./views/petCard";

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const generatePagesPositions = (array) => {
  const positions = [];
  const chunk = 3;
  let index = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < array.length; j += chunk) {
      const prevPage = positions[index - chunk] || [];
      let shuffled;

      do {
        shuffled = shuffle(array.slice(j, j + chunk));
      } while (shuffled.join('') === prevPage.join(''));

      positions.push(shuffled);
      index++;
    }
  }

  return positions.flat();
};

const petsList = (petsData) => {
  const arrayOfIndexes = [...Array(petsData.length).keys()];
  const initialRandom = shuffle(arrayOfIndexes);
  const randomPagesPositions = generatePagesPositions(initialRandom);

  const petsListComponent = document.querySelector('.pets-list');
  const petsListContent = document.querySelector('.pets-list__content');

  let paginationComponent = null;

  let currentPage = 0;
  let perPage = 8;

  const mqMobile = window.matchMedia('screen and (max-width: 767px)');
  const mqTablet = window.matchMedia('screen and (min-width: 768px) and (max-width: 1279px)');
  const mqDesktop = window.matchMedia('screen and (min-width: 1280px)');

  if (mqMobile.matches) {
    perPage = 3;
  } else if (mqTablet.matches) {
    perPage = 6;
  } else if (mqDesktop.matches) {
    perPage = 8;
  }

  const renderList = () => {
    const pagesCount = randomPagesPositions.length / perPage;
    let multy = currentPage * perPage;
    if (petsListContent) {
      petsListContent.innerHTML = '';
    }

    randomPagesPositions.slice(multy, multy + perPage).forEach(position => {
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


      petsListContent.append(card);

      card.addEventListener('click', () => {
        const modal = new Modal(petCardComponent);
        render(document.body, modal, 'beforeend');
      })
    });


    if (paginationComponent) {
      remove(paginationComponent);
    }

    paginationComponent = new Pagination();
    paginationComponent.init(currentPage, pagesCount);
    render(petsListComponent, paginationComponent, RenderPosition.BEFOREEND);

    const btnNext = document.querySelector('.btn-next');
    btnNext.addEventListener('click', () => {currentPage++; renderList();});

    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.addEventListener('click', () => {currentPage--; renderList();});

    const btnLast = document.querySelector('.btn-last');
    btnLast.addEventListener('click', () => {currentPage = pagesCount - 1; renderList();});

    const btnFirst = document.querySelector('.btn-first');
    btnFirst.addEventListener('click', () => {currentPage = 0; renderList();});
  }

  const checkScreen = () => {
    mqDesktop.onchange = (e) => {if ((e.matches)) {perPage = 8; currentPage = 0; renderList()}};
    mqTablet.onchange = (e) => {if ((e.matches)) {perPage = 6; currentPage = 0; renderList()}};
    mqMobile.onchange = (e) => {if ((e.matches)) {perPage = 3; currentPage = 0; renderList()}};
  }

  if (petsListContent) {
    renderList();
    checkScreen();
  }

}

export default petsList;
