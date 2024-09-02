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
    previousPhoto = (i, array) => {
        let previousEl = array[i-1] // поиск в массиве с фото предыдущего адреса
        this.activeId = previousEl // присвоение activeId найденного адреса
    }

    // обработка клика по кнопке "вправо"
    nextPhoto = (i, array) => {
        let nextEl = array[i+1]
        this.activeId = nextEl
    }
}

export default new Modal()