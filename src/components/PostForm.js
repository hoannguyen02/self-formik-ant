import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { AntInput } from "./FormField";

let schema = yup.object().shape({
  title: yup.string().required("This is required field"),
});

const PostForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={schema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {({ isSubmitting, values }) => (
      <Form>
        <Field component={AntInput} name='title' />
        <ErrorMessage name='title' component='div' />
        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default PostForm;
