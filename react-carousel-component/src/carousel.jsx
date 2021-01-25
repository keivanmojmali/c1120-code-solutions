import React from 'react';




export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayIndex: 0, displayId: this.props.array[0].id};
    this.imageSrc = null;
    this.newImg = 0;
    this.currentPath = null;
    this.newId = null;
    this.handleClick = this.handleClick.bind(this);
    this.circleClass = "far fa-circle m-2";
    this.circles = null;
    this.intervalId = null;

  };
  handleClick(direction) {

    if (direction === 'back' || direction === 'forward') {
      if (direction === 'forward') {
        let max = this.props.array.length - 1;
        if (this.state.displayIndex === max) {
          let zeroId = this.props.array[0].id;
          this.setState({ displayIndex: 0, displayId: zeroId });
          return;
        };
        let idPlus = this.props.array[this.state.displayIndex + 1].id;
        let indexPlus = this.state.displayIndex + 1;
        this.setState({ displayIndex: indexPlus, displayId: idPlus });
      } else {
        if (this.state.displayIndex === 0) {
          let maxIndex = this.props.array.length - 1;
          let maxId = this.props.array[maxIndex].id;
          this.setState({ displayIndex: maxIndex, displayId: maxId });
          return;
        };
        let newId = this.props.array[this.state.displayIndex - 1].id;
        let indexMinus = this.state.displayIndex - 1;

        this.setState({ displayIndex: indexMinus, displayId: newId });
      }
    } else {
     let selectImg = this.props.array.findIndex((pokemon)=>{
       return pokemon.id === direction;
     });
     let selectId = this.props.array[selectImg].id;
     this.setState({displayIndex: selectImg, displayId: selectId});
    }

  };
  renderCircles(){
    this.circles = this.props.array.map((item)=>{
      let iconClass = 'far fa-circle';
      if(item.id === this.state.displayId){
        iconClass = 'fas fa-circle';
      }
      return (
        <li onClick={()=>{this.handleClick(item.id)}}><i value={item.id} className={iconClass}></i></li>
      )
    })
  };
  componentDidMount(){
  this.intervalId = setInterval(()=>{this.handleClick('forward')}, 3000);
  };
  componentWillUnmount(){
    clearInterval(this.intervalId);
  };
  render() {
    this.renderCircles();
    const current = this.state.displayIndex;
    this.currentPath = this.props.array[current].path;
    return (
      <div className="container carousel">
        <div className="row d-flex">
          <div onClick={() => {this.handleClick('back')}} className="col d-flex justify-content-center align-items-center">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="col d-flex justify-content-center align-items-center p-3 image-container">
            <img className="img-fluid" src={this.currentPath} alt="Pokemon Image"/>
          </div>
          <div onClick={() => { this.handleClick('forward')}} className="col d-flex justify-content-center align-items-center">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
          <ul className="d-flex list-unstyled">
            {this.circles}
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
