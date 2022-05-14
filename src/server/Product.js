import { instanceAxios } from "./Server";


export const handleProducts = async (functitonSetData) => {
  await instanceAxios.get("/products").then(function (response) {
    functitonSetData(response.data) ;
  });
  };
  