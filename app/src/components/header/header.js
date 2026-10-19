import { DivComponet } from "../../common/div-component";
import './header.css';

export class Header extends DivComponet {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.element.classList.add('header');
        this.element.innerHTML = `
            <div>
                <img src="static/logo.svg" alt="Логотип" />
            </div>
            <div class="menu">
                <a class="menu__item" href="#">
                    <img src="/static/search.svg" alt="Поиск иконка" />
                    Поиск книг
                </a>
                <a class="menu__item" href="#favorites">
                    <img src="/static/favorites.svg" alt="Избранное иконка" />
                    Избранное
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>
                </a>
            </div>
        `;

        return this.element;
    }
}