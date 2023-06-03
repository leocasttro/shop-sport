import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";

import { plubicRequest } from "../requestMethod"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { addProduct } from "../redux/cartRedux"; 
import { useDispatch } from "react-redux";

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: solid 1px teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;


const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProducts] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await plubicRequest.get('/products/find/' + id);
        console.log(res)
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, size }));
    
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis, nostrum suscipit voluptatem recusandae, repudiandae saepe fugiat reprehenderit ipsum animi voluptate impedit aspernatur ut maxime molestiae numquam iste corrupti similique.
          </Desc>
          <Price>R$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Tamanho</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
              <FilterSizeOption disabled selected>--</FilterSizeOption>
              {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s.toUpperCase()}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')}/>
            </AmountContainer>
            <Button onClick={handleClick}>Adicionar ao carrinho</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product