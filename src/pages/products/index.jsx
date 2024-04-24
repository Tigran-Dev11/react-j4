import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMAGES } from "../../assets/images";
import ProductCard from "../../components/productCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { useContext } from "react";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const usnavigate = useNavigate();

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
        return <img src={IMAGES.loader} alt="loader" className="loader" />;
    }

    const goToBasketPage = () => {
        usnavigate(ROUTES.basket)
    }

    return (
        <div className="products">
            <div className="productTop">
                <h1>Products</h1>
                <img src={IMAGES.basketIcon} alt="icon" className="basketIcon" onClick={goToBasketPage} />
            </div>
            <div className="productMenu">
                {products?.map((products) => (
                    <ProductCard key={products.id} products={products} />
                ))}
            </div>

        </div>
    )
}


export default Products

