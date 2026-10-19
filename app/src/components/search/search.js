import { DivComponet } from "../../common/div-component";
import './search.css';

export class Search extends DivComponet {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.element.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        this.element.classList.add('search');
        this.element.innerHTML = `
            <div class="search__wrapper">
                <input 
                    type="text"
                    placeholder="Найти книгу или ватора..."
                    class="search__input"
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img src="/static/search.svg" alt="Иконка поиска" />
            </div>
            <button aria-label="Искать">
                </img src="/static/search.svg" alt="Иконка поиска" >
            </button>
        `;

        this.element.querySelector('button').addEventListener('click', this.search.bind(this));
        this.element.querySelector('input').addEventListener('keydown', (event) => {
            if (event.code === 'Event') {
                this.search();
            }
        });

        return this.element;
    }
}