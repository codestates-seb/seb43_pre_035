import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_URL_NGROKTEST}`;
const token = localStorage.getItem('token') ? localStorage.getItem('token') :
    `${process.env.REACT_APP_NGROK_TOKEN}`;

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: {
            'ngrok-skip-browser-warning': '69420',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        ...options
    })
    return instance;
}

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: { Authorization: 'Bearer ' + token },
        ...options
    })
    return instance;
}

export const axiosDefault = axiosApi(BASE_URL)
export const axiosAuth = axiosAuthApi(BASE_URL)