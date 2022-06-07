import React, { Component } from "react";

export default class Showdata extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        
          
         
              <td>{this.props.senddata.userName}</td>
              <td>{this.props.senddata.email}</td>
              <td>{this.props.senddata.password}</td>
            
          
         
      </>
    );
  }
}
