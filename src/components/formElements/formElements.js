import { ErrorMessage, Field, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className="block text-gray-600 dark:text-white"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input className="w-full border rounded-md p-2" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
};
export const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className="block text-gray-600 dark:text-white"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <Field name="date">
        {({ field, form }) => (
          <DatePicker
            id="date"
            {...field}
            selected={field.value}
            onChange={(date) => form.setFieldValue(field.name, date)}
          />
        )}
      </Field>
      <ErrorMessage name="date" component="div" />
      {/* <input className="w-full border rounded-md p-2" {...field} {...props} /> */}
      {/* {meta.touched && meta.error ? (
        <div className="text-red-500">{meta.error}</div>
      ) : null} */}
    </>
  );
};
