const fetchConst = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => console.log(data));

console.log(fetchConst);

const favPokemon = fetch('https://pokeapi.co/api/v2/pokemon/25').then(response => response.json()).then(data => console.log(data));
