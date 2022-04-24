import axios from "axios";
// import { useState } from "react";

export const loginApi = async () => {
  const data = await axios.post('someAPi', {
    email: 'sample@gmail.com',
    password: 'samplePassword'
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    // .then((response) => { response && (data = response.data) })
    return data;
  // console.log('haii');

};