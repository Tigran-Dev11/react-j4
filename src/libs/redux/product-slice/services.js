import axios from "axios";

export const productServices = {
  getProducts: () =>  {
    const data = axios("https://api.escuelajs.co/api/v1/products")


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
  
};
