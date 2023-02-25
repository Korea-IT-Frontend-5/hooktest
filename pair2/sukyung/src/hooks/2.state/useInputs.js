import { useState } from "react";

const useInputs = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  const onChangeForm = (e) => {
    setValues((prev) => ({...prev, [e.target.name]: e.target.value}));
  };

  return [values, onChangeForm, setValues];

}
export default useInputs;