import styled from "styled-components";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

`;
const Option = styled.option``;


const ProductList = () => {
  const location = useLocation();
  const cat =  location.pathname.split('/')[2];
  const [filters, setFilter] = useState({});
  const [sort, setSort] = useState('newest')

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilter({
      ...filters,
      [event.target.name] : value
    })
  }
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title >{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos</FilterText>
          <Select name='categories' onChange={handleFilters} defaultValue='Time'>
            <Option disabled selected>
              Time
            </Option>
            <Option>flamengo</Option>
            <Option>corinthians</Option>
            <Option>Liverpool</Option>
            <Option>Napoli</Option>
            <Option>PSG</Option>
          </Select>
          <Select name='size' onChange={handleFilters} defaultValue='Tamanho'>
            <Option disabled selected>
              Tamanho
            </Option>
            <Option>gg</Option>
            <Option>g</Option>
            <Option>m</Option>
            <Option>p</Option>
            <Option>pp</Option>
          </Select>          
        </Filter>
        <Filter>
          <FilterText>Ordenar produtos</FilterText>
          <Select onChange={(e) => setSort(e.target.value)} defaultValue=''>
            <Option value='newest'>Novidade</Option>
            <Option value='desc'>Menor preço</Option>
            <Option value='asc'>Maior preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList;