const pokemonsContainer = document.querySelector(".pokemons");

export function renderPokemons(pokemons) {
  // sort pokemons by id
  pokemons = pokemons.sort((a, b) => {
    return a.id < b.id ? -1 : 1;
  })
  // delete all pokemon cards from container before rendering new ones
  while(pokemonsContainer.firstChild) {
    pokemonsContainer.removeChild(pokemonsContainer.firstChild);
  }
  // then for each pokemon create a new card
  pokemons.forEach(pokemon => {
    const { types, id, name, image } = pokemon;

    // create div with pokemon-card class
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // create text node with pokemon name
    const pokemonName = document.createTextNode(name);
    card.appendChild(pokemonName);

    // create image element and set its source to github link
    const img = document.createElement('img');
    img.setAttribute('src', image);
    card.appendChild(img);

    // create text node with pokemon types
    const pokemonType = document.createTextNode(types);
    card.appendChild(pokemonType);

    // add card to container
    pokemonsContainer.appendChild(card);
  })
}