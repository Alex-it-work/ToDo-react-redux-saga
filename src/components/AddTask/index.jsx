import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { createTaskAction } from '../../actions';
import styles from './AddTask.module.scss';
import { TODO_VALIDATION_SCHEMA } from '../../utils/validationSchema';

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
    <Formik
      initialValues={initialTaskValues}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Field
              className={styles.inputTask}
              name='task'
              placeholder='your todo...'
            />
            <button className={styles.pushButton} type='submit'>
              Push
            </button>
            <ErrorMessage
              name='task'
              component='p'
              className={styles.errorValue}
            />
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
