import Announcement from "../components/Announcement"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=> props.type === "filled" && "none"};
  background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
  color: ${props=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;

const PriceDetails = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProductAmout = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 70vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=> props.type === "total" && "500"};
  font-size: ${props=> props.type === "total" && "24px"};
`;

const SummaryText = styled.span`

`;

const SummaryPrice = styled.span`

`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>SEU CARINHO</Title>
        <Top>
          <TopButton>CONTINUAR COMPRANDO</TopButton>
          <TopTexts>
            <TopText>Carrinho de compras(2)</TopText>
            <TopText>Lista de desejos(0)</TopText>
          </TopTexts>
          <TopButton type="filled">PAGAR AGORA</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="../../assets/img/cp.png"/>
                <Details>
                  <ProductName><strong>Produto:</strong> Camisa Corinthias</ProductName>
                  <ProductId><strong>ID:</strong> 347468</ProductId>
                  <ProductSize><strong>Tamanho:</strong> G</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmout>2</ProductAmout>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>R$ 300</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr />
            <Product>
              <ProductDetails>
                <Image src="../../assets/img/cp.png"/>
                <Details>
                  <ProductName><strong>Produto:</strong> Camisa Corinthias</ProductName>
                  <ProductId><strong>ID:</strong> 347468</ProductId>
                  <ProductSize><strong>Tamanho:</strong> G</ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmout>2</ProductAmout>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>R$ 300</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Resumo do pedido</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>R$ 300</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Envio estimado</SummaryText>
              <SummaryPrice>R$ 14</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Desconto no envio</SummaryText>
              <SummaryPrice>R$ -14</SummaryPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>R$ 300</SummaryPrice>
            </SummaryItem>
            <Button>Finalizar</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart