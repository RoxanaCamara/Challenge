import { instanceAxios } from "./Server";


export const handleProducts = async () => {
    await instanceAxios.get("/products").then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  };
  