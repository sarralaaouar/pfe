import { Button, Input, message } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Alert } from "antd";
import axios from "axios";
import { useHistory } from "react-router-dom";
import React from "react";
import "./Register.css";

function Register() {
  let userString = localStorage.getItem("disney_user");
  const navigate = useHistory();
  if (userString) {
    navigate.push("/profile");
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(8).required(),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    name: Yup.string().min(3).required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      location: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        console.log(values);
        const data = await axios.post(
          "https://disney-backend.vercel.app/api/v1/users/login",
          { ...values }
        );
        const user = await data.data.data.user;
        const token = await data.data.token;
        if (data.status === 201) {
          localStorage.setItem("disney_user", JSON.stringify(user));
          localStorage.setItem("disney_token", JSON.stringify(token));
          navigate.push("/profile");
        }
      } catch (error) {
        console.log(error);
        message.error(
          error.response ? error.response.data.message : "something went wrong"
        );
      }
    },
  });

  return (
    <div className="login_s">
      <div className="card_login">
        <p className="title_login">Disney</p>
        <p className="subtitle">
          Welcome to Disney! Please enter your phone number
        </p>
        <form action="register" className="form" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name*</label>
          <Input
            size="large"
            className="input_login"
            placeholder="Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <Alert type="error" message={formik.errors.name} banner />
          )}
          <label htmlFor="Email">Email*</label>
          <Input
            size="large"
            className="input_login"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <Alert type="error" message={formik.errors.email} banner />
          )}
          <label htmlFor="Email">Phone Number*</label>
          <Input
            size="large"
            className="input_login"
            placeholder="Phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Alert type="error" message={formik.errors.phone} banner />
          )}
          <label htmlFor="Email">Password*</label>
          <Input.Password
            size="large"
            className="input_login"
            placeholder="Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <Alert type="error" message={formik.errors.password} banner />
          )}
          <label htmlFor="Email">Password Confirm*</label>
          <Input.Password
            size="large"
            className="input_login"
            placeholder="Password Confirm"
            name="passwordConfirm"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirm}
            onBlur={formik.handleBlur}
          />
          {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
            <Alert
              type="error"
              message={formik.errors.passwordConfirm}
              banner
            />
          )}
          <label htmlFor="Location">Location</label>
          <Input
            size="large"
            className="input_login"
            placeholder="Location"
            name="location"
            onChange={formik.handleChange}
            value={formik.values.location}
            onBlur={formik.handleBlur}
          />
          <div className="action_login">
            <Button onClick={formik.handleSubmit}>Sign Up</Button>
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
