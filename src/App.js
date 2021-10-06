import React, { Component } from "react";
import Login from "./components/Login";
import JoinNow from "./components/JoinNow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistered: false,
    };
  }

  render() {
    const handleCallback = () => {
      this.setState({ isRegistered: !this.state.isRegistered });
    };
    return (
      <div>
        {this.state.isRegistered ? (
          <JoinNow handleCallback={handleCallback} />
        ) : (
          <Login handleCallback={handleCallback} />
        )}
      </div>
    );
  }
}

export default App;
