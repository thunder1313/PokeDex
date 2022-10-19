import { pokemons } from "./data.js";
import "./render.js"

// create checked object with properties of checkbox ids and assign to them true or false
// whether it is clicked or not
let checked = {};
function grabCheckboxValues() { 
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    checkbox.forEach(box => {
      checked[box.id] = box.checked;
    })
}

// function to check whether pokemon is of type checked in checkboxes
function isType(pokemon) {
    for (const type of pokemon.types) {
        // if one of types is checked return true
        if (checked[type])
            return true;
    }
    return false;
}

export function filterPokemons() {
    // grab input from searchfield
    const input = document.querySelector('.searchfield').value;
    // and checked checkboxes
    grabCheckboxValues();
    // then filter pokemons - test if their name includes input and if they are of
    // at least one chosen types
    const filteredPokemons = pokemons.filter(pokemon => {
        return (pokemon.name.toLowerCase().includes(input) && isType(pokemon))
    })
    return filteredPokemons;
}