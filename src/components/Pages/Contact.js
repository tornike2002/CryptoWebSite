import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavBar from "../NavBar";
import "./Contact.css";
import Footer from "../Footer";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});
export const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Perform form submission logic here
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div className="bgg-c">
      <NavBar />
      <section>
        <div className="contact-main_container mt-2">
          <div className="contact-text_wrapper d-flex flex-column justify-content-center container">
            <h1 className="tt-c">Contacts</h1>
            <p className="pp-c">
              In case you have any questions related to cryptocurrencies or the
              services we provide - contact us using the details below.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="contact-forms_container container mt-5 d-flex justify-content-between gap-5">
          {/* con info */}
          <div className="contact-info_wrapper">
            <h1 className="tt-c pb-4">Contact Info</h1>
            <div className="row d-flex flex-column gap-3">
              <div className="col">
                <div className="contact-helper-div d-flex align-items-center gap-3">
                  <i className="fa-solid fa-map text-danger"></i>
                  <div className="contact-info_corrector d-flex flex-column gap-2">
                    <h2 className="tt-c">Address</h2>
                    <p className="pp-c">
                      1234 North Avenue Luke Lane, South Bend, IN 360001
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="contact-helper-div d-flex align-items-center gap-4">
                  <i className="fa-solid fa-mobile-screen text-danger"></i>
                  <div className="contact-info_corrector d-flex flex-column gap-2">
                    <h2 className="tt-c">Phone</h2>
                    <p className="pp-c">
                      (123) 456-7890 (Mon-Fri 8:00am - 8:00pm)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="contact-helper-div d-flex align-items-center gap-3">
                  <i className="fa-solid fa-envelope-open text-danger"></i>
                  <div className="contact-info_corrector d-flex flex-column gap-2">
                    <h2 className="tt-c">Mail</h2>
                    <p className="pp-c">
                      1234 North Avenue Luke Lane, South Bend, IN 360001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* validation */}
          <div className="contact-froms_wrapper w-50">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="input-group mb-3 d-flex flex-column gap-2">
                  <label htmlFor="name" className="tt-c">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="text-dark form-control w-100 mw-100"
                    aria-label="Name"
                    placeholder="Name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="input-group mb-3 d-flex flex-column gap-2">
                  <label htmlFor="email" className="tt-c">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="text-dark form-control w-100 mw-100"
                    aria-label="Email"
                    placeholder="Email@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="input-group mb-3 d-flex flex-column gap-2">
                  <label htmlFor="phone" className="tt-c">
                    Phone
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="text-dark form-control w-100 mw-100"
                    aria-label="Phone Number"
                    placeholder="+995232323"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="input-group d-flex flex-column gap-3">
                  <label htmlFor="message" className="tt-c">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className="text-dark form-control w-100 mw-100"
                    placeholder="Message Here"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="error"
                  />
                </div>

                <button type="submit" className="btn btn-outline-light mt-3">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
};
