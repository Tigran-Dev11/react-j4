import axios from 'axios';


export const productServices = {
    getTodos: () => axios('https://www.fruityvice.com/api/fruit/all')
};