import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), url("../../assets/img/bg2.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px 0;
`;


const Button = styled.button`
  margin: 10px 0;
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="usuário"/>
          <Input placeholder="senha"/>
          <Button>LOGIN</Button>
          <Link>ESQUECEU SUA SENHA</Link>
          <Link>CRIAR UMA NOVA CONTA</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login