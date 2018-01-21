import React from "react";

import Images from "./Images";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score -  this.state.score});
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
      <p>Click Counter!</p>
        <Images
          score={this.state.score}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
        </div>
    );
  }
}

export default Counter;


