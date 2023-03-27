import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let unSubscribed = false;
    const id = useLocation().pathname.split("/")[2];
    fetch(`https://jsonplaceholder.typicode.com/Users${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!unSubscribed) {
          setUser(data);
        }
      });

    return () => {
      unSubscribed = true;
    };
  }, [id]);

  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <Link to="users/1">Fetch user 1</Link>
      <Link to="users/2">Fetch user 2</Link>
      <Link to="users/3">Fetch user 3</Link>
    </div>
  );
};

export default User;
