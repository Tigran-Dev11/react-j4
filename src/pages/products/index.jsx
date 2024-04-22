import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../provider/global-provider";

const Products = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { basketItem ,count} = useContext(GlobalContext);
 


  console.log(count,'count');

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </div>
  );
};

export default Products;
