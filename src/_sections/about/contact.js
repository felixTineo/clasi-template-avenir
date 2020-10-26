import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Button } from '../../_components/buttons';

const MainCont = styled.div`
  margin: 8rem 0 0;
`

const TitleCont = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.p`
  margin: 0;
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
  text-align: center;
  width: 40%;
`
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

export default ()=> {
  const state = useContext(Context);
  return(
    <Container>
      <MainCont>
        <Row align="center" justify="center">
          <Col xs={12}>
            <TitleCont>
              <Title>
                {state.home.contact.title}
              </Title>
            </TitleCont>
          </Col>
          <Col xs={12}>
            <ButtonCont>
              <Button rounded primary>
                Contactanos
              </Button>
            </ButtonCont>
          </Col>
        </Row>
      </MainCont>
    </Container>
  )
}