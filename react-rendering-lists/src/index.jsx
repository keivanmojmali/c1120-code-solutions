import React from 'react';
import ReactDOM from 'react-dom';
const $root = document.querySelector('#root');


const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.listItems = this.listItems.bind(this);
  }
  listItems(pokemon) {
    return <li>{pokemon.name}</li>;
  };
  render() {
    const items = pokedex.map(this.listItems);
    return (
      <ul>
        {items}
      </ul>

    )
  }
}


ReactDOM.render(<Pokemon />,$root);
