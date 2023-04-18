const axios = require('axios');
const url = "https://koreanjson.com/users";


axios.interceptors.request.use(config => {
    // log a message before any HTTP request is sent
    console.log('Request was sent');

    return config;
  });

axios
  .get(url)
  .then((response) => console.log(response.data));


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
