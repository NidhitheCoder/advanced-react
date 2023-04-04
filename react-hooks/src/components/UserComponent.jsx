import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const id = useLocation().pathname.split("/")[2];
    axios
      .get(`https://jsonplaceholder.typicode.com/Users${id}`, { signal })
      .then((res) => {
        if (!unSubscribed) {
          setUser(res.data);
        }
      })
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Cancelled");
        } else {
          // TODO handle error
        }
      });

    return () => {
      controller.abort();
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
