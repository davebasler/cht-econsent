import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Formik, Form, Field, ErrorMessage } from "formik";

const DataForm = () => (
  <>
    <h1>CHT eConsent</h1>
    <Formik
      initialValues={{ name: "", email: "", acceptedTerms: false }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }

        if (!values.acceptedTerms) {
          errors.acceptedTerms =
            "You must accept the terms and conditions before you proceed.";
        }

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
          <div>
            <label>
              Surname
              <Field type="text" name="surname" />
            </label>
            <ErrorMessage name="surname" component="span" />
          </div>
          <div>
            <label style={styles.text}>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label>Is the patient under 18 years old?</label>
            <Field type="checkbox" name="underage" />
            <ErrorMessage name="underage" component="span" />
          </div>
          <button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button style={styles.button} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    color: 'white',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 5,
    color: 'black',
  },
});

export default DataForm;