import { useState } from "react"

const useInputs = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const onChang = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onReset = () => setValues(initialValues);

  return [values, onChang, onReset];
}

export default useInputs;