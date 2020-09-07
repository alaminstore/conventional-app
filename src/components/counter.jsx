import React, { component, Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <h1>{this.formatChange()}</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
  formatChange() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
