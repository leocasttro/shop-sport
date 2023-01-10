import styled from "styled-components";

import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

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
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title >Masculina</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrar produtos</FilterText>
          <Select>
            <Option disabled selected>
              Time
            </Option>
            <Option>Flamengo</Option>
            <Option>Corinthias</Option>
            <Option>Liverpool</Option>
            <Option>Napoli</Option>
            <Option>PSG</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Tamanho
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>          
        </Filter>
        <Filter>
          <FilterText>Ordenar produtos</FilterText>
          <Select>
            <Option selected>Novidade</Option>
            <Option>Menor preço</Option>
            <Option>Maior preço</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default ProductList;