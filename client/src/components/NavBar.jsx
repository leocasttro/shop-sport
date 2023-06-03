import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "5px 0" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`


const Center = styled.div`
  flex: 1;
  text-align: center;
  a {
    text-decoration: none; 
    color: inherit; 
  }
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "18px" })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2,  justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  a {
    text-decoration: none; 
    color: inherit; 
  }
`


const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>PT</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color: 'gray', fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center><Link to='/'><Logo>SHOP-SPORT.</Logo></Link></Center>
        <Right>

          <MenuItem ><Link to="/register">Register</Link></MenuItem>
          <MenuItem ><Link to="/login">Sing in</Link></MenuItem>
          <MenuItem >
            <Badge badgeContent={quantity} color="primary">
              <Link to="/cart"><ShoppingCartOutlinedIcon color="action" /></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
