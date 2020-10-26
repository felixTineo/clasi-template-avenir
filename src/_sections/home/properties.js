import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCarousel } from '../../_components/carousels';
import { Rectangular } from '../../_components/banners';

const MainCont = styled.section`
  //min-height: 100vh;
  //margin-top: ${props => props.noMargin ? "4rem" : "13rem"};
  position: relative;
  padding-top: 4rem;
  @media(min-width:768px){
    min-height: 120vh;
  }
`
const Title = styled.h2`
  //color: ${props => props.theme.main.primaryColor};
  margin: 0;
  margin-bottom: 4rem;
  font-weight: 300;
  @media(min-width:768px){
  }
`

const BannerCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  padding: 6rem 0;
  position: relative;
  top: -15vh;
  @media(min-width: 768px){
    top: -20vh;
    padding: 8rem 0;
    padding-top: 12rem;
  }
`

export default ({ noMargin })=> {
  const state = useContext(Context).home.properties;
  return(
    <MainCont id="properties" noMargin={noMargin}>
      <Container style={{ zIndex: 1 }}>
        <Row>
          <Col xs={12}>
            <Title>
              {state.title}
            </Title>                 
          </Col>
          <Col xs={12}>
            <PropertyCarousel />
          </Col>
        </Row>
      </Container>
      <BannerCont>
        <Container>
          <Row>
            <Col xs={12}>
              <Rectangular
                image={state.bannerImage}
                buttonText={state.buttonText}
                title={state.footer}
                icon="/icons/marker.svg"
              />
            </Col>        
          </Row>          
        </Container>
      </BannerCont>
    </MainCont>
  )
}