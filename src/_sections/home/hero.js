import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import { Container } from 'react-grid-system';
import RateBar from '../../_layout/header/rate-bar';
import { DownCircleFilled, DownOutlined } from '@ant-design/icons';
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
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    min-height: calc(100vh - (81px + 45px));    
  }
`
const TitleCont = styled.div`
  min-height: calc(50vh - (81px + 45px));    
  display: flex;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: left;
  color: #fff;
  @media(min-width: 768px){
    max-width: 70%;
    font-size: 50px;
  }
`
const FormCont = styled.div`
  background-image: url(${props => props.theme.home.hero.background});
  background-size: cover;
  background-position: center;
  background-color: #fff;
`
const FormInnerCont = styled.div`
  position: relative;
  flex-grow: 1;
  padding-top: 6rem;
  padding-bottom: 2rem;
  @media(min-width: 768px){
    height: 50vh;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display :flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;
  background-color: #fff;
  color: ${props => props.theme.main.primaryColor};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, .12),
              1px 2px 2px rgba(0, 0, 0, .12),
              1px 4px 4px rgba(0, 0, 0, .12),
              1px 8px 8px rgba(0, 0, 0, .12);
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
    <MainCont>
      <Container>
        <TitleCont>
          <Title className="animate__animated animate__fadeInUp">
            {state.home.hero.title}
          </Title>        
        </TitleCont>
      </Container>
      <FormCont>
        <Container>
          <FormInnerCont>
            <FormProperty shadow className="animate__animated animate__fadeInUp animate__delay-1s" />
            <DownButton href="#properties" className="animate__animated animate__pulse animate__delay-3s animate__infinite">
              <DownOutlined />
            </DownButton>          
          </FormInnerCont>
        </Container>
      </FormCont>
    </MainCont>
  )
}