import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import { Container } from 'react-grid-system';
import RateBar from '../../_layout/header/rate-bar';
import { DownCircleFilled } from '@ant-design/icons';
import { hexTorgba } from '../../_util';

const VeryMainCont = styled.section`
  background-image: ${props => `linear-gradient(${hexTorgba(props.theme.main.primaryColor, .8)},${hexTorgba(props.theme.main.primaryColor, .8)})`}, url(${props => props.theme.home.hero.background});
  background-position: right bottom;
  //background-size: cover;
  background-repeat: no-repeat;
  //color: #fff;
`
const MainCont = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media(min-width: 768px){
    min-height: calc(100vh - (81px + 1.4rem));    
  }
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: left;
  color: #fff;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 50px;
  }
`
const RateBarCont = styled.div`
  //text-decoration: none;
  position: absolute;
  bottom: 30px;
`
const DownButton = styled.a`
  text-decoration: none;
  position: absolute;
  bottom: -.9rem;
  color: #000;
  font-size: 1.8rem;
  cursor: pointer;
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context);

  return(
    <VeryMainCont>
      <Container>
      <MainCont>
        <Title className="animate__animated animate__fadeInUp">
          {state.home.hero.title}
        </Title>
        <FormProperty shadow className="animate__animated animate__fadeInUp animate__delay-1s" />
        <RateBarCont href="#properties" className="animate__animated animate__fadeInUp animate__delay-2s">
          <RateBar />
        </RateBarCont>
        <DownButton href="#properties" className="animate__animated animate__pulse animate__delay-3s animate__infinite">
          <DownCircleFilled />
        </DownButton>
      </MainCont>
      </Container>      
    </VeryMainCont>
  )
}