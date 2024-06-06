import  axios from 'axios'


export const productServices = {
    getProduct: ()=> axios('https://api.escuelajs.co/api/v1/products') 
}