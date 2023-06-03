import { useEffect, useState } from "react";
import Product from "./Product";
import styled from "styled-components"; 
import axios from "axios";


const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(cat 
          ? `http://localhost:3003/api/products?category=${cat}` 
          : `http://localhost:3003/api/products`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  },[cat])

  useEffect(() => {
    cat && setFilterProducts(
      products.filter(item => Object.entries(filters).every(([key, values]) => 
        item[key].includes(values)
      ))
    )
  }, [products, cat, filters]);

  useEffect(() => {
    if ((sort === 'newest')) {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    }
  }, [sort]);

  console.log(sort)
  return (
    <Container>
      {cat ? filterProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : products.slice(0, 8).map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;