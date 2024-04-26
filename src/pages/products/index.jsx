import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { IMAGES } from "../../assets/images";
import ProductCard from "../../components/productCard";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/category/electronics')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });
    }, []);
    

    const goToBasketPage = () => {
        navigate(ROUTES.basket);
    }

    if (loading) {
        return <img src={IMAGES.loader} alt="loader" className="loader" />;
    }

    return (
        <div className="products">
            <div className="productTop">
                <h1>Products</h1>
                <img src={IMAGES.basketIcon} alt="icon" className="basketIcon" onClick={goToBasketPage} />
            </div>
            <div className="productMenu">
                {products.map((product) => (
                    <ProductCard key={product.id} products={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;
