

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    // uppgift1(); //Övning 1
    // uppgift1punkt1(); //Övning 1
    // uppgift2(); //Övning 1
    // uppgift3(); //Övning 1
    // uppgift4(); //Övning 2
    // uppgift5(); //Övning 2
    // uppgift6(); //Övning 2
    // uppgift7(); //Övning 3
    // uppgift8(); //Övning 3
    // uppgift9(); //Övning 4
    // uppgift10(); //Övning 4
    // uppgift11(); //Övning 4
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

async function uppgift1punkt1() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/pokemons.json');

        if (!response.ok) {
            throw ('Något gick fel vid hämtning av data.');
        }

        const pokemonList = await response.json();

        pokemonList.forEach(pokemon => {
            console.log(pokemon);
        });

    } catch (error) {
        console.error('Fel:', error);
    }
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
        // Lägg in pokemonNamesList i bodyn för att det skall visas på sidan
        document.body.appendChild(pokemonNamesList);
        pokemonNamesList.style = 'list-style-type: none'; // Ta bort punkterna för listan

    } catch (error) {
        console.log('Fel;', error);
    }

}

async function uppgift4() {

    try {
        const response = await fetch('https://santosnr6.github.io/Data/dogs.json');
        
            if (!response.ok) {
                throw ('Något gick fel vid hämtning av data.');
            }
    
            const dogs = await response.json();
    
            dogs.forEach(dog => {
                console.log(dog);
            });
    
        } catch (error) {
            console.log('Error:' ,error);
        }

}

async function uppgift5() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/dogs.json');
        
            if (!response.ok) {
                throw ('Något gick fel vid hämtning av data.');
            }
    
            const dogs = await response.json();
    
            dogs.forEach(dog => {
                console.log(dog.name);
            });
    
    } catch (error) {
        console.log('Error:' ,error);
    }
}

async function uppgift6() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/dogs.json')
    
        if(!response.ok) {
            throw ('Något gick fel vid hämtning av data.');
        }

        const dogsList = await response.json();

        const dogNamesList = document.createElement('ul');

        dogsList.forEach(dog => {
            const dogListItem = document.createElement('li');
            dogListItem.textContent = dog.name;
            dogNamesList.appendChild(dogListItem);
            console.log(dog.name);
        });

        document.body.appendChild(dogNamesList);
        dogNamesList.style = 'list-style: none;'

    } catch (error) {
        console.log('Error:', error);
    }
}

async function uppgift7() {

    try {

        const response = await fetch('https://santosnr6.github.io/Data/books.json');

        if(!response.ok) {
            throw ('Något gick fel vid hämning av data.');
        }

        const books = await response.json();

        books.forEach(book => {
            console.log(book);
        });

    } catch (error) {
        console.log('Error', error);
    }
}

async function uppgift8() {

    try {
        const response = await fetch('https://santosnr6.github.io/Data/books.json');
        
        if(!response.ok) {
            throw ('Något gick fel vid hämtning av data.');
        }

        const books = await response.json();

        books.map(book => {
            if(book.pages < 500) {
                console.log(book);
            }
        })
    
    } catch (error) {
        console.log('Error', error);
    }
}

async function uppgift9() {

    try {
        const response = await fetch('https://santosnr6.github.io/Data/attendees.json');

        if(!response.ok) {
            throw ('Ojsan något gick visst fel vid hämtnin av data.');
        }

        const visitorList = await response.json();

        visitorList.map(visitor => {
            console.log(visitor);
        });

    } catch (error) {
        console.log('Error', error)
    }

}

async function uppgift10() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/attendees.json');

        if(!response.ok) {
            throw ('Ojsan något gick visst fel vid hämtnin av data.');
        }

        const visitorList = await response.json();

        visitorList.sort(visitor => {
            if(visitor.attending === true) {
                console.log(visitor);
            }
        });

    } catch (error) {
        console.log('Error', error)
    }
}

async function uppgift11() {
    try {
        const response = await fetch('https://santosnr6.github.io/Data/attendees.json');

        if(!response.ok) {
            throw ('Ojsan något gick visst fel vid hämtnin av data.');
        }

        const visitorList = await response.json();

        visitorList.filter(visitor => {
            if(visitor.attending === true && visitor.allergies !== '' && visitor.allergies.length > 0) {
                console.log(visitor);
            }
        });

    } catch (error) {
        console.log('Error', error)
    }
}