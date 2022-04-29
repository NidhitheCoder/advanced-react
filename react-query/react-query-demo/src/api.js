import axios from "axios";


export const loginApi = async () => {
  const data = await axios.post('someAPi', {
    email: 'sample@gmail.com',
    password: 'samplePassword'
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return data;
};

export const getData = (setData) => {
  axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((response) => {
      // localStorage.setItem("access_token", response.data.access);
      // localStorage.setItem("refresh_token", response.data.refresh);
      // const userData = JSON.parse(atob(response.data.access.split(".")[1]));
      setData(response.data);
    })
    .catch((err) => {
      // show error message
      console.log('error is', err);
    });
}
