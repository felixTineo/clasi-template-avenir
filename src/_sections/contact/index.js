import React, { useContext } from 'react';
import Context from '../../_context'
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Input, Textarea } from '../../_components/inputs';
import { Button } from '../../_components/buttons';

const MainCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
`

const Title = styled.h1`
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  margin: 0;
  font-size: 30px;
  padding: 2rem;
  margin: 0;
  text-align: center;
  @media(min-width: 768px){
    padding: 4rem;
  }  
`
const SubTitle = styled.p`

`
const FormCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  padding: 2rem;
  //border-radius: 8px;
  width: 60%;
  margin: 0;
  background-color: ${props => props.theme.main.primaryColor};
  /*box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);*/
  @media(min-width: 768px){
    padding: 4rem;
    padding-top: 0;
    margin: 0;
  }
`
const ImgCaptcha = styled.img`
  //width: 100%;
  margin-bottom: 1rem;
`
const MailSpan = styled.span`
  color: #fff;
  text-decoration: underline;
`
const SubTitleFooter = styled(SubTitle)`
  color: #fff;
  text-align: center;
`
const ButtonContainer = styled.div`
   //margin-top: 32px;
   display:flex;
   //justify-content: flex-start;
   align-items: center;
   @media(min-width: 768px){
    justify-content: flex-end;
  }   
`
const Map = styled.img`
  width: 100%;
`
const MapTitle = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.8rem;
  margin-top: 4rem;
`

export default ()=> {
  const state = useContext(Context);
  return(
    <Container>
      <MainCont>
        <Row nogutter>
          <Col xs={12} md={12}>
            <Title>
              ¿Dudas? ¿Consultas? Estamos aquí para ayudarlo
            </Title>
            <FormCont>
            <Form onSubmit={e=> e.preventDefault()}>
              <Row>
                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12}>
                      <Input
                        placeholder="Nombre"
                        id="name"
                        //gray
                        vertical  
                      />
                    </Col>
                    <Col xs={12}>
                      <Input
                        placeholder="Teléfono"
                        id="phone"
                        //gray
                        vertical  
                      />                                    
                    </Col>                
                    <Col xs={12}>
                      <Input
                        placeholder="Email"
                        id="email"
                        //gray
                        vertical  
                      />                                            
                    </Col>
                    <Col xs={12}>
                      <Textarea
                        placeholder="Mensaje"
                        id="message"
                        gray
                        rows={7}
                        vertical  
                      />                  
                    </Col>                    
                    <Col xs={12} md={6}>
                      <ImgCaptcha src="/captcha.png" alt="no soy un robot" />
                    </Col>                    
                    <Col xs={12} md={6}>
                      <Button rounded block>Enviar</Button>
                    </Col>                             
                    <Col xs={12}>
                      <SubTitleFooter>
                        También puede escribirnos a <MailSpan>ventas@leasy.cl</MailSpan>
                      </SubTitleFooter>                                                              
                    </Col>                    
                  </Row>
                </Col>    
              </Row>
            </Form >        
            </FormCont>
          </Col>
          <Col xs={12} md={12}>
            <MapTitle>
              Visitanos en {" "}{state.office.address}
            </MapTitle>
          </Col>
          <Col xs={12} md={12}>
            <Map src="/map.png" />
          </Col>
        </Row>
      </MainCont>
    </Container>
  )
}