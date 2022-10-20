import { useState } from "react";

const FormComponent = () => {
  const [age, setAge] = useState();
  const [name, setName] = useState();
  const [darkMode, setDarkMode] = useState();
  return (
    <form>
      Age :
      <input
        type="number"
        value={age}
        onChange={(e: any) => setAge(e.target.value)}
      />
      <br />
      Name :
      <input
        type="text"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <br />
      <br />
      Dark Mode:
      <input
        type="checkbox"
        value={darkMode}
        onChange={(e: any) => setDarkMode(e.target.checked)}
      />
    </form>
  );
};

export default FormComponent;
