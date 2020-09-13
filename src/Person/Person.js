import React, { Component } from "react";
import AuthContext from "../authContext/authContext";
import Aux from "../hoc/Aux";

class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        <h3>I am Shailendra and I am 24 years old! </h3>
        <h4>{this.props.newHeading}</h4>
        <input type="text" ref={this.inputElementRef} />
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please Click Llogin</p>
        )}
      </Aux>
    );
  }
}

export default Person;
