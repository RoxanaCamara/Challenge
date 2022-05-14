import { instanceAxios } from "./Server";

export const handleLogin = async (functionLogin) => {
  await instanceAxios.get("/user/me").then(function (response) {
    functionLogin(response.data);
  });
};
