import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./styled";
import ProductCard from "../../productCard";

const NewArriwals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios("https://fakestoreapi.com/products");
        if (response?.status) {
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
    return <p>Loading...</p>;
  }
  return (
    <S.shoesContainer>
      <S.titleShoes>NEW ARRIVALS</S.titleShoes>

      <ProductCard />
    </S.shoesContainer>
  );
};

export default NewArriwals;
