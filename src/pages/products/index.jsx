import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMAGES } from "../../assets/images";
import ProductCard from "../../components/productCard";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const response = await axios(
                    'https://fakestoreapi.com/products/category/jewelery')
                if (response?.status === 200) {
                    setProducts(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) {
        return <img src={IMAGES.loader} alt="loader" className="loader"/>;
    }

    return (
        <div className="products">
<<<<<<< HEAD
            {products?.map((products) => (
               <ProductCard key={products.id} products={products}/>
=======
            {posts?.map((post) => (
                <div key={post.id}>
                    {post.title}{post.category}
                    <img src={post.image} alt="" />
                </div>
>>>>>>> 84df22e8f230b8ae87e5cabf9a20e9871e1de4d5
            ))}
        </div>
    )
}


export default Products

