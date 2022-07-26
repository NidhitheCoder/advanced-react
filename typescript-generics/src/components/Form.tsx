import { useState } from "react";

interface FormProps<T> {
  values: T,
  children: (value: T) => JSX.Element,
};

const Form = <T extends {}>({values, children}: FormProps<T>) => {
  // const [state, setState] = useState({name: ''});
  // // Overwrite generics
  const [state, setState] = useState<{firstName:string | null}>({firstName: ''});

  return children(values);
};

export default Form;