const axios = require('axios');
// const url = "https://koreanjson.com/users";
// const url = "https://6ff2-124-61-224-204.jp.ngrok.io/hello";
const url = "https://d9ce-124-61-224-204.ngrok-free.app/hello/world";
const url_signup = "https://d9ce-124-61-224-204.ngrok-free.app/users/signup";

axios.interceptors.request.use(config => {
    // log a message before any HTTP request is sent
    console.log('Request was sent');

    return config;
  });

axios
  .get(url)
  .then((response) => console.log(response.data));

axios
  .post(url_signup, {email: "sunga.jlh@gmail.com", password: "1111"})
  .then((response) => {
    const data = response.data;
    console.log(data);
  })


// axios
//     .get('https://koreanjson.com/users')
//     .then((response) => console.log(response.data))
//     .then(() => {
//         axios
//             .post('https://koreanjson.com/users', { nickName: 'ApeachIcetea', age: '20' })
//             .then((response) => {
//             //   const { data }  = response;
//             const data = response.data;
//             console.log(data);
//             })
//             .catch((error) => console.log(error));
//     })
