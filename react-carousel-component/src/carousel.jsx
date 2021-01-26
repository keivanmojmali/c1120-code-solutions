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
    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);

  };
  handleForward() {
    if(this.state.displayIndex === this.props.array.length){
      this.setState({displayIndex:0})
    } else{
      let newNum = this.state.displayIndex +1;
      this.setState({displayIndex: newNum});
    }
  };
  this.handleBack(){
    if(this.state.displayIndex === 0){
      let last = this.state.displayIndex.length -1;
      this.setState({displayIndex:last});
    }
  };
  renderCircles(){
     return this.props.array.map((item)=>{
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
    const current = this.state.displayIndex;
    const currentPath = this.props.array[current].path;
    return (
      <div className="container carousel">
        <div className="row d-flex">
          <div onClick={this.handleBack} className="col d-flex justify-content-center align-items-center">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="col d-flex justify-content-center align-items-center p-3 image-container">
            <img className="img-fluid" src={this.currentPath} alt="Pokemon Image"/>
          </div>
          <div onClick={this.handleForward} className="col d-flex justify-content-center align-items-center">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
          <ul className="d-flex list-unstyled">
            {this.renderCircles()}
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
