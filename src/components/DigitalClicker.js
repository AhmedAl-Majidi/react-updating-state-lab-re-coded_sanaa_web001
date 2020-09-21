import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    state = {
      timesClicked: 0,
    };
  }
  handleClick = () => {
      this.setState({timesClicked: timesClicked+1})
  render() { return (<button onClick={this.handleClick}>{this.state.timesClicked}</button>);}
}

export default DigitalClicker;
