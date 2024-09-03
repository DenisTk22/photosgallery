import { makeAutoObservable } from "mobx";

class Modal {

    activeId = ''; // первоначальное значение
    active = 'active'; // первоначальное значение
    notActive = true; // первоначальное значение
    buttonsActive = ''; // первоначальное значение - кнопки не отображаются

    constructor() {
        makeAutoObservable(this)
    }

    // обработка клика по картинке для её увеличения
    handleClick = (id) => {
        this.activeId = id; // присвоение activeId id картинки, по которой кликнули
        if (this.notActive === true) {
            this.active = 'active'; // присвоение active название класса 'active'
            this.buttonsActive = 'buttons__active';
            this.notActive = false
        } else {
            this.active = '';
            this.buttonsActive = '';
            this.notActive = true
        }
    }

    // обработка клика по кнопке "влево"
    previousPhoto = (i, arrayPhotos) => { // на входе индекс текущей фото и массив фото
        let previousEl = arrayPhotos[i - 1] // поиск в массиве с фото предыдущего адреса
        if (!previousEl) previousEl = arrayPhotos[arrayPhotos.length - 1] // если пролистали назад до элемента, которого нет, элемент = последнему элементу массива
        this.activeId = previousEl // присвоение activeId найденного адреса
    }

    // обработка клика по кнопке "вправо"
    nextPhoto = (i, arrayPhotos) => {
        let nextEl = arrayPhotos[i + 1]
        if (!nextEl) nextEl = arrayPhotos[0]; // если пролистали вперед до элемента, которого нет, элемент = первому элементу массива
        this.activeId = nextEl
    }
}

export default new Modal()