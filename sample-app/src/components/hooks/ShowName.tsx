import React, { useEffect, useState } from "react";

const ShowName = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  // const [fullName, setFullName] = useState("");

  // useEffect(() => {
  //   setFullName(`${fName} ${lName}`);
  //   console.log(fullName)
  // }, [fName, lName]);

  const fullName = `${fName} ${lName}`;

  return (
    <div className="flex flex-col gap-2">
      <input value={fName} type="text" onChange={(e) => setFName(e.target.value)} />
      <input value={lName} type="text" onChange={(e) => setLName(e.target.value)} />
      {fullName}
    </div>
  );
};

export default ShowName;
