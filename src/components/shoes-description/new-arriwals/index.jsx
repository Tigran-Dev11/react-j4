import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewArriwals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
         setLoading(true);
          try {
            const response = await axios("https://fakestoreapi.com/products");
            if (response?.status) {
              console.log(response.data);
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
        return <p>Loading...</p>;
      }
  return (
    <div>
    
    </div>
  )
}

export default NewArriwals
