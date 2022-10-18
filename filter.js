import { pokemons } from "./data.js";
import "./render.js"

let checked = {};
function grabCheckboxValues() {
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach(check => {
      checked[check.id] = check.checked;
    })
}

function isType(pokemon) {
    for (const type of pokemon.types) {
        if (checked[type])
            return true;
    }
    return false;
}

export function filterPokemons() {
    const input = document.querySelector('.searchfield').value;
    grabCheckboxValues();
    const filteredPokemons = pokemons.filter(pokemon => {
        return (pokemon.name.toLowerCase().includes(input) && isType(pokemon))
    })
    return filteredPokemons;
}