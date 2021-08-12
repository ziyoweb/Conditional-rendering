import React, { Component } from "react";
import camera from "../assets/camera.png";
import person from "../assets/person.png";
import email from "../assets/email.png";
import key from "../assets/key.png";

class Login extends Component {
  render() {
    return (
      <div className="log__in">
        <h2 className="item">Welcome</h2>
        <p className="item__text">Signup into your account</p>

        <div className="log__in--main">
          <div className="user" />
          <div className="add__img">
            <a href="#">
              <img src={camera} alt="" />
            </a>
          </div>
          <h2>Sign Up</h2>

          <div className="input__name">
            <label htmlFor="username">
              <img src={person} alt="" />
            </label>
            <input type="text" id="username" placeholder="Full name" />
          </div>
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

          <button type="submit" className="sign__in">
            Sign Up
          </button>
        </div>

        <div className="main__bottom">
          <p>Already have an account?</p>
          <button className="btn" onClick={this.props.parentCallback}>
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
