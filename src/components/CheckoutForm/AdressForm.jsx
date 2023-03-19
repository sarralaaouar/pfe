import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { commerce } from "../../lib/commerce";

const AdressForm = ({ setActiveStep, checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );
  const options = shippingOptions.map((sO) => ({
    id: sO,
    label: `${sO.descrition} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    console.log(countries);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision]);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    adress: Yup.string().required("Adress is required"),
    city: Yup.number().required("City is required"),
    zip: Yup.number().required("Code Zip is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      adress: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      next({ ...values, shippingCountry, shippingSubdivision, shippingOption });
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

        <Input
          placeholder="Adress"
          id="adress"
          name="adress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.adress}
          onBlur={formik.handleBlur}
        />
        <p className="error_msg">
          {formik.touched.adress && formik.errors.adress}
        </p>

        <Input
          placeholder="City"
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur}
        />
        <p className="error_msg">{formik.touched.city && formik.errors.city}</p>

        <Input
          placeholder="Code Zip"
          id="zip"
          name="zip"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.zip}
          onBlur={formik.handleBlur}
        />
        <p className="error_msg">{formik.touched.zip && formik.errors.zip}</p>

        <Grid item xs={12} sm={6}>
          <InputLabel>Shipping Country</InputLabel>
          <Select
            value={shippingCountry}
            fullWidth
            onChange={(e) => setShippingCountry(e.target.value)}
          >
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Shipping Subdivision</InputLabel>
          <Select
            value={shippingSubdivision}
            fullWidth
            onChange={(e) => setShippingSubdivision(e.target.value)}
          >
            {subdivisions.map((Subdivision) => (
              <MenuItem key={Subdivision.id} value={Subdivision.id}>
                {Subdivision.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel>Shipping Option</InputLabel>
          <Select
            value={shippingOption}
            fullWidth
            onChange={(e) => setShippingOption(e.target.value)}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Button onClick={formik.handleSubmit}>Next</Button>
      </form>
    </>
  );
};

export default AdressForm;
