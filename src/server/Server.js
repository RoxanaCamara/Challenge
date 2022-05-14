import * as axios from 'axios';
console.log(process.env.TOKEN)

export const instanceAxios = axios.create({
    baseURL: 'https://coding-challenge-api.aerolab.co/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlZjQ3NmYyNWIxMDAwMjE4ZWEzY2UiLCJpYXQiOjE2NTI0ODcyODZ9.4aiNa7i3U1OhpMDVTzezsRYLWU9VcmPNXu8c3vW7WbI`}
});