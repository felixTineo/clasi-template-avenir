import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Row, Col, Container, Hidden } from 'react-grid-system';
import { Button } from '../../_components/buttons';
import { ServiceCarousel, ReviewCarousel } from '../../_components/carousels';
import { navigate } from 'gatsby';

const MainCont = styled.section`  
  position: relative;
  //padding-bottom: 6rem;
  @media(min-width: 768px){
    min-height: 100%;
    //margin-top: 50vh;
  }  
`
const HeroInfoCont = styled.div`
  background-color: transparent;
  min-height: calc(50vh - 4rem);
  background-color:  ${props => props.theme.main.primaryColor};
  padding-bottom: 2rem;
`
const DescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  min-height: 100%;
  color: #fff;
  padding: 1rem;
  @media(min-width: 768px){
    padding: 0;
    padding-left: 4rem;
  }
`
const Title = styled.h2`
  font-size: 26px;
  //color: ${props => props.theme.main.primaryColor};
  font-weight: normal !important;
  @media(min-width: 768px){
    font-size: 32px;
  }    
`
const Description = styled.p`
  margin: 2rem 0;
`
const HeroImageContainer = styled.div`
  position: relative;
  min-height: 250px;
  background-color:  ${props => props.theme.main.primaryColor};
  display: flex;
  justify-content: center;
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const HeroImage = styled.img`
  width: 228px;
  height: 429px;
  @media(min-width: 768px){
    
  }
`
const TitleService = styled(Title)`
  //color: ${props => props.theme.main.primaryColor};
  //padding-top: 4rem;
  @media(min-width: 768px){
    font-size: 36px;
  }  
`
const SubTitleService = styled(Description)`
  font-weight: bold;
  margin: 4rem 0 0;
`
const TitleQuoteCont = styled.div`
  padding-top: 4rem;
`
const SvgCont = styled.svg`
  margin: 2rem 0;
  fill: ${props => props.theme.main.primaryColor};
`
const QuoteCarouselCont = styled.div`
  //padding-top: 6rem;
  @media(min-width: 768px){
    padding-top: 2rem;
  }
`
const CarouselCont = styled.div`
  position: relative;
  //padding-top: 4rem;
  //margin: 4rem 0;
`


export default ()=> {
  const state = useContext(Context).home;
  return(
    <Container>
    <MainCont>
      <HeroInfoCont>
          <Row>
            <Col xs={12} md={7} push={{ md: 5 }}>
              <HeroImageContainer>
                <HeroImage src="/phone.png" />
              </HeroImageContainer>
            </Col>                        
            <Col xs={12} md={5} pull={{ md: 7 }}>
              <DescriptionCont>
                <Title>
                  {state.about.banner.title}
                </Title>
                <Description>
                  {state.about.banner.subTitle}
                </Description>
                <Button rounded onClick={()=> navigate("/about")}>
                  {state.about.banner.buttonText}
                </Button>
              </DescriptionCont>
            </Col>            
          </Row>
      </HeroInfoCont>
      <div style={{ margin: "4rem 0" }}>
        <Row gutterWidth={128}>
          <Col xs={12} md={4}>
            <TitleService>Ofrecemos un servicio ajustado a las necesidades de cada cliente</TitleService>
          </Col>
          <Col xs={12} md={8}>
            <CarouselCont>
              <ServiceCarousel />
            </CarouselCont>
          </Col>
        </Row>
        </div>
        <Row>
          <Col xs={12} md={12}>
            <QuoteCarouselCont>
              <ReviewCarousel />
            </QuoteCarouselCont>
          </Col>          
        </Row>
    </MainCont>
    </Container>
  )
}