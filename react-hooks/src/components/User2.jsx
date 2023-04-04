import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const User2 = () => {
  const [user, setUser] = useState([]);

  const cancelToken = axios.cancelToken.source();

  useEffect(() => {
    console.log("useEffects mounts");
    const id = useLocation().pathname.split("/")[2];
    axios
      .get(`https://jsonplaceholder.typicode.com/Users${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else {
          // TODO handle error
        }
      });

    return () => {
      console.log("useEffects unmounts");

      cancelToken.cancel();
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

export default User2;
