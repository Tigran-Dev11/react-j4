import axios from "axios";
export const productServices = {
  getProducts: () => axios("https://api.escuelajs.co/api/v1/products"),
};