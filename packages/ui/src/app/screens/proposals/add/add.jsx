import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Add = ({ onSubmit }) => (
  <Formik
    onSubmit={(values, { setSubmitting }) => {
      onSubmit(values)
      setSubmitting(false)
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <ErrorMessage name="title" component="div" />
        <Field type="string" name="title" required />

        <ErrorMessage name="dailyRate" component="div" />
        <Field type="number" name="dailyRate" />

        <ErrorMessage name="both" component="div" />
        <Field type="checkbox" name="both" />

        <ErrorMessage name="contact.email" component="div" />
        <Field type="email" name="contact.email" required />

        <ErrorMessage name="contact.name" component="div" />
        <Field type="string" name="contact.name" />

        <ErrorMessage name="description" component="div" />
        <Field type="string" name="description" />

        <button type="submit" disabled={isSubmitting}>
          Submit!
        </button>
      </Form>
    )}
  </Formik>
)

export default Add
