import * as axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://coding-challenge-api.aerolab.co/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdlZjQ3NmYyNWIxMDAwMjE4ZWEzY2UiLCJpYXQiOjE2NTI0ODcyODZ9.4aiNa7i3U1OhpMDVTzezsRYLWU9VcmPNXu8c3vW7WbI`,
  },
});

const handleGet = async (path, functionLogin) => {
  await instanceAxios.get(path).then(function (response) {
    if(response.data){
      functionLogin(response.data);
    }
  });
};

const handlePost = async (functionLogin, path, value) => {
  await instanceAxios.post(path, value).then(function (response) {
    functionLogin(response.data);
  });
};

//user
export const login = async (functionLogin) => {
   await handleGet('/user/me', functionLogin)
};

//add points
export const pointsAdd = async (functionLogin, value) => {
  await handlePost('/user/points', functionLogin, value)
};

//history
export const history = async (functionLogin) => {
  await handleGet('/user/history', functionLogin)
};

//comprar/buy
export const redeem = async (functionLogin, value) => {
  await handlePost('/redeem', functionLogin, value)
};

//products
export const products = async (functionLogin) => {
  await handleGet('/products', functionLogin)
};