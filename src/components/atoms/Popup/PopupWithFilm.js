export default class PopupWithFilm {
    constructor(element) {
        this._element = element;
        this._closeButton = this._element.querySelector('.popup__close-button')
    }
    _elementOpenedClass = 'popup_opened';

    toggle = () => {
        this._element.classList.contains(this._elementOpenedClass)
            ? this._removeListeners()
            : this._setListeners();

        this._element.classList.toggle(this._elementOpenedClass);
    }

    _clickHandler = e =>
        (e.target === e.currentTarget || e.target === this._closeButton)
        && this.toggle();

    _keypressHandler = e =>
        (e.key === 'Escape' && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey)
        && this.toggle();

    _setListeners() {
        this._element.addEventListener('click', this._clickHandler);

        document.addEventListener('keypress', this._keypressHandler);
    }
    _removeListeners() {
        this._element.removeEventListener('click', this._clickHandler);

        document.removeEventListener('keypress', this._keypressHandler);
    }
}