/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const asyncValidate = (values/* , dispatch */) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
        reject({ username: 'That username is taken' });
      } else {
        resolve();
      }
    }, 1000); // simulate server latency
  });

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <FormGroup
    controlId={input.name}
    validationState={error && touched ? 'error' : null}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      type={type}
      placeholder={label}
      {...input}
    />
    <FormControl.Feedback>
      <span>
        {asyncValidating && <i className="fa fa-cog fa-spin fa-fw"/>}
      </span>
    </FormControl.Feedback>
    {touched && error &&
    (<div className="text-danger">{error}</div>)}
  </FormGroup>
);

const AsyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      <ButtonToolbar>
        <Button bsStyle="primary" type="submit" disabled={submitting}>
          {submitting ? <i /> : <i />} Sign Up
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  validate,
  asyncValidate,
  asyncBlurFields: ['username']
})(AsyncValidationForm);
