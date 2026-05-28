import React from "react";

const FormControl = ({ field, form: { touched, errors }, children }) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <div className={hasError ? "error" : ""}>
      <div>{children}</div>
      {hasError && <span>{errors[field.name]}</span>}
    </div>
  );
};

export const Textarea = ({ field, form, ...props }) => {
  return (
    <FormControl field={field} form={form}>
      <textarea id={field.name} {...field} {...props} />
    </FormControl>
  );
};


export const Input = ({ field, form, ...props }) => {
  return (
    <FormControl field={field} form={form}>
      <input id={field.name} {...field} {...props} />
    </FormControl>
  );
};
