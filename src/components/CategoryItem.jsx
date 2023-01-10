import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  height: 20vw;
  margin: 3px;
  position: relative;
  
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #fff;
  font-size: 18px;
`;
const Button = styled.button`
  margin-top: 10px;
  border: 1px solid #1f1d1d;
  background-color: #fff;
  color: #575151;
  font-weight: 600;
  font-size: 18px;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>COMPRAR AGORA</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem;