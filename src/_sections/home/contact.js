import React, { useContext, Fragment } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';
import { Button } from '../../_components/buttons';

const SectionCont = styled.div`
  margin-top: ${props => props.noMargin ? 0 : "4rem"};
  //background-color: ${props => props.theme.main.primaryColor};
  //color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    padding: 2rem 0;
  }
`
const TextCont = styled.div`
  
`
const SectionText = styled.p`
  text-align: center;
  color: ${props => props.theme.main.primaryColor};
  font-size: 1.5rem;
  @media(min-width: 768px){
    font-size: 2rem;
    width: 70%;
  }
`

const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default ({ noMargin })=> {
  const sectionText = useContext(Context).home.contact.title;
  return(
    <Fragment>
        <SectionCont noMargin={noMargin}>
          <Container>
            <Row align="center" justify="center">
              <Col xs={12} md={12}>
                <ButtonCont>
                  <SectionText>
                    {sectionText}
                  </SectionText>          
                </ButtonCont>
              </Col>
              <Col xs={12} md={12}>
                <ButtonCont>
                  <Button primary rounded>
                    Contactanos
                  </Button>
                </ButtonCont>
              </Col>
            </Row>
          </Container>
        </SectionCont>
    </Fragment>
  )
}