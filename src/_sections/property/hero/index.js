import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../../_context';
import { Container, Row, Col } from 'react-grid-system';

import Gallery from './gallery';
import Description from './description';

const MainCont = styled.div`
  padding-top: 10rem;
  background-color: ${props => props.theme.main.primaryColor};
`
export default ({ state })=> {
  return(
    <MainCont>
      <Container>
        <Row gutterWidth={0}>
          <Col xs={12} md={6} className="animate__animated animate__fadeInDown">
            <Description description={state} />
          </Col>          
          <Col xs={12} md={6} className="animate__animated animate__fadeIn">
            <Gallery images={state.images} />
          </Col>
        </Row>
      </Container>
    </MainCont>    
  )
}