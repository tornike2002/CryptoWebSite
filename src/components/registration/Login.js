import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Login.css";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // You can perform the login logic here
    const registrationValues = JSON.parse(
      localStorage.getItem("registrationValues")
    );

    if (
      registrationValues &&
      values.email === registrationValues.email &&
      values.password === registrationValues.password
    ) {
      navigate("/Home");
      console.log("Login successful");
    } else {
      console.log("Invalid login or email");
    }

    setSubmitting(false);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="Login-main_container">
        <div className="Login-main_wrapper">
          <div className="login-input_container">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="login-input_container">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Login</button>
          <br />
          <Link className="registration-transformer" to="/register">dont have account?</Link>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
