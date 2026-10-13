'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(
        response => response.json()
    )
    .then(data => {
        return fetch(data.abilities[0].ability.url)
    })
    .then(
        response => response.json()
    )
    .then(
        data => {
            const effect = data.effect_entries.find(effect => effect.language.name === 'en');
            console.log(effect);
        }
    )
    .catch( error => console.log(error.message))

