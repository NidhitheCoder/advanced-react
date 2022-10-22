import { useEffect, useMemo, useState } from "react";

const FormComponent = () => {
  const [age, setAge] = useState();
  const [name, setName] = useState();
  const [darkMode, setDarkMode] = useState();

  // It changes when the name, age and darkMode changes 
  // const person = { name, age };

  // useMemo hook helps to reduce occuring each time occuration and it is consider the object is same in each render()
  // Here only the value of person changes the age and name changed 
  const person = useMemo(() => ({ name, age }), [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div
      className="bg-black p-24"
      style={{ background: darkMode ? "#333" : "#FFF" }}
    >
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
    </div>
  );
};

export default FormComponent;
