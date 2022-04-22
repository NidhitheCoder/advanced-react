import axios from "axios";
// import { useState } from "react";

export const loginApi = async () => {
  const data = await axios.post('https://school-lorien.herokuapp.com/api/token/', {
    email: 'admin@gmail.com',
    password: 'admin1234'
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => { response && (data = response.data) })
    return data;
  // console.log('haii');

};