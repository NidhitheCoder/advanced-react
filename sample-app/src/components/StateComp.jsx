import { useState } from "react";
import "./App.css";

const StateComp = ({ color, increment, underline, background }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "kyle", age: 27 },
    { id: 2, name: "kyla", age: 44 },
    { id: 3, name: "kyobi", age: 32 },
    { id: 4, name: "ken", age: 22 },
  ]);

  const [selectedUser, setSelectedUser] = useState();

  const incrementAge = (id) => {
    setUsers((currUsers) => {
      return currUsers.map((user) => {
        console.log(user);
      });
    });
  };
  return <div className="App"></div>;
};

export default StateComp;
