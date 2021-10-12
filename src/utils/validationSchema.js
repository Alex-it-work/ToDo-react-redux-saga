import * as yup from 'yup';

export const TODO_VALIDATION_SCHEMA = yup.object({
  task: yup
    .string()
    .max(40, 'More than 50 symbols')
    .trim()
    .required('Write something to add'),
});
