import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { truncate, priceFormat } from '../../../_util';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  //background-color: ${props => props.theme.main.primaryColor};
  //background-color: gold;
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem 4rem;
  }
`
const OperationCode = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  color: #666;
`
const Price = styled(Title)`
  //color: #fff;
  color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  //color: #fff;
  color: ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    margin: 0;
  }
`
const SvgCont = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  ///color: #fff;
  color: ${props => props.theme.main.primaryColor};
`


export default ({ description, className })=> {

  return(
    <MainCont className={className}>
      <Row>
        <Col xs ={12}>
          <OperationCode>
            {`${description.operation}-COD.: ${description.code}`}
          </OperationCode>
          <Title>
            {truncate(description.title, 70)}
          </Title>
          <Price>
            {`${description.currency} ${priceFormat(description.value)}`}
          </Price>
          <UbicationCont>
            <SvgCont>
              <EnvironmentOutlined />
            </SvgCont>
            <span>
              {description.ubication.commune}
            </span>
          </UbicationCont>
        </Col>
      </Row>
    </MainCont>
  )
}