import React from "react";
import { Formik, Form, Field } from "formik";

const PostForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type='input' name='title' />
        <button type='submit' disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);

export default PostForm;
