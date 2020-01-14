import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export default () => {
  let history = useHistory();

  return (
    <div>
      <h3>Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={values => {
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
          history.push("/layout");
        }}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = "Campo requerido";
          }

          if (!values.password) {
            errors.password = "Campo requerido";
          }

          return errors;
        }}
      >
        {({ values, handleSubmit, handleChange, errors }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <div>{errors.password}</div>}
            </div>
            <input type="submit" value="Iniciar sesión" />
          </form>
        )}
      </Formik>
    </div>
  );
};
