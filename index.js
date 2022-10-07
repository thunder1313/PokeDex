import { pokemons } from "./data.js";
/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  while(pokemonsContainer.firstChild) {
    pokemonsContainer.removeChild(pokemonsContainer.firstChild);
  }
  pokemons.forEach(pokemon => {
    let { types, id, name, image } = pokemon;
    // create div with pokemon-card class
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    // create text node and append it to card
    const pokemonName = document.createTextNode(name);
    card.appendChild(pokemonName);
     // create image element and set its source as github link
     const img = document.createElement('img');
     img.setAttribute('src', image);
     card.appendChild(img);

     const pokemonType = document.createTextNode(types);
     card.appendChild(pokemonType);
    pokemonsContainer.appendChild(card);
  })
}
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/
function filterPokemons(pokemons) {
  const input = document.querySelector('#pokemon-name').value.toLowerCase();
  const checkbox = document.querySelectorAll('input[type="checkbox"]');
  let checked = [];
  checkbox.forEach(check => {
    if (check.checked) checked.push(check.id);
  })
  const filteredPokemons = pokemons.filter(pokemon => {
    return (pokemon.name.toLowerCase().includes(input) && checked.some(type => pokemon.types.includes(type)));
  })
  return filteredPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/