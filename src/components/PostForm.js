import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

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
    {({ isSubmitting }) => (
      <Form>
        <Field type='input' name='title' />
        <ErrorMessage name='title' component='div' />
        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default PostForm;
