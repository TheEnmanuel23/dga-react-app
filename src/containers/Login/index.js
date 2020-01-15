// @vendors
import React from "react";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// @utilities
import { useAuth } from "../../utilities/auth";
// @styles
import { Wrapper } from "./styles";

export default () => {
  let history = useHistory();
  const auth = useAuth();

  return (
    <Wrapper>
      <h3>Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={values => {
          auth.login(values, () => history.push("/layout"));
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
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <FormText color="danger">{errors.email}</FormText>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <FormText color="danger">{errors.password}</FormText>
              )}
            </FormGroup>
            <Button color="primary">Iniciar sesión</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
