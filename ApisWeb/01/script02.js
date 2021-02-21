/*fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos') //Conection with API
    .then(response => response.json()  //Callback of promisse of fetch;
    .then(json => {
    document.getElementById('response').innerHTML = json[1120].nome; //Callback of promisse of fetch;
    })); */


/* Section PokeApi https://pokeapi.co/*/
// 898 pokemons in this api kkk
/*fetch('https://pokeapi.co/api/v2/pokemon/898')
    .then(pokemonBody => pokemonBody.json())
    .then(pokemon => {
        console.log(pokemon);
        document.getElementById('response').innerHTML = pokemon.name;
    });
    */
/*
fetch('http://servicodados.ibge.gov.br/api/v3/noticias/')
    .then(body => {
        body.json
        console.log(body)})
    
    .then(json => {
        console.log(json);
        document.getElementById('response').innerHTML = json;
    });
*/
/*
fetch('https://blockchain.info/tobtc?currency=USD&value=500').then(
    body => {
        body.json()})
    .then(
        json => (
            console.log(json)
        )
    ) */
    
fetch('https://pokeapi.co/api/v2/pokemon/898')
    .then(pokemonBody => pokemonBody.json())
    .then(pokemon => {
        console.log(pokemon);
        document.getElementById('response').innerHTML = pokemon.name;
    });


