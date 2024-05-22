import axios from 'axios';
import { getProducts } from './actions';


export const productServices = {
    getProducts: () => axios('https://www.fruityvice.com/api/fruit/all')
};