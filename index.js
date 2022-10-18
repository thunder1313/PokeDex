import { pokemons } from "./data.js";
import { renderPokemons } from "./render.js"
import { filterPokemons} from "./filter.js"

// call renderPokemons() from render.js
renderPokemons(pokemons);

const searchfield = document.querySelector('#pokemon-name');

searchfield.addEventListener("input", () => {
  renderPokemons(filterPokemons())
});

const checkbox = document.querySelectorAll('input[type="checkbox"]');

checkbox.forEach(box => {
  box.addEventListener("change", () => {
    renderPokemons(filterPokemons())
  })
})