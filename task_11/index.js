'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);

    data.abilities.forEach(ability => {
        const innerRequest = new XMLHttpRequest();
        innerRequest.open('GET', ability.ability.url);
        innerRequest.addEventListener('load', function() {
            const data = JSON.parse(this.responseText);
            const effect = data.effect_entries.find(effect => effect.language.name === 'en');
            console.log(effect);

        });
        innerRequest.send();
    });

});
request.send();
