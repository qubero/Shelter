const menuToggle = () => {
  const body = document.querySelector('body');
  const menu = document.querySelector('.menu');
  const toggle = document.querySelector('.toggle');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  let currentScrollY = 0;

  const openMenu = () => {
    currentScrollY = window.pageYOffset;
    body.classList.add('fixed');
    body.style.marginTop = `-${currentScrollY}px`;

    menu.after(overlay);
    menu.classList.add('menu--open');
    toggle.classList.add('toggle--open', 'header__button--open');
  };

  const closeMenu = () => {
    body.classList.remove('fixed');
    body.style.marginTop = `0`;
    window.scrollTo({
      top: currentScrollY,
      behavior: `instant`
    });
    currentScrollY = 0;

    menu.classList.remove('menu--open');
    toggle.classList.remove('toggle--open', 'header__button--open');
  };

  const shouldCloseMenu = (event) => {
    if (event.target.classList.contains('menu__link')) {
      closeMenu();
    }
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      if (menu.classList.contains('menu--open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }
  };

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  menu.addEventListener('click', shouldCloseMenu);

  const mql = window.matchMedia('(max-width: 767px)');
  mql.onchange = (e) => (!e.matches) && closeMenu();
}

export default menuToggle;
