import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SHOP-SPORT</Logo>
        <Desc>Com foco no mundo esportivo ao alcance de todos, nossa loja é dividida em diferentes seções: feminina, masculina, infantil, com uma variedade incrível de produtos.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links úteis</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Masculino</ListItem>
          <ListItem>Feminino</ListItem>
          <ListItem>Minha conta</ListItem>
          <ListItem>Termo</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem><Room />Rua 10 Asa Sul, Brasília - DF</ContactItem>
        <ContactItem><Phone />+55 99 99999-9999</ContactItem>
        <ContactItem><MailOutline />contato@shop-sport.com</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer;