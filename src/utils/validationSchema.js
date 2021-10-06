import * as yup from 'yup';

export const TODO_VALIDATION_SCHEMA = yup.object({
  body: yup
    .string()
    .max(100, 'More than 100 symbols')
    .trim()
    .required('Write something to add'),
});
