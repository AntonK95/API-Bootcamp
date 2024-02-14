

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    //uppgift1();
    //uppgift2();
    uppgift3();
})


function uppgift1() {

    fetch('https://santosnr6.github.io/Data/pokemons.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}


async function uppgift2() {

    try{
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');

        if (!response.ok) {
            throw ('Något gick fel vid hämtning av data.');
        }

        const pokemonList = await response.json();
        
        pokemonList.forEach(pokemon => {
            console.log(pokemon.name);
        });

    } catch (error) {
        console.log('Fel;', error);
    }
}

async function uppgift3() {

    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');

        if (!response.ok) {
            throw ('Något gick fel vid hämtning av data.');
        }

        const pokemonList = await response.json();
        // Skapar en lista för att lagra HTML-elemment
        const pokemonNamesList = document.createElement('ul');
        //Loopa igenom varje pokemon och skapa ett listelement för varje namn
        pokemonList.forEach(pokemon => {
            const pokemonListItem = document.createElement('li');
            pokemonListItem.textContent = pokemon.name;
            pokemonNamesList.appendChild(pokemonListItem);
            console.log(pokemon.name);
        });

        document.body.appendChild(pokemonNamesList);
        pokemonNamesList.style = 'list-style-type: none';

    } catch (error) {
        console.log('Fel;', error);
    }

}