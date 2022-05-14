import { instanceAxios } from "./Server";

export const handleLogin = async () => {
  await instanceAxios.get("/user/me").then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
};
