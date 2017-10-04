import React, { Component } from 'react';

class CardContainer extends Component {
  constructor(){
    super();
  }

  formatData() {
    const keys = Object.keys(this.state.bigData.data);
    console.log(keys);
  }

  render() {
    console.log(this.props.bigData);
    return (
      <div>
        Card Container
      </div>
    );
  }
}


export default CardContainer;
