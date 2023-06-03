import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
  ), url("../../assets/img/bg.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CRIA SUA CONTA</Title>
        <Form>
          <Input placeholder="nome"/>
          <Input placeholder="sobrenome"/>
          <Input placeholder="usuário"/>
          <Input placeholder="e-mail"/>
          <Input placeholder="senha"/>
          <Input placeholder="confirma senha"/>
          <Agreement>Ao criar uma conta, concordo com o processamento dos meus dados pessoais de acordo com a <b>política de privacidade</b></Agreement>
          <Button>REGISTRAR</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register