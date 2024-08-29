import { makeAutoObservable } from "mobx";

class Modal {

    activeId = ''; // первоначальное значение
    active = 'active'; // первоначальное значение
    notActive = true; // первоначальное значение

    constructor() {
        makeAutoObservable(this)
    }

    // обработка клика по картинке
    handleClick = (id) => {
        this.activeId = id; // присвоение activeId id картинки, по которой кликнули
        if (this.notActive === true) {
            this.active = 'active'; // присвоение active название класса 'active'
            this.notActive = false
        } else {
            this.active = '';
            this.notActive = true
        }
    }
}

export default new Modal()