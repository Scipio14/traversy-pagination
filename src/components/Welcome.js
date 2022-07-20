import React,{Component} from "react";

class Welcome extends Component{
  constructor(){
    super();

    this.state ={
      user:"Scipio",
    }
  }
  render(){
    return <h1>Buenos días {this.state.user}</h1>
  }
}

export default Welcome;