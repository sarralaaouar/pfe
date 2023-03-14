import React from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
// import { useForm, FormProvider } from "react-hook-form";
// import FormInput from "./CustomTextField";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

const AdressForm = ({ setActiveStep }) => {
  // const methods = useForm();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //here the values
      console.log(values);
      setActiveStep(1);
    },
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <form onSubmit={formik.handleSubmit} className="form_checkout">
        {/* <FormInput required name="firstName" label="First name" /> */}
        <Input
          placeholder="First name"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          onBlur={formik.handleBlur}
        />
        {/* error message  */}
        <p className="error_msg">
          {formik.touched.firstName && formik.errors.firstName}
        </p>
        <Input
          placeholder="Last name"
          id="lastname"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
        />
        <p className="error_msg">
          {formik.touched.lastName && formik.errors.lastName}
        </p>
        <Input
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        <p className="error_msg">
          {formik.touched.email && formik.errors.email}
        </p>
        <Button onClick={formik.handleSubmit}>Submit</Button>
      </form>
    </>
  );
};

export default AdressForm;
