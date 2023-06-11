document.querySelector('#search').addEventListener('click', getPokemon)

function getPokemon(e) {

    const name = document.querySelector('#pokemon').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            //map several arrays
            const kuasa = data.abilities.map((abilityData) => abilityData.ability.name).join(' and ');

            console.log(kuasa)

            document.querySelector('.pokemon-box').innerHTML = `
            <div id="image">
                <img src="${data.sprites.other["official-artwork"].front_default}" width="200" height="300">
            </div>
            <div id="description">
                <h3>Name</h3>
                <h1>${data.name}</h1>
                <h3>Abilities</h3>
                <p>${kuasa}</p>
            </div>
            `
        }).catch((error) => {
            console.log(error)
        })

    e.preventDefault();
}

