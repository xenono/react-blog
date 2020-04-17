import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Heading from 'components/atoms/Heading/Heading';

const AddItemForm = ({ itemType }) => (
  <div>
    <Heading>Add {itemType}</Heading>
    <Formik
      initialValues={{ title: '', content: '', imageUrl: '', videoUrl: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
          <Field type="text" name="content" />
          <ErrorMessage name="content" component="div" />
          <Field type="text" name="imageUrl" />
          <ErrorMessage name="imageUrl" component="div" />
          <Field type="text" name="videoUrl" />
          <ErrorMessage name="videoUrl" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddItemForm;
