import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { DescCarousel } from '../../_components/carousels';

const ImageContainer = styled.div`
  /*background-color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    padding: 3rem 0;
  }*/
`

const Image = styled.img`
  object-position: center;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Carousel = styled.div`
  min-height: 100%;
  //padding-bottom: 2rem;
  @media(min-width: 768px){
    //padding: 4rem;
    padding-bottom: 8rem;
  }
`
const CarouselInnerCont = styled.div`
  position: relative;
  //background-color: ${props => props.theme.main.primaryColor};
  padding: 2rem;
`

export default ()=> {
  const state = useContext(Context).about;
  return(
    <Container>
      <Row nogutter>
        <Col xs={12} md={12}>
          <Carousel>
            <CarouselInnerCont>
              <DescCarousel />
            </CarouselInnerCont>
          </Carousel>
        </Col>        
      </Row>
    </Container>
  )
}