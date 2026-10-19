import { AbstractView } from "../../common/view.js";
import onchange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Search } from '../../components/search/search.js';
import { CardList } from '../../components/card-list/card-list.js';


export class MainView extends AbstractView {
    state = {
        list: [],
        numFound: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onchange(this.appState, this.appStateHook.bind(this));
        this.state = onchange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    destroy() {
        onchange.unsubscribe(this.appState);
        onchange.unsubscribe(this.state);
    }

    appStateHook(path) {
        if (path === 'favorites') {
            this.render();
        }

    }

    async stateHook(path) {
        if (path === 'searchQuery') {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            console.log(data);
            this.state.numFound = data.numFound;
            if (path === 'list' || path === 'loading') {
                this.render();
            }
        }

    }

    async loadList(q, offset) {
        const response = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return response.json();
    }

    render() {
        const main = document.createElement('div');
        main.append(new Search(this.state).render());
        main.append(new CardList(this.appState, this.state).render());
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}