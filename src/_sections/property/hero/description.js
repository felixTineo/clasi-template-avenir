import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';
import { truncate, FormatCurrency } from '../../../_util';
import { EnvironmentOutlined } from '@ant-design/icons';

const MainCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem 4rem;
  }
`
const OperationCode = styled.p`
  color: #fff;
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
  color: #fff;
`
const Price = styled(Title)`
  color: #fff;
`
const UbicationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #fff;
  @media(min-width: 768px){
    margin: 0;
  }
`
const SvgCont = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
  color: #fff;
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
            {`${description.currency} ${FormatCurrency( description.currency, description.value)}`}
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