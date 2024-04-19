import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";


const Products = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                const response = await axios(
                    'https://fakestoreapi.com/products/category/jewelery')
                if (response?.status === 200) {
                    setPosts(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        getPosts();
    }, []);

    return (
        <div className="products">
            {posts?.map((post) => (
                <div key={post.id}>
                    {post.title}{post.category}
                </div>
            ))}
        </div>
    )
}


export default Products

