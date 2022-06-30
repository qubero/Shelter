import './styles/index.scss';
import menuToggle from './scripts/menuToggle';
import petsList from './scripts/petsList';
import petsSlider from './scripts/petsSlider';
import petsData from './pets.json'

if (document.querySelector('.slider__content')) {
  petsSlider(petsData);
} else {
  petsList(petsData);
}

menuToggle();
