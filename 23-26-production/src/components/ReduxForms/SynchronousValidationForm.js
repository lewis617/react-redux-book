/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, ControlLabel, FormControl, Button, ButtonToolbar } from 'react-bootstrap';

const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.age) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number';
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FormGroup
    controlId={input.name}
    validationState={error && touched ? 'error' : null}
  >
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={label} type={type}/>
    {touched && error && <div className="text-danger">{error}</div>}
  </FormGroup>
);

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="email" type="email" component={renderField} label="Email"/>
      <Field name="age" type="number" component={renderField} label="Age"/>
      <ButtonToolbar>
        <Button bsStyle="primary" type="submit" disabled={submitting}>
          {submitting ? <i /> : <i />} Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate                 // <--- validation function given to redux-form
})(SyncValidationForm);
