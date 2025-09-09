import { useState, type ChangeEvent } from "react";
// ChangeEvent capturing events from form field

// opject with no. of keys with string type and value of string type
interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export function useFormAndValidation(inputs: FormValues) {
  const [values, setValues] = useState<FormValues>(inputs);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: e.target.validationMessage,
    }));
    setIsValid(e?.target?.closest("form")?.checkValidity() ?? false); //check for input parent form and check if its all feild pass the validity check, if yea then send back the true;
  }

  function resetForm(
    values: FormValues = inputs,
    errors: FormErrors = {},
    isValid: boolean = false,
  ) {
    setValues(values);
    setErrors(errors);
    setIsValid(isValid);
  }

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  };
}
