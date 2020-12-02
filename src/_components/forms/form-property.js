import React, { Fragment, useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input, Autocomplete } from '../inputs';
import { Button } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';
import { SearchOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigateForm } from '../../_hooks';
import PROPERTY_TYPE from '../../_constants/PROPERTY_TYPE.json';
import COMMUNES from '../../_constants/CITIES.json';
import { getSearchParams } from 'gatsby-query-params';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: ${props => props.filter ? "4rem" : "2rem"};
  position: relative;
  z-index: 10;
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "80%"};
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom: 2rem;
  }  
`
const IconButton = styled.button`
  width: 100%;
  min-height: 36px;
  border: none;
  background: #fff;
  color: ${props => props.theme.main.primaryColor};
  border-left: 1px solid ${props => props.theme.main.primaryColor};
  transition: 250ms ease;
  &:hover{
    background-color: rgba(0, 0, 0, .1);
    filter: saturate(1.7);
  }
`
export default ({ block, shadow, className, filter })=> {
  const [byCode, setByCode] = useState(false);
  const { values, onChange, onFinish, setInitial } = useNavigateForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    bathrooms: '',
    currency: '',
  });
  const params = getSearchParams();
  
  useEffect(()=>{
    if(params){
      setInitial({...params, stringSearch: ''});
    }
    if(byCode){
      setInitial({
        propertyType: '',
        operation: '',
        commune: '',
        stringSearch: '',
        priceMin: '',
        priceMax: '',
        bedrooms: '',
        bathrooms: '',
        currency: '',
      })
    }
  },[params, byCode]);

  const onChangeByCode = useCallback(e => {
    if(e.target.value === "Código"){
      setByCode(true);
    } else {
      setByCode(false);
    }
  })

  return(
    <Fragment>
    <Form onSubmit={(e) => { e.preventDefault(); onFinish(); }} block={block} shadow={shadow} className={className}>
      <Row gutterWidth={32} align="center">
        <Col xs={12} md={2}>
          <Select
            onChange={onChangeByCode}
            value=""
            default="Buscar por"
            options={["Propiedad", "Código"]}
            primary
          />
        </Col>        
        {
          byCode
          ?(
            <Col xs={12} md={8}>
              <Autocomplete
                id="stringSearch"
                onSelect={onChange}
                selected={values.commune}
                placeholder="Ingrese el código de la propiedad"
              />
            </Col>    
          )
          :(
            <Fragment>
              <Col xs={12} md={2}>
                <Select
                  id="propertyType"
                  onChange={onChange}
                  value={values.propertyType}
                  default="Propiedad"
                  options={PROPERTY_TYPE}
                  primary
                  capitalize
                /> 
              </Col>
              <Col xs={12} md={2}>
                <Select
                  id="operation"
                  onChange={onChange}        
                  value={values.operation}          
                  default="Operación"
                  options={["VENTA", "ARRIENDO"]}
                  primary
                  capitalize
                />
              </Col>    
              <Col xs={12} md={4}>
                <Autocomplete
                  id="commune"
                  onSelect={onChange}
                  selected={values.commune}
                  options={COMMUNES.map(val => val.name)}
                  placeholder="Comuna"
                />
              </Col>    
            </Fragment>                
          )
        }
        <Col xs={12} md={2}>
          <Hidden xs>
            <IconButton>
              <SearchOutlined />
            </IconButton>
          </Hidden>
          <Visible xs>
            <Button block>
              <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
              Buscar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
    {
      filter && (
        <Form onSubmit={(e) => e.preventDefault()} block={block} shadow={shadow} filter>
          <Row gutterWidth={32} align="center">
            <Col xs={12} md={2}>
              <Select
                default="Buscar por"
                options={["opcion 1", "opcion 2", "opcion 3"]}
                primary
              />
            </Col>        
            <Col xs={12} md={2}>
              <Select
                default="Propiedad"
                options={["opcion 1", "opcion 2", "opcion 3"]}
                primary
              />
            </Col>
            <Col xs={12} md={2}>
              <Select
                default="Operación"
                options={["opcion 1", "opcion 2", "opcion 3"]}
                primary
              />
            </Col>    
            <Col xs={12} md={4}>
              <Input placeholder="Comuna" />
            </Col>        
            <Col xs={12} md={2}>
              <Hidden xs>
                <IconButton>
                  <CheckOutlined />
                </IconButton>
              </Hidden>
              <Visible xs>
                <Button block>
                  <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
                  Buscar
                </Button>
              </Visible>
            </Col>
          </Row>          
        </Form>
      )
    }
    </Fragment>
  )
}