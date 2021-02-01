import React, { useContext,  } from 'react';
import context from '../../_context';
import styled from 'styled-components';
import Logo from './logo';
import Link from '../../_components/link';
//import { LinkButton as Button } from '../../_components/buttons';
import RateBar from './rate-bar';
import { UserOutlined } from '@ant-design/icons';

const MainCont = styled.nav`
  padding: 0 0 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #212121;
`
const NavBar = styled.ul`
  display: flex;
`
const NavItem = styled.li`
  margin-left: ${props => props.noMargin ? 0 : "1.5rem"};
`
const NavLink = styled.span`
  color: rgba(255, 255, 255, .6);
  transition: 250ms ease;
  text-decoration: none !important;
  &:hover{
    color: #fff;
  }
  &:visited{
    color: rgba(255, 255, 255, .6);
  }
`
const Button = styled.button`
  border: none;
  background: transparent;
  transition: 250ms ease;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, .6);
  &:hover{
    color: #fff;
    text-decoration: underline;
  }
`
const SvgCont = styled.svg`
  fill: rgba(255, 255, 255, .6);
  margin-right: .5rem;
  transition: 250ms ease;
  ${Button}:hover & {
    fill: #fff;
  }
`
const LoginButton = styled.a`
  min-width: 160px;
  min-height: 44px;
  border: 1px solid #fff;
  transition: 250ms ease;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  &:visited{
    color: #fff;
  }  
  &:hover{
    background-color: #fff;
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(context);
  return(
    <MainCont>
      <Logo />
      <NavBar>
        <NavItem noMargin>
          <Link to={`/about`}>
            <NavLink>
              Nosotros
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={`/properties`}>
            <NavLink>
              Propiedades
            </NavLink>
          </Link>
        </NavItem>
{/*        <NavItem>
          <Link to="/news">
            <NavLink>
              Noticias
            </NavLink>
          </Link>
</NavItem>*/}
        <NavItem>
          <Link to={`/contact`}>
            <NavLink>
              Contacto
            </NavLink>
          </Link>
        </NavItem>                          
      </NavBar>
      <RateBar />
      <LoginButton href={`http://app.clasihome.com/login?logo=${state.main.logoDark.value}&primaryColor=${state.main.primaryColor.substring(1)}`}>
        <UserOutlined />
        <span style={{ marginLeft: 8 }}>Login</span>
      </LoginButton>
  </MainCont>
  )
}