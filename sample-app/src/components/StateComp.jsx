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
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  const selectUser = (id) => {
    const user =  users.find(user =>  user.id === id);
    setSelectedUser(user);
  }
  
  return (
  <div className="App">
    <h2>Selected user: {selectUser === null ? "None" : `${selectUser.name} is  ${selectUser.age} years old.`}cd </h2>
  </div>);
};

export default StateComp;
