import React, { Component } from "react";
import Button from "./Button/Button";
import Person from "./Person/Person";
import classes from "./App.css";
import Aux from "./hoc/Aux";
import WithClass from "./hoc/withClass";
import AuthContext from "./authContext/authContext";

class App extends Component {
  state = {
    authenticate: false,
    heading: "This is Lipu!",
  };

  headingHandler = () => {
    this.setState({
      heading: "This is Shailendra! ",
    });
  };

  loginHandler = () => {
    this.setState({ authenticate: true });
  };

  render() {
    return (
      <Aux>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticate,
            login: this.loginHandler,
          }}
        >
          <Person newHeading={this.state.heading} />
          <Button click={this.headingHandler} />
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
