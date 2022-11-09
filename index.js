import { pokemons } from "./data.js";
import { renderPokemons } from "./render.js"
import { filterPokemons } from "./filter.js"

// call renderPokemons() from render.js to render all pokemons at start
renderPokemons(pokemons);

const searchfield = document.querySelector('#pokemon-name');

searchfield.addEventListener("input", () => {
  renderPokemons(filterPokemons())
});

const checkbox = document.querySelectorAll('input[type="checkbox"]');

// to each checkbox add event listener
checkbox.forEach(box => {
  box.addEventListener("change", () => {
    renderPokemons(filterPokemons())
  })
})