import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const AddNewProposal = () => (
  <Mutation
    mutation={gql`
      mutation AddProposal($input : InputProposal!) {
        addProposal(input: $input)
      }
    `}
  >
    {(addProposal) => (
      <Formik
        onSubmit={(values, { setSubmitting }) => {
          addProposal({ variables: { input: values } })
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

            <button type="submit" disabled={isSubmitting}>
              Submit!
            </button>
          </Form>
        )}
      </Formik>
    )}
  </Mutation>
)

export default AddNewProposal
