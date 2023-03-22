import { Button, Input } from "antd";
import { EyeTwoTone } from "@ant-design/icons";

import React from "react";
import "./Register.css";
function Register() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login_s">
      <div className="card_login">
        <p className="title_login">Disney</p>
        <p className="subtitle">
          Welcome to Disney! Please enter your phone number
        </p>
        <form action="login" className="form">
          <label htmlFor="name">Name*</label>
          <Input size="large" className="input_login" placeholder="Name" />
          <label htmlFor="Email">Email*</label>
          <Input size="large" className="input_login" placeholder="Email" />
          <label htmlFor="Email">Phone Number*</label>
          <Input size="large" className="input_login" placeholder="Phone" />
          <label htmlFor="Email">Password*</label>
          <Input.Password
            size="large"
            className="input_login"
            placeholder="Password"
          />

          <label htmlFor="Email">Password Confirm*</label>
          <Input.Password
            size="large"
            className="input_login"
            placeholder="Password Confirm"
          />
          <div className="action_login">
            <Button>Sign Up</Button>
          </div>
        </form>
        <p className="signup_text">
          Already have an account?{" "}
          <a className="link_reg" href="/login">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
