import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
  const { loggedUser } = useContext(AuthContext);

  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/myToys?email=${loggedUser.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  //console.log(loggedUser);

  return (

  );
};

export default MyToys;
