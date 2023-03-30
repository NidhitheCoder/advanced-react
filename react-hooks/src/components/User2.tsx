import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const User2 = () => {
  const [user, setUser] = useState([]);

  const cancellToken = axios.cancelToken.source();

  useEffect(() => {
    const id = useLocation().pathname.split("/")[2];
    axios
      .get(`https://jsonplaceholder.typicode.com/Users${id}`, {})
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Cancelled");
        } else {
          // TODO handle error
        }
      });

    return () => {};
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

export default User2;
