const pokemonsContainer = document.querySelector(".pokemons");

export function renderPokemons(pokemons) {
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