export default function getRefs() {
  return {
    moviesContainer: document.querySelector('#gallery'),
    filmsList: document.querySelector('.films'),
    logo: document.querySelector('.nav-logo'),
    header: document.querySelector('[data-index="Header"]'),
    homeBtn: document.querySelector('[data-index="home"]'),
    myLibraryBtn: document.querySelector('[data-index="libraryBtn"]'),
    searchForm: document.querySelector('.film-search'),
    formInput: document.querySelector('.film-search-input'),
    posterImage: document.querySelector('.movie-image'),
    lightBoxContainerRef: document.querySelector('.js-lightbox'),
    lightBoxCloseRef: document.querySelector('[data-action="close-lightbox"]'),
    lightBoxContentRef: document.querySelector('.lightbox__content'),
    backdropModal: document.querySelector('.js-lightbox'),
    spinner: document.querySelector('.spinner'),
    paginationElement: document.getElementById('pagination'),
    paginationContainer: document.querySelector('.pagination__container_pages'),
    arrowLeft: document.querySelector('.arrow_left'),
    arrowRight: document.querySelector('.arrow_right'),
    headerContent: document.querySelector('[data-index="headerContent"]'),
    toolbarTime: document.querySelector('.toolbar_time'),
    switchTime: document.querySelector('#time-switch__toggle'),
    error: document.querySelector('.empty'),
    message: document.querySelector('.js-message'),
  };
}
