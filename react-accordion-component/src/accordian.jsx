import React from 'react';

export default class Accordian extends React.Component {
  constructor(props){
    console.log(props.dataArray);
    super(props);
    this.state = {display: null};
    this.listItems = this.listItems.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayList = null;
  };
  listItems() {
      return this.props.dataArray.map(item => {
        const itemClass = this.state.display === item.id ? 'border margin-small ' : 'display-none';
        return (
          <li className="list-none" onClick={() => this.handleChange(item.id)} key={item.id}>
            <h3 className='list'>{item.name}</h3>
            <p className={itemClass}>{item.info}</p>
          </li>
        )
      });
  };
  handleChange(event) {
    if(this.state.display === event) {
      this.setState({display: null})
    } else {
    this.setState({display: event});
    }
  };
  render() {
    this.displayList = this.listItems();
    return (
      <ul>
        {this.displayList}
      </ul>
    )
  }
}
