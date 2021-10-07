import { Field, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions';

function AddTask (props) {
  const { createTask } = props;

  const initialTaskValues = {
    task: '',
    isDone: false,
  };

  const submitHandler = (values, formikBag) => {
    createTask(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={initialTaskValues} onSubmit={submitHandler}>
      {formikProps => {
        return (
          <Form>
            <Field name='task' />
            <button type='submit'>Push</button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createTask: task => {
    dispatch(createTaskAction(task));
  },
});

export default connect(null, mapDispatchToProps)(AddTask);
