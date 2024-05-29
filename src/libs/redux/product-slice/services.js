import axios from "axios";
export const productServices = {
  getProducts: () => axios("https://fakestoreapi.com/products"),
};