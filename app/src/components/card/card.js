import { DivComponet } from "../../common/div-component";
import './card.css';

export class Card extends DivComponet {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    #deleteFromFavorites() {
        this.upstate.favorites = this.upstate.favorites
            .filter(b => b.key !== this.cardState.key);
    }

    #addToFavorites() {
        this.upstate.favorites.push(this.cardState);
    }

    render() {
        this.element.classList.add('card');
        const existInFavorites = this.appState.favorites.find(
            b => b.key == this.cardState.key
        );
        this.element.innerHTML = `
            <div class="card__image">
                <img  src="https://covers.openoibrary.org/b/olid${this.cardState.cover_edition_key}-M.jpg" alt="Обложка" />
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
                </div>
                <div class="card__footer">
                    <button class="button__add ${existInFavorites ? 'button__active': ''}">
                        ${existInFavorites 
                            ? '<img  src="/static/favorites.svg" />'
                            : '<img  src="/static/favorites.svg" />'
                        }
                    </button>
                </div>
            </div>
        `;

        if (existInFavorites) {
            // подписка на удаление
            this.element.querySelector('button')
                .addEventListener('click', this.#deleteFromFavorites.bind(this));
        } else {
            // подписка на добавление
            this.element.querySelector('button')
                .addEventListener('click', this.#addToFavorites.bind(this));
        }
        
        return this.element;
    }
}