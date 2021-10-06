import React, { Component } from "react";
import girl from "../assets/girl.jpg";
import email from "../assets/email.png";
import key from "../assets/key.png";

class JoinNow extends Component {
  render() {
    return (
      <div className="log__in">
        <h2 className="item">Welcome Back</h2>
        <p className="item__text">Login back into your account</p>

        <div className="log__in--main">
          <div className="user">
            <img src={girl} className="img__user" alt="" />
          </div>
          <h2>Log In</h2>
          <div className="input__name input__email">
            <label htmlFor="email">
              <img src={email} alt="" />
            </label>
            <input type="email" id="email" placeholder="E-mail" />
          </div>
          <div className="input__name">
            <label htmlFor="password">
              <img src={key} alt="" />
            </label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="forget__ps">
            <a href="login">Forgot Password?</a>
          </div>
          <button type="submit" className="sign__in">
            Login
          </button>
        </div>

        <div className="main__bottom main__bottom-join">
          <p>Don't have an account yet?</p>
          <button
            type="button"
            onClick={this.props.handleCallback}
            className="btn"
          >
            Join Now
          </button>
        </div>
      </div>
    );
  }
}

export default JoinNow;
