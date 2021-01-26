import React from 'react';




export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {displayIndex: 0};
    this.intervalId = null;
    this.handleForward = this.handleForward.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.goDirect = this.goDirect.bind(this);
    this.renderCircles = this.renderCircles.bind(this);

  };
  handleForward() {
    if(this.state.displayIndex === this.props.array.length-1){
      this.setState({displayIndex:0})
    } else{
      let newNum = this.state.displayIndex +1;
      this.setState({displayIndex: newNum});
    }
  };
  handleBack(){
    if(this.state.displayIndex === 0){
      let last = this.state.displayIndex.length -1;
      this.setState({displayIndex:last});
    }
  };
  goDirect(event){
    const id = event.target;
    console.log('event.target',id);
    console.log('event.tar.value',id)
    let newIndex = this.props.array.findIndex((item)=>{
      console.log(item.id,id)
      return item.id === id;
    })
    console.log(newIndex);
    this.setState({displayIndex:newIndex});
  };
  renderCircles(){
     return this.props.array.map((item)=>{
      let iconClass = 'far fa-circle';
      if(item.id === this.props.array[this.state.displayIndex].id){
        iconClass = 'fas fa-circle';
      }
      return (
        <li onClick={this.goDirect}><i value={item.id} className={iconClass}></i></li>
      )
    })
  };
  componentDidMount(){
  this.intervalId = setInterval(this.handleForward, 3000);
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
            <img className="img-fluid" src={currentPath} alt="Pokemon Image"/>
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
