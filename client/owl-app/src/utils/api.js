import axios from 'axios'

const BASE_URL = 'http://localhost:3000/';
const Q_URL = `http://localhost:3001/questions/1`;

export const fetchCreate = (url, data) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        // window.location.href = Q_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}


export const fetchDelete = (url, id) => {
    fetch(`${url}${id}`, {
        method: "DELETE",
    })
    .then(() => {
        window.location.href = Q_URL;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}

export const fetchPatch = (url, data) => {
    fetch(url, {
        method : "PATCH",
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        // window.location.href = `${Q_URL}${id}`;
    })
    .catch((error) => {
        console.error('Error', error);
    })
}