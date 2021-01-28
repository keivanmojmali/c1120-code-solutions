import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';
const $root = document.querySelector('#root');

const examplePokemonArray = [
  { path: "https://i.pinimg.com/originals/c1/ce/0e/c1ce0e0b2a08b853f860e287b9604ddd.png",id:'001' },
  { path: "https://wallpaperaccess.com/full/18980.jpg",id:"004"},
  { path: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",id:'959'},
  { path: "https://static.pokemonpets.com/images/monsters-images-300-300/1-Bulbasaur.png",id:'774'}
]

ReactDOM.render(<Carousel array={examplePokemonArray} />,$root);
