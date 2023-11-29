import { ErrorMessage, Field, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// export const ImageInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label
//         className="block text-gray-600 dark:text-white"
//         htmlFor={props.id || props.name}
//       >
//         {label}
//       </label>
//       <input className="w-full border rounded-md p-2" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="text-red-500">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };
export const TextInput = ({ label, setFile, ...props }) => {
  const [field, meta] = useField(props);
  const handleFileChange = (e) => {
    console.log("calling");
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "application/pdf",
      ];
      const maxSizeMB = 2;

      if (
        allowedTypes.includes(selectedFile.type) &&
        selectedFile.size <= maxSizeMB * 1024 * 1024
      ) {
        setFile(selectedFile);
      } else {
        toast.error(
          "Please select a valid image file (JPEG, PNG, GIF) within 2MB."
        );
        e.target.value = null; // Clear the file input
      }
    }
    // setFile(selectedFile);
  };

  return (
    <>
      <label
        className="block text-gray-600 dark:text-white"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      {props.type === "file" ? (
        <input
          className="w-full border rounded-md p-2"
          {...field}
          {...props}
          onChange={(e) => handleFileChange(e)}
        />
      ) : (
        <input className="w-full border rounded-md p-2" {...field} {...props} />
      )}
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
