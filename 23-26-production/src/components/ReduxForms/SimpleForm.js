/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  FormGroup, ControlLabel, FormControl,
  Button, ButtonToolbar, Radio, Checkbox
} from 'react-bootstrap';

const renderInput = ({ input, label, type }) => (
  <FormGroup controlId={input.name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...input} placeholder={label} type={type}/>
  </FormGroup>
);

const renderRadio = ({ input, label }) => (
  <Radio inline {...input} >{label}</Radio>
);

const renderCheckbox = ({ input, label }) => (
  <FormGroup>
    <Checkbox inline {...input}>{label}</Checkbox>
  </FormGroup>
);

const renderSelect = ({ input, label, children }) => (
  <FormGroup controlId={input.name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="select"
      {...input}
    >
      {children}
    </FormControl>
  </FormGroup>
);

const renderTextarea = ({ input, label }) => (
  <FormGroup controlId={input.name}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl
      componentClass="textarea"
      placeholder={label}
      {...input}
    />
  </FormGroup>
);


const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderInput} type="text" label="First Name"/>
      <Field name="lastName" component={renderInput} type="text" label="Last Name"/>
      <Field name="email" component={renderInput} type="email" label="Email"/>
      <FormGroup>
        <Field name="sex" component={renderRadio} type="radio" value="male" label="Male"/>
        <Field name="sex" component={renderRadio} type="radio" value="female" label="Female"/>
      </FormGroup>

      <Field name="favoriteColor" component={renderSelect} label="Favorite Color">
        <option></option>
        <option value="ff0000">Red</option>
        <option value="00ff00">Green</option>
        <option value="0000ff">Blue</option>
      </Field>

      <Field name="employed" component={renderCheckbox} type="checkbox" label="Employed"/>

      <Field name="notes" component={renderTextarea} type="textarea" label="Notes"/>

      <ButtonToolbar>
        <Button type="submit" bsStyle="primary" disabled={pristine || submitting}>
          {submitting ? <i /> : <i />} Submit
        </Button>
        <Button disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </ButtonToolbar>
    </form>
  );
};

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm);
